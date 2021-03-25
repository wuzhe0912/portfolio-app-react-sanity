import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Experience from './views/Experience';
import Projects from './views/Projects';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route component={Home} path='/' exact></Route>
        <Route component={Experience} path='/experience' exact></Route>
        <Route component={Projects} path='/projects' exact></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
