import React from 'react'

const Login = (props) => {
  return (
    <div>
        <h1>please login</h1>
        <button onClick={props.onClick}> Login</button>
    </div>
  )
}

export default Login