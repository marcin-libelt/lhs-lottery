import React from "react";
import { NUMBERS_LENGTH } from "./lib/constants";

export default function ManagerInput({ setNumbers }) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const fields = Object.fromEntries(formData);

    const newNumbers = Object.values(fields).map((number) => number * 1);
    setNumbers(newNumbers);
  };

  const handleReset = () => {
    setNumbers(Array(NUMBERS_LENGTH).fill(undefined));
  };

  const css = {
    section: { margin: "4rem 0" },
    input: {
      width: "2rem",
      height: "2rem",
      fontSize: "1.6rem",
      textAlign: "center",
      borderRadius: "100px",
    },
    form: { display: "flex", gap: "1rem" },
  };
  return (
    <section style={css.section}>
      <h2>Manager Input Numers</h2>
      <form onSubmit={handleSubmit} style={css.form}>
        {Array(NUMBERS_LENGTH)
          .fill(undefined)
          .map((_, index) => (
            <React.Fragment key={index}>
              <input
                name={`position[${index}]`}
                type="text"
                style={css.input}
              />
            </React.Fragment>
          ))}
        <button>Submit numbers</button>
        <button onClick={handleReset} type="reset">
          Reset numbers
        </button>
      </form>
    </section>
  );
}
