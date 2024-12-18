import React  ,{useEffect , useContext}from 'react'
import UserContext from '../context/Users/UserContext'
import  "./styles.userlist.css"
export default function UserList() {





   const {getUser,getProfile,users , selectedUser} =useContext(UserContext)


   useEffect(()=>{
     getUser()
      console.log(users)
      console.log(selectedUser)
   },[])


   

  return (
    <>
    

      <div className='container_list'> 

         {users ? 
           users.map(item=>(
             <div className='card_users' key={item.id}>
               <img src={item.avatar} alt="users" />
                <p>{item.email}</p>
                <p>{item. first_name} - {item.last_name}</p>
                <button style={{color:"red"}}  onClick={()=>getProfile(item.id)} >Detail</button>
             </div>
           )) :""
        }
        
       </div>
     
    
    </>
  )
}
