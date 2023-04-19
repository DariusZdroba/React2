import './App.css';
import './index.css';
import {useState} from 'react';
import TypeColor from './TypeColor';
import SquareText from './SquareText';
function App() {
  const [colorValue, setColorValue] = useState('');
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="App">
    
    <SquareText 
    colorValue = {colorValue}
    setColorValue = {setColorValue}
    isDark = {isDark}

    />
    <TypeColor
    colorValue = {colorValue}
    setColorValue = {setColorValue}
    isDark={isDark}
    setIsDark={setIsDark}
    />
    </div>
  );
}

export default App;
