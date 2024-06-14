import "./JournalForm.css"
import { useState } from "react"
import Button from "../Button/Button"

const JournalForm = () => {
  const [inputData, setInputData] = useState("")
  const inputChange = (e) => {
    setInputData(e.target.value)
  }
  const addJournalItem = (e) => {
    e.preventDefault
    console.log(e)
  }
  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" value={inputData} onChange={inputChange} />
      <textarea name="post" id="" cols="30" rows="10"></textarea>
      <Button text="Сохранить" type="submit" />
    </form>
  )
}

export default JournalForm
