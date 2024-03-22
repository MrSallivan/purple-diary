import { useState } from "react"
import "./Button.css"
function Button() {
  let [text, setText] = useState("Save")
  console.log("rerender")
  const clicked = () => {
    setText(text == "Close" ? "Save" : "Close")
  }
  return (
    <button onClick={clicked} className="button accent" type="button">
      {text}
    </button>
  )
}

export default Button
