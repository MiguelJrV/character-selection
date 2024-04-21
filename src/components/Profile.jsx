
import React  ,{useEffect , useContext}from 'react'
import UserContext from '../context/Users/UserContext'
export default function Profile() {
  const {getUser,getProfile,users , selectedUser} =useContext(UserContext)
  return (
    <div>
      <p>Usuario selecionado</p>
      {    selectedUser? (<div>
                 <img src={selectedUser.avatar} alt="" />      
                  <h4>{selectedUser.last_name} - { selectedUser.first_name}</h4>     
      </div>):(<h2>Usuario no selecionado</h2>)  }
      
    </div>
  )
}
