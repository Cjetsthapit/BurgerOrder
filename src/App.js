import './App.css';
import Banner from './components/Banner';
import {Route} from 'react-router-dom'
function App() {
  
  return (
    <Route exact path='/BurgerOrder' component={Banner}/>
  );
}

export default App;
