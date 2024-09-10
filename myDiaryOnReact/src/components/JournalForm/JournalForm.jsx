import styles from "./JournalForm.module.css"
import Button from "../Button/Button"
import { useState } from "react"
import cn from "classnames"

const JournalForm = ({ addItem }) => {
  const [formValideState, setFormValidState] = useState({
    text: true,
    date: true,
    title: true
  })

  const addJournalItem = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
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
    <form className={styles["journal-form"]} onSubmit={addJournalItem}>
      <div>
        <input
          type="text"
          name="title"
          className={cn(styles["input-title"], {
            [styles.invalid]: !formValideState.title
          })}
        />
      </div>

      <div className={cn(styles["form-row"])}>
        <label htmlFor="date" className={cn(styles["form-label"])}>
          <img src="./calendar.svg" alt="calendar icon" />
          <span>Дата</span>
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className={cn({ [styles.invalid]: !formValideState.date })}
        />
      </div>

      <div className={cn(styles["form-row"])}>
        <label htmlFor="ефпы" className={cn(styles["form-label"])}>
          <img src="./folder.svg" alt="calendar icon" />
          <span>Тэги</span>
        </label>
        <input type="text" name="tag" id="tags" />
      </div>
      <textarea
        name="text"
        id=""
        cols="30"
        rows="10"
        className={cn({ [styles.invalid]: !formValideState.text })}
      ></textarea>
      <Button text="Сохранить" type="submit" />
    </form>
  )
}

export default JournalForm
