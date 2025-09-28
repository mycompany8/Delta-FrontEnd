import React from 'react'

function Button({className,name}) {
    const basicStyle='p-2 px-3 rounded-md '
  return (
    <button className={`${basicStyle} ${className}`}>{name}</button>
  )
}

export default Button