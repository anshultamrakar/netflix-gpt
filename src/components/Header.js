import React from 'react'

const Header = ({className}) => {
  return (
    <header className={`max-w-screen-lg mx-auto py-3 px-3 ${className}`}>
      <img className="max-w-48" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt = "logo"/>
    </header>
  )
}

export default Header