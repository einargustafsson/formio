import './App.css';
import { Formio} from '@formio/react';
import FormioContrib from '@formio/contrib';
import Navigation from './components/Navigation';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Components from './components/Components';
Formio.use(FormioContrib);

function App() {
  console.log(FormioContrib);
  return (
    <div className="App">
      <div class="row">
        <div class="col-md-3">
          <Navigation/>
        </div>
        <div class="col-md-9">
          <Routes basename={'/react-app-starterkit'}>
            <Route path='/' element={<Home />}></Route>
            <Route path='components' element={<Components />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
