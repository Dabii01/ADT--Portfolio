import { useState } from 'react'
import './App.css'

function App() {
  return(
    <body>
      <h1>Registration Form</h1>
      
      <form action="" method="get" class="form">
      <div class="form">
        <input type="text" name="name" id="name" placeholder='Enter your name'required />
      </div>
      <div class="form">
        <input type="password" name="password" id="password" placeholder='Enter your password'required />
      </div>
      <Button />
      </form>
    </body>

  )
}

export default App
