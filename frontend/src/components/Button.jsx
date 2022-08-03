import React from 'react'

const Button = ({text, color, extra, textColor, hover, type, onClick}) => {
  return (
    <button className={`w-2/5 p-2 ${color} ${extra} ${textColor} ${hover} rounded transition-all ease-in delay-75`} 
      type = {type} onClick = {onClick}>
      {text}
      </button>
  )
}
Button.defaultProps = {
    color : 'bg-gray-600', 
    extra : '', 
    textColor : 'text-gray-200', 
    hover : 'hover:bg-gray-200',
    type : 'button'
}

export default Button