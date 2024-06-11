import "./Button.css"
// import { useState } from "react"

function Button({ text, type }) {
  return (
    <button type={type} className="button accent">
      {text}
    </button>
  )
}
export default Button
