import AccordionItem from "./AccordionItem";

function About(props) {
  return (
    <div
      className={`container px-4 bg-${
        props.mode === "light" ? "white" : "grey"
      }`}
    >
      <h1>
        <b>About Us</b>
      </h1>
      <div className="accordion" id="accordionExample">
        <AccordionItem
          mode={props.mode}
          type="One"
          heading="Analayse Your Text"
          show={true}
        />
        <AccordionItem
          mode={props.mode}
          type="Two"
          heading="Browser Compatible"
        />
        <AccordionItem mode={props.mode} type="Three" heading="Free To Use" />
      </div>
      <br />
    </div>
  );
}

export default About;
