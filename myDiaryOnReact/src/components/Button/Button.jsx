import "./Button.css"
import { useState } from "react"

function Button() {
  const [text, setText] = useState("Сохранить")
  console.log("hui")
  const clicked = () => {
    setText((prevState) =>
      prevState === "Сохранить" ? "Закрыть" : "Сохранить"
    )
    console.log(text)
  }
  return (
    <button onClick={clicked} className="button accent">
      {text}
    </button>
  )
}
export default Button
