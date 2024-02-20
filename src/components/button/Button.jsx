import React from 'react'

const Button = ({value,to,textColor,from,borderColor}) => {
  return (
    <div
      className={`
    text-${textColor}
      bg-gradient-to-r from-${to} to-${from} w-[150px] flex items-center justify-center rounded-3xl
    border-2 ${borderColor} hover:rounded-2xl
        ease-in-out duration-300
         cursor-pointer p-1 max-h-12 max-w-22
    `}
    >
     <h1 className='text-[20px]'>{value}</h1>
    </div>
  );
}

export default Button