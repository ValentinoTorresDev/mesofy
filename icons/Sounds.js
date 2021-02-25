import React from 'react'

const Sounds = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      stroke='#000'
      strokeLinecap='square'
      strokeWidth='2'
      ariaLabelledby='soundsIconTitle'
      color='#000'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M12 7v10M15 10v4M18 8v8M21 13v-2M9 4v16M6 9v6M3 13v-2' />
    </svg>
  )
}

export default Sounds
