import {useState} from 'react';
import CoreComponents from "./Components/CoreComponents.jsx";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header.jsx";
import TabButton from "./Components/TabButton.jsx";
import { EXAMPLES } from './data';

function App() {
  const [selectedTopic,setSelectedTopic] = useState('');
  function clickHandler(selectedButton){
    setSelectedTopic(selectedButton);
    console.log({selectedTopic});
  }
  let tabContent = <p>Please select a topic</p>
  if(selectedTopic){
    tabContent = (<div id='tab-content'>
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>);
  }
  return (
    <div>
      <main>
        <Header/>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreComponents
              image={CORE_CONCEPTS[0].image}
              title ={CORE_CONCEPTS[0].title}
              description ={CORE_CONCEPTS[0].description}
            />
            <CoreComponents {...CORE_CONCEPTS[1]}
            />
            <CoreComponents
              {...CORE_CONCEPTS[2]}
            />
            <CoreComponents
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onPress = {()=>clickHandler('components')}>Click it</TabButton>
            <TabButton onPress = {()=>clickHandler('jsx')}>yoyo</TabButton>
            <TabButton onPress = {()=>clickHandler('props')}>aji ha</TabButton>
            <TabButton onPress = {()=>clickHandler('state')}>launde</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
