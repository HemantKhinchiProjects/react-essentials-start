import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
  let tabContent = "Please Click a Button";
  function handlerClick(selectedButton) {
    // selectedButton === "Components, JSX, Props, State"
    // selectedButton === "Components"

    tabContent = selectedButton;
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
            <TabButton onTabClicker={() => handlerClick("component")}>
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
          {tabContent}
        </section>
      </main>
    </div>
  );
}
export default App;
