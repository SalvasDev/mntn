import React from 'react'
import pic01 from '../img/pic-01.png'
import pic02 from '../img/pic-02.png' 
import pic03 from '../img/pic-03.png' 
import arrow from '../img/arrow_downward_24px.svg'

const Article = ( { subtitle, numArticle, titleArticle, textArticle, grid, idArticle } ) => {

  var order =   grid === 'left' ? 'article wrapper grid__left animate__animated' : 'article wrapper idArticle animate__animated' 

  return (
    <div className={ order } id={idArticle}>

      <div className={ grid === 'left' ? 'info__right' : 'info'} >        

        <span className="article__number">{numArticle}</span>    

        <div className="article__info">
          <div className="subtitle__group">
            <div className="line"></div>
            <h2>{subtitle}</h2>                            
          </div>
          <h2 className="article__title">{titleArticle}</h2>    
          <p className="article__text">{textArticle}</p>      
          <div className="more">
            <p className="read__more">read more</p>
            <img src={arrow} alt="" className="horizontal__arrow" />
          </div>            
        </div>

      </div>

      <div className={ grid === 'left' ? 'picture__left' : 'picture'}>
        <img src={ numArticle === '01' 
          ? pic01
          : numArticle === '02' 
          ? pic02
          : numArticle === '03' 
          ? pic03 : null } 
          alt="Articlepic" />
      </div>

    </div>
  )
}

export default Article
