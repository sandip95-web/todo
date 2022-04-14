import Home from './Components/Home'
import Form from './Components/Form'
import Nav from './Components/Nav'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
       <Route exact path='/' element={<Home/>} />
       <Route path='/addtodo' element={<Form/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
