import { useState, useEffect } from "react";
import { fakeFetch, compareNumbers } from "./utils";
import { LOTTER_PRIZE_MAP } from "./constants";

export function useFetchData() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fakeFetch().then((data) => {
      setParticipants(data.participants);
    });
  }, []);

  return participants;
}

export function usePrizeSum(lotteryNumbers, participants) {
  return participants.reduce((accu, curr) => {
    const prizeValue = LOTTER_PRIZE_MAP.get(
      compareNumbers(curr.numbers, lotteryNumbers)
    );

    if (prizeValue) {
      accu += prizeValue;
    }

    return accu;
  }, 0);
}
