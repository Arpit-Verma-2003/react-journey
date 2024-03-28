import { useState } from "react";
import CoreComponents from "./Components/CoreComponents.jsx";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header.jsx";
import TabButton from "./Components/TabButton.jsx";
import Tabs from "./Components/tabs.jsx";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log({ selectedTopic });
  }
  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <main>
        <Header />
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreComponents key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <Tabs
            buttonContainer = "menu"
            buttons={
              <>
                <TabButton
                  isSelected={selectedTopic === "components"}
                  onPress={() => clickHandler("components")}
                >
                  Click it
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "jsx"}
                  onPress={() => clickHandler("jsx")}
                >
                  yoyo
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "props"}
                  onPress={() => clickHandler("props")}
                >
                  aji ha
                </TabButton>
                <TabButton
                  isSelected={selectedTopic === "state"}
                  onPress={() => clickHandler("state")}
                >
                  launde
                </TabButton>
              </>
            }
          >
            {tabContent}
          </Tabs>
        </section>
      </main>
    </div>
  );
}

export default App;
