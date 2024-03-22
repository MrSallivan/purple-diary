import "./App.css"
import Button from "./components/Button/Button"
import CardButton from "./components/CardButton/CardButton"
import JornalItem from "./components/JournalItem/JornalItem"
import LeftPanel from "./layouts/LeftPanel/LeftPanel"
import Body from "./layouts/Body/Body"
import Header from "./components/Header/Header"
import JournalList from "./components/JournalList/JournalList"
import JornalAddBtn from "./components/JornalAddBtn/JornalAddBtn"

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
      <Body>Body</Body>
    </div>
  )
}

export default App
