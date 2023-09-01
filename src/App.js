import { Container } from 'react-bootstrap';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import './api/axiosDefaults'
import JoinForm from './pages/auth/JoinForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Switch>
          <Route exact path='/' render={()=> <h1>Home</h1>} />
          <Route exact path='/signin' render={()=> <h1>Sign In</h1>} />
          <Route exact path='/join' render={()=> <JoinForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
