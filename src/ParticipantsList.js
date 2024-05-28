import React from "react";
import { compareNumbers } from "./lib/utils";

export default function ParticipantsList({ children, participants, numbers }) {
  const css = {
    wrapper: {
      display: "flex",
      gap: "1rem",
      flexDirection: "column",
      marginBottom: "1rem",
    },
    section: { marginBottom: "4rem" },
  };
  return (
    <section style={css.section}>
      {children}
      {participants.length ? (
        <div style={css.wrapper}>
          {participants.map((person, index) => (
            <Participant
              person={person}
              key={person.person.email}
              lotteryNumbers={numbers}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}

function Participant({ person, lotteryNumbers }) {
  const {
    person: { firstName, lastName, email },
    numbers,
  } = person;

  const matchedCount = compareNumbers(numbers, lotteryNumbers);

  const css = {
    item: {
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      border: "1px solid gray",
      padding: "0.175rem 0.5rem",
      borderRadius: "10px",
    },
    winner: { color: "green" },
  };

  return (
    <div style={css.item}>
      <h3>{`${firstName} ${lastName}`}</h3>
      <div>{numbers.join(" - ")}</div>
      {matchedCount === 6 && <div style={css.winner}>{email}</div>}
    </div>
  );
}
