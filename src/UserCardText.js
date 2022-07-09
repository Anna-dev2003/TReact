import React from "react";
import './index.css' 

export function UserCardText({data}){
    let {name, surName, age} = data;
  
    return (
      <>
      <div className="indent">
        Your info: {name} - {surName} - {age}
      </div>
      <div className="indent">
        Привет {name}, тебе {age}, {age >= 18 ? 'я могу' : 'я не могу'} налить тебе выпить чего-нибудь
      </div>
      </>
     
    )
  }