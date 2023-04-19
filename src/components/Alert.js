function Alert(props) {
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return (
    props.details && (
      <div
        className={`alert alert-${props.details.type} alert-dismissible fade show w-50 me-auto ms-auto mt-5`}
      >
        <svg
          id="check-circle-fill"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "24px", width: "24px", verticalAlign: "middle" }}
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
        <strong className="ms-3">{capitalize(props.details.type)}: </strong>
        {props.details.message}
      </div>
    )
  );
}

export default Alert;
