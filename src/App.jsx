import CoreComponents from "./Components/CoreComponents.jsx";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header.jsx";

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
      </main>
    </div>
  );
}

export default App;
