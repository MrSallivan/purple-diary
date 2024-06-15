import "./JournalForm.css"
import Button from "../Button/Button"

const JournalForm = ({ addItem }) => {
  const addJournalItem = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    addItem(formProps)
  }
  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="text" id="" cols="30" rows="10"></textarea>
      <Button
        text="Сохранить"
        type="submit"
        onClick={() => {
          console.log("Нажали")
        }}
      />
    </form>
  )
}

export default JournalForm
