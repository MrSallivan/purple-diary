import "./JournalForm.css"
import Button from "../Button/Button"

const JournalForm = ({ addItem }) => {
  const addJournalItem = (e) => {
    e.preventDefault()
    console.log(e.target)
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    console.log(formProps)
    addItem(formProps)
  }
  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="text" id="" cols="30" rows="10"></textarea>
      <Button text="Сохранить" type="submit" />
    </form>
  )
}

export default JournalForm
