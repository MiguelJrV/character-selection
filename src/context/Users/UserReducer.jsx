import React from 'react'
import { GET_PROFILE  , GET_USERS} from '../type'



export default function (state,action){


  const {payload,type} =action;

  switch (type) {
    case  GET_USERS:
           return {
            ...state,
            users:payload
           }
    case GET_PROFILE:
      return{
        ...state,
        selectedUser:payload
      }

  
  
    default:
     return {
        ...state
     }
    
  }


}

