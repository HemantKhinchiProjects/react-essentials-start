import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [salectedTopic, setsalectedTopic] = useState("Components");
  function handlerClick(selectedButton) {
    // selectedButton === "Components, JSX, Props, State"
    // selectedButton === "Components"
    setsalectedTopic(selectedButton);
    console.log(salectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onTabClicker={() => handlerClick("Components")}>
              Components
            </TabButton>
            <TabButton onTabClicker={() => handlerClick("JSX")}>JSX</TabButton>
            <TabButton onTabClicker={() => handlerClick("Props")}>
              Props
            </TabButton>
            <TabButton onTabClicker={() => handlerClick("State")}>
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[salectedTopic].title}</h3>
            <p>{EXAMPLES[salectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[salectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
