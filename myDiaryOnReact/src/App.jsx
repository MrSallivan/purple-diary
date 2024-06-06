import "./App.css"
import Button from "./components/Button/Button"
import CardButton from "./components/CardButton/CardButton"
import JournalItem from "./components/JournalItem/JournalItem"
import LeftPanel from "./layouts/LeftPanel/leftPanel"
import Body from "./layouts/Body/Body"

function App() {
  const data = [
    {
      title: "Подготовка к обновлению курсов",
      text: "Горгые походы открывают удивительные природные ландшафты",
      date: new Date()
    },
    {
      title: "Поход в горы",
      text: "Думал, чт оочень много времени",
      date: new Date()
    },
    {
      title: "Подготовка к экзаменам",
      text: "Я молодец, я всё знаю. Сдам на пять!",
      date: new Date()
    }
  ]

  return (
    <div className="app">
      <LeftPanel></LeftPanel>
      <Body></Body>
      <h1>Caption</h1>
      <p>Same text</p>
      <CardButton>Новое воспоминание</CardButton>
      <CardButton>
        <JournalItem
          title={data[0].title}
          date={data[0].date}
          text={data[0].text}
        />
      </CardButton>
      <CardButton>
        <JournalItem
          title={data[1].title}
          date={data[1].date}
          text={data[1].text}
        />
      </CardButton>
      <CardButton>
        <JournalItem
          title={data[2].title}
          date={data[2].date}
          text={data[2].text}
        />
      </CardButton>
      <Button />
    </div>
  )
}

export default App
