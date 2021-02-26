import React from 'react'

const Volume = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      stroke='#000'
      strokeLinecap='square'
      strokeWidth='2'
      ariaLabelledby='volumeLoudIconTitle'
      color='#000'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M13 5v14l-5-4H3V9h5z' />
      <path strokeLinecap='round' d='M13 14c1.5-1 1.5-3 0-4' />
      <path d='M16 16c2.086-2.086 2.086-5.914 0-8m2 11c3.986-3.986 4.008-9.992 0-14' />
    </svg>
  )
}

export default Volume
