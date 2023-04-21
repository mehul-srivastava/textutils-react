import React from "react";

function AccordionItem(props) {
  return (
    <div
      className={`accordion-item show bg-${
        props.mode === "light" ? "white" : "dark"
      }`}
    >
      <h2 className="accordion-header" id={`heading${props.type}`}>
        <button
          className={`accordion-button collapsed bg-${
            props.mode === "light" ? "white" : "dark"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${props.type}`}
          aria-expanded="false"
          aria-controls={`collapse${props.type}`}
        >
          {props.heading}
        </button>
      </h2>
      <div
        id={`collapse${props.type}`}
        className={`accordion-collapse collapse ${props.show ? "show" : null}`}
        aria-labelledby={`heading${props.type}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
