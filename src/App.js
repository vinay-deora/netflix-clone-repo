import logo from './logo.svg';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from "./component/home/Home"
import Header from "./component/Header/Header"
import './App.scss';
// import './component/home/Home.scss';



function App() {
  return <Router>
  <Header/>
<Routes>
<Route  path='' element={<Home/>}/>



</Routes>

  </Router>

}

export default App;
