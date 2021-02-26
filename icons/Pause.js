import React from 'react'

const Pause = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      stroke='#000'
      strokeLinecap='square'
      strokeWidth='2'
      ariaLabelledby='pauseIconTitle'
      color='#000'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M5 4H9V20H5z' />
      <path d='M15 4H19V20H15z' />
    </svg>
  )
}

export default Pause
