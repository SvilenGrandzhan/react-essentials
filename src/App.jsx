import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} /> */}
            {/* This line is same as above but shorter. To work variables on both sides need to be same  */}
            {/* <CoreConcept {...CORE_CONCEPTS[1]} /> */}
            {/* <CoreConcept {...CORE_CONCEPTS[2]} /> */}
            {/* <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            {CORE_CONCEPTS.map((element) => (
              // <CoreConcept title={element.title} description={element.description} image={element.image} />
              <CoreConcept key={element.title} {...element} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClick("jsx")}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClick("props")}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClick("state")}>
              State
            </TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please, select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
