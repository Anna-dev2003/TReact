import React from 'react' 
import './index.css'


export function UserCard(props) {

    let {name, surName, age} = props.data;
    return (
      <div className="indent">
        <div>
          User information
        </div>
        <div>
         Name: {name}
        </div>
        <div>
          Surname:{surName}
        </div>
        <div>
          Age:{age}
        </div>
      </div>
    )
}