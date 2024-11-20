import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[1660px] bg-white shadow-sm m-5 rounded-[20px] ${className}`}>
        {children}
    </div>
  )
}

export default Container