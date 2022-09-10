import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//form.classList.add('was-validated')
const Form = () => {
  const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  const [nameFeedback, setNameFeedback] = useState("invalid-feedback");
  //const [emailFeedback, setEmailFeedback] = useState("invalid-feedback");
  const navigate = useNavigate();
  const submit = () => {
    if (name === "") {
      setNameFeedback("text-danger");
    } else {
      navigate(`/categories/${name}`);
    }
  };
  return (
    <div className="container p-4 w-50 mt-5">
      <div className="form-floating mb-3">
        <input
          value={name}
          onChange={(e) => {
            setNameFeedback("invalid-feedback");
            setName(e.target.value);
          }}
          type="email"
          className="form-control"
          required
        />
        <label>Name</label>
        <div className={nameFeedback}>Please enter a name.</div>
      </div>
      {/* <div className="form-floating">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          required
        />
        <label>Name</label>
        <div className={emailFeedback}>Please provide a valid zip.</div>
      </div> */}

      <button
        onClick={submit}
        type="button"
        className="btn btn-outline-dark mt-3 w-100"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Form;
