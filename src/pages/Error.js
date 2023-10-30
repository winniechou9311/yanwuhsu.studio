import React from 'react'
import MainNavbar from 'src/components/MainNavbar'

const Error = () => {
  return (
    <div>
    <MainNavbar/>
    <main>
        <h1>An Error occurred!</h1>
        <p>Could not find this page!</p>
    </main>
    </div>
  )
}

export default Error