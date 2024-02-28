import CoreComponents from "./Components/CoreComponents.jsx";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header.jsx";
import TabButton from "./Components/TabButton.jsx";
function clickHandler(selectedButton){
  console.log(selectedButton);
}
function App() {
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
            <TabButton onPress = {()=>clickHandler(1)}>Click it</TabButton>
            <TabButton onPress = {()=>clickHandler(2)}>yoyo</TabButton>
            <TabButton onPress = {()=>clickHandler(3)}>aji ha</TabButton>
            <TabButton onPress = {()=>clickHandler(4)}>launde</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
