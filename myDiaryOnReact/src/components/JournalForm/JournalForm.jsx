import "./JournalForm.css"
import Button from "../Button/Button"
import { useState } from "react"

const JournalForm = ({ addItem }) => {
  const [formValideState, setFormValidState] = useState({
    text: true,
    date: true,
    title: true
  })

  const addJournalItem = (e) => {
    e.preventDefault()
    console.log(e.target)
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    console.log(formProps)
    let isFormValid = true
    if (!formProps.title?.trim().length) {
      setFormValidState((prev) => ({ ...prev, title: false }))
      isFormValid = false
    } else {
      setFormValidState((prev) => ({ ...prev, title: true }))
    }
    if (!formProps.text?.trim().length) {
      setFormValidState((prev) => ({ ...prev, text: false }))
      isFormValid = false
    } else {
      setFormValidState((prev) => ({ ...prev, text: true }))
    }
    if (!formProps.date) {
      setFormValidState((prev) => ({ ...prev, date: false }))
      isFormValid = false
    } else {
      setFormValidState((prev) => ({ ...prev, date: true }))
    }
    if (!isFormValid) {
      return
    }
    addItem(formProps)
  }
  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input
        type="text"
        name="title"
        style={{ border: formValideState.title ? "none" : "1px solid red" }}
      />
      <input
        type="date"
        name="date"
        style={{ border: formValideState.date ? "none" : "1px solid red" }}
      />
      <input type="text" name="tag" />
      <textarea
        name="text"
        id=""
        cols="30"
        rows="10"
        style={{ border: formValideState.text ? "none" : "1px solid red" }}
      ></textarea>
      <Button text="Сохранить" type="submit" />
    </form>
  )
}

export default JournalForm
