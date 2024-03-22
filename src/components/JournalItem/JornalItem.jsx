import "./JornalItem.css"

const JornalItem = ({ date, text, title }) => {
  const formatedDate = new Intl.DateTimeFormat("ru-RU").format(date)
  return (
    <>
      <h2 className="jornal-item__header">{title}</h2>
      <div className="jornal-item__body">
        <div className="jornal-item__date">{formatedDate}</div>
        <div className="jornal-item__text">{text}</div>
      </div>
    </>
  )
}

export default JornalItem
