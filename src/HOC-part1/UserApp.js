import React from "react";

import { withUsers } from "./withUsers";

class UserApp extends React.Component{  
    render(){
        // console.log(this.props.users)
        const { users } = this.props
        return (
            <div>
                {users.map((user) => (

                    <div key={user.id}>
                        <h2>
                            {user.name}
                        </h2>
                        <p>
                            {user.email}
                        </p>
                        <p>
                            {user.website}
                        </p>
                    </div>
                ))}
            </div>
        )
    }
}

export default withUsers(UserApp)

// export default UserApp