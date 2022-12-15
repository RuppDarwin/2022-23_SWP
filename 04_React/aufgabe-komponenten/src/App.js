import './App.css';
import Liste from './components/01_Liste/index.js'
import Button from './components/02_Button/index.js';
import Card from './components/03_Card/index.js';


function App() {
  return (
    <div className="App">
      <header className="bg-black">
        <Liste textTop="Coffee" textMid="Tea" textBot="Beer"/>
        <Button btnText="Sender" link="https://www.youtube.com/watch?v=o-YBDTqX_ZU&ab_channel=MusRest"/>
        <Card name="John Doe" job="Architect & Engineer" link="https://www.w3schools.com/howto/img_avatar.png"/>
      </header>
    </div>
  );
}

export default App;
