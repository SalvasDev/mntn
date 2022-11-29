import React, {useContext, useEffect} from 'react'
import IndexContext from '../context/IndexContext'


const Index = ({ind, setIndexCurrent}) => {

const { selected, setSelected } = useContext(IndexContext)
var {selec, indexSelected } = selected     


useEffect(()=> {
  const observer = new IntersectionObserver( function(entries) {
    if ( entries[0].isIntersecting ) {
      setIndexCurrent('Start')    
      const actualIndex = {
      selec : true,
      indexSelected : 'Start'      
    }    
    setSelected( actualIndex )
    } else {
      return      
    }
  })

  // Element to observe
  observer.observe(document.querySelector('#start'));

 }, [ind])




useEffect(()=> {
  const observer = new IntersectionObserver( function(entries) {

    if ( entries[0].isIntersecting ) {

      var contMenu = document.querySelector('#ind__one')
      contMenu.classList.add('animate__fadeInUp')

      setIndexCurrent('01') 

      const actualIndex = {
      selec : true,
      indexSelected : '01'      
    }    
    setSelected( actualIndex )
    } else {
      return
      
    }
  })

  // Element to observe
  observer.observe(document.querySelector('#ind__one'));

 }, [ind])



 useEffect(()=> {
  const observer = new IntersectionObserver( function(entries) {

    if ( entries[0].isIntersecting ) {
      var contMenu = document.querySelector('#ind__two')
      contMenu.classList.add('animate__fadeInUp')

      setIndexCurrent('02')    
      const actualIndex = {
      selec : true,
      indexSelected : '02'      
    }    
    setSelected( actualIndex )
    } else {
      return
      
    }
  })

  // Element to observe
  observer.observe(document.querySelector('#ind__two'));

 },[ind])



 useEffect(()=> {
  const observer = new IntersectionObserver( function(entries) {

    if ( entries[0].isIntersecting ) {
      
      var contMenu = document.querySelector('#ind__three')
      contMenu.classList.add('animate__fadeInUp')
     
      setIndexCurrent('03')    
      const actualIndex = {
      selec : true,
      indexSelected : '03'      
    }    
    setSelected( actualIndex )
    } else {
      return
      
    }
  })

  // Element to observe
  observer.observe(document.querySelector('#ind__three'));

 },[ind])


   var btnSelected = selec && (indexSelected === ind)  ? 'index__item selected' : 'index__item'  


    var newInd = ind === 'Start' ? 'start' : ind === '01' ? 'ind__one' : ind === '02' ? 'ind__two' : ind === '03' ? 'ind__three' : null
    var identi = '#'+newInd

  return (


        <a 
            href={identi}
            className= { btnSelected }
        >
            {ind}
         </a>

  )
}

export default Index


