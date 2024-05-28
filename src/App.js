import "./App.css";
import ParticipantsLength from "./ParticipantsLength";
import ParticipantsList from "./ParticipantsList";
import ManagerInput from "./ManagerInput";
import { useState } from "react";
import { useFetchData, usePrizeSum } from "./lib/hooks";
import { NUMBERS_LENGTH } from "./lib/constants";

/** Zadanie 2 - 1h8m */
/** Zadanie 3 - 52m */
/** Stylowanie - */

export default function App() {
  const [numbers, setNumbers] = useState(() =>
    Array(NUMBERS_LENGTH).fill(undefined)
  );
  const participants = useFetchData();
  const participantsLength = participants.length;

  const prizeSum = usePrizeSum(numbers, participants);

  // styling
  const css = {
    app: {
      padding: "4rem",
      maxWidth: "800px",
      margin: "0 auto",
    },
    header: {
      borderBottom: "2px solid black",
    },
    footer: {
      borderTop: "1px solid black",
    },
  };

  return (
    <div style={css.app}>
      <header style={css.header}>
        <h1>Lufthansa Lottery</h1>
      </header>
      <main>
        <ManagerInput setNumbers={setNumbers} />
        <ParticipantsList participants={participants} numbers={numbers}>
          <ParticipantsLength count={participantsLength} />
        </ParticipantsList>
      </main>
      <footer style={css.footer}>
        <h2>{`Sum of prizes: ${prizeSum}EUR`}</h2>
      </footer>
    </div>
  );
}
