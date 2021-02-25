import React from 'react'

const Play = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      stroke='#000'
      strokeLinecap='square'
      strokeWidth='2'
      ariaLabelledby='playIconTitle'
      color='#000'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M20 12L5 21V3z' />
    </svg>
  )
}

export default Play
