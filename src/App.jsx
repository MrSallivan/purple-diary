import "./App.css"
import Button from "./components/Button/Button"
import CardButton from "./components/CardButton/CardButton"
import JornalItem from "./components/JournalItem/JornalItem"
import LeftPanel from "./layouts/LeftPanel/LeftPanel"
import Body from "./layouts/Body/Body"
import Header from "./components/Header/Header"
import JournalList from "./components/JournalList/JournalList"
import JornalAddBtn from "./components/JornalAddBtn/JornalAddBtn"
import { useState } from "react"

function App() {
  const data = [
    {
      title: "Подготовка к обновлению курсов",
      text: "Горные походы открывают удивительный природный ландшафт",
      date: new Date()
    },
    {
      title: "Подготовка к обновлению выставки",
      text: "Думал, что очень много времени ",
      date: new Date()
    }
  ]
  const [inputData, setInputData] = useState("")

  const inputChange = (event) => {
    setInputData(event.target.value)
  }

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JornalAddBtn />
        <JournalList>
          <CardButton>
            <JornalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JornalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>
        <input type="text" onChange={inputChange} value={inputData} />
      </Body>
    </div>
  )
}

export default App
