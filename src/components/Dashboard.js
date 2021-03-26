import React from 'react'

const Dashboard = (props) => (
  <div>
    <h1>Dashboard</h1>
    <h1>{props.loggedInStatus}</h1>
  </div>
)

export default Dashboard