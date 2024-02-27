const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import { CORE_CONCEPTS } from "./data";
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreComponents(props) {
  return (
    <li>
      <img src={props.image} alt="hampe naye" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function Header() {
  const keyword = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={CORE_CONCEPTS[0].image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {keyword} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
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
      </main>
    </div>
  );
}

export default App;
