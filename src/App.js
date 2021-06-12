
import './App.css';
import SignIn from './components/SignIn';
import Recover from './components/Recover';
import SignUp from './components/SignUp';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="main__wrapper">
      <SignIn/>
      <Recover/>
      <SignUp/>

      <Contact/>
      </div>
     
    </div>
  );
}

export default App;
