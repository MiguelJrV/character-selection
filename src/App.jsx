import { useState } from 'react'

import './App.css'
///componets

import Profile from './components/Profile'
import UserList from './components/UserList'
import UserState from './context/Users/UserState'


/////context


function App() {


  return (
    <>


      <UserState>
   


            <UserList />
   

          
            <Profile />
     



      </UserState>









    </>
  )
}

export default App
