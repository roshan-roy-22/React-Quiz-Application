import { DataProvider } from './context/dataContext'
import Start from './components/Start'
import Quiz from './components/Quiz'
import Result from './components/Result';

function App() {


  return (
    <>
      <DataProvider>
        <Start/>
        <Quiz/>
        <Result/>
      </DataProvider>
    </>
  )
}

export default App
