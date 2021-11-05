
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import OanTuTi from './pages/OanTuTi/OanTuTi';
import DatVePhim from './pages/DatVePhim/DatVePhim';
import Header from './components/HomePage/Header';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/oantuti" component={OanTuTi}/>
        <Route exact path="/datvephim" component={DatVePhim}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
