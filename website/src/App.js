import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';

function MyButton() {
  return (
    <button>
      Button
    </button>
  );

}

function App() {
  return (
    <div>
      <AppBar position="static">
        <button>
          Button
        </button>
      </AppBar>
    </div>
  );
}

export default App;
