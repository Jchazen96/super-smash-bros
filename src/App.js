import './App.css';
import Fighter from './components/Fighter'
import FighterScreen from './components/FighterScreen';
import SideNavigation from './components/SideNavigation';
import {useState} from 'react';

const characters = [
  {name: 'Roy', color: ['red', 'purple']},
  {name: 'Fox', color: ['green', 'brown']},
  {name: 'Ganondorf', color: ['purple', 'gray']},
  {name: 'Sheik', color: ['lightskyblue',  'green']},
  {name: 'Cloud', color: ['mediumseagreen', 'gold']},
  {name: 'Falco', color: ['purple', 'lightskyblue']},
  {name: 'Samus', color: ['orange', 'firebrick']},              
  {name: 'Link', color: [ 'lightblue', 'gold']},
]

function App() {
  const [visible, setVisible] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0])



  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {characters.map((element) => {
          return(<Fighter name={element.name} color={element.color} setVisible={setVisible} setSelectedCharacter={setSelectedCharacter} />)
        })}      
      </div>
      <FighterScreen isVisible={visible} setVisible={setVisible} selectedCharacter={selectedCharacter} />
      <SideNavigation isVisible={visible} characters={characters} />
    </div>
  );
}

export default App;
