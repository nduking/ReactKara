import React from 'react'

const Content = ({className, contentText}) => {
  return (
    <contents className={`${className}`}>{`${contentText}`}</contents>
  )
}

export default Content