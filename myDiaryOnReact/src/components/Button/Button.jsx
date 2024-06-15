import "./Button.css"
// import { useState } from "react"

function Button({ text, type, onClick }) {
  return (
    <button type={type} className="button accent" onClick={onClick}>
      {text}
    </button>
  )
}
export default Button
