import Accrodion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accrodion className="accordion">
          <AccordionItem id="experience" title="We got 20 years of experience" className="accordion-item">
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>We are in the business of planning highly individualized vacation trips for more than 20 years.</p>
            </article>
          </AccordionItem>
          <AccordionItem id="local-guides" title="We got 20 years of experience" className="accordion-item">
            <article>
              <p>You are not doing this alone.</p>
              <p>We are always workig with local guides to have pleasant experience.</p>
            </article>
          </AccordionItem>
        </Accrodion>
      </section>
    </main>
  );
}

export default App;
