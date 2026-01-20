import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  const handlePayment = () => {
    
    

    const upiLink = "https://instasize.com/p/7c6fdd50e4c5f1ab1070d9cec1bf96d95f5033b4bc0723965d0e78b0f9291664";

    window.location.href = upiLink;
  };
  return (
    <div>
      <div className='card'>
        
        
        <div className='top'>
          <img src={props.brandLogo} alt="huuuu" />
          <button>save<Bookmark size={19} /></button>
        </div>

        <div className='center'>
          <h3>{props.company}</h3><span>{props.datePosted}</span>
          <h2>{props.post} </h2>
          
          <div className='tag'>
            <button>{props.tag1}</button>
            <button>{props.tag2}</button></div>

        </div>
        
        
        <div className='bottom'>

        <div><h2>{props.pay}</h2>
        <p> {props.location}</p></div>
        <button onClick={handlePayment}>apply new</button>

      </div>
      </div>
    </div>
  )
}

export default Card
