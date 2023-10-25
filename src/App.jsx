import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import componentImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

function App() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <div>
      <Header />
      <main>
        <section id="core-concept">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title="Components" description="Description 1" img={componentImg} />
            <CoreConcept title="Components 2" description="Description 2" />
            <CoreConcept title="Components 3" description="Description 3" />
            <CoreConcept title="Components 4" description="Description 4" />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
