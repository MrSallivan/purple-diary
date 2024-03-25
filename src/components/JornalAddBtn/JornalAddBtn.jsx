import CardButton from "../CardButton/CardButton"
import "./JornalAddBtn.css"

const JornalAddBtn = () => {
  return <CardButton className="journal-add">
		<img src="./plus.svg" alt="кнопка плюс" />
		Новое воспоминание
		</CardButton>
}

export default JornalAddBtn
