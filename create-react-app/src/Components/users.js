import React from 'react'

const Users_card = ({loading,users}) => {
    return loading ? (   
          <div id="main">
            <img src="https://i.pinimg.com/originals/5c/37/14/5c3714cba608140b1d6c15ce3f699068.gif" alt="Loaading.." className="loader"/>
          </div>
        ) : 
        (
          <div id="main">
    
          {users.map(user =>
                      <div className="project column-3">
                        {
                          console.log(user)
                        }
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User_ID: {user.id}</p>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users_card;