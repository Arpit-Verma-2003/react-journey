import { CORE_CONCEPTS } from "../data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

export default function Header() {
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