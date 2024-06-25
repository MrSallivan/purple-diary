// import { useState } from "react"
import "./App.css"
import LeftPanel from "./layouts/LeftPanel/LeftPanel"
import Body from "./layouts/Body/Body"
import Header from "./components/Header/Header"
import JournalList from "./components/JournalList/JournalList"
import JournalForm from "./components/JournalForm/JournalForm"
import JornalAddButton from "./components/JournalAddButton/JournalAddButton"
import { useState } from "react"

const INITIAL_DATA = [
  // {
  //   id: 1,
  //   title: "Подготовка к обновлению курсов",
  //   text: "Горгые походы открывают удивительные природные ландшафты",
  //   date: new Date()
  // },
  // {
  //   id: 2,
  //   title: "Поход в горы",
  //   text: "Думал, чт оочень много времени",
  //   date: new Date()
  // },
  // {
  //   id: 3,
  //   title: "Подготовка к экзаменам",
  //   text: "Я молодец, я всё знаю. Сдам на пять!",
  //   date: new Date()
  // }
]
function App() {
  const [items, setItems] = useState(INITIAL_DATA)
  const addItem = (item) => {
    setItems((prev) => [
      ...prev,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id: prev.length > 0 ? Math.max(...prev.map((i) => i.id)) + 1 : 1
      }
    ])
  }

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JornalAddButton />
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm addItem={addItem} />
      </Body>
    </div>
  )
}

export default App
