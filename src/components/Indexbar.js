import React, {useContext} from 'react'
import IndexContext from '../context/IndexContext'
import Index from './Index'


const Indexbar = () => {

  const { setIndexCurrent} = useContext(IndexContext)

  const arrIndex = ['Start', '01', '02', '03']
  var i = 0;
  return (
    
    <div className="index__bar">
      <div className="index">
        { arrIndex.map(ind => {
          i = i + 1
          return (
            <Index 
              key={i.toString()}
              ind = {ind}
              setIndexCurrent = {setIndexCurrent}
            />
          )
          })}          
      </div>

      <div className="progress__bar"></div>
      
    </div>
  )
}

export default Indexbar

