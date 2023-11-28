import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import { CORE_CONCEPTS } from "./data";

function App() {
  let tabContent = "Please click a button";

  const handleClick = (selectedButton) => {
    tabContent = selectedButton;
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            {/* This line is as above but shorter. To work variables on both sides need to same */} <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("components")}> Components </TabButton>
            <TabButton onClick={() => handleClick("jsx")}> JSX </TabButton>
            <TabButton onClick={() => handleClick("props")}> Props </TabButton>
            <TabButton onClick={() => handleClick("state")}> State </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
