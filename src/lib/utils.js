/** Zadanie 2 - 1h8m */

//const BASE_URL = "https://1z7dlf443d.execute-api.us-east-1.amazonaws.com/prod";
const MOCK_DATA = {
  participants: [
    {
      person: {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@yahoo.com",
      },
      numbers: [1, 10, 2, 9, 8, 3],
    },
    {
      person: {
        firstName: "John",
        lastName: "Kowalski",
        email: "koval@hotmail.com",
      },
      numbers: [5, 2, 10, 3, 1, 6],
    },
  ],
};

export const fakeFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 1000);
  });
};

export const calculateMatchedNumbers = (a, b) => {
  const setA = new Set(a);
  const setB = new Set(b);
  return Array.from(setA.intersection(setB));
};
