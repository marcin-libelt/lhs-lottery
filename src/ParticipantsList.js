import React from "react";
import { calculateMatchedNumbers } from "./lib/utils";

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

  const matchedNumbers = calculateMatchedNumbers(numbers, lotteryNumbers);

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
    number: {
      width: "25px",
      height: "25px",
      lineHeight: "25px",
      textAlign: "center",
      borderRadius: "20px",
      backgroundColor: "#ededed",
    },
    numbers: {
      display: "flex",
      gap: "8px",
    },
  };

  return (
    <div style={css.item}>
      <h3>{`${firstName} ${lastName}`}</h3>
      <div style={css.numbers}>
        {numbers.map((num, index) => {
          return (
            <div
              key={index}
              style={{
                ...css.number,
                backgroundColor: matchedNumbers.includes(num)
                  ? "#ffe16e"
                  : "#ededed",
              }}
            >
              {num}
            </div>
          );
        })}
      </div>
      {matchedNumbers.length === 6 && <div style={css.winner}>{email}</div>}
    </div>
  );
}
