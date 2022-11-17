const initialState = [
  { id: 3, country: "Japan" },
  { id: 4, country: "Belgium" },
  { id: 1, country: "India" },
  { id: 5, country: "Canada" },
  { id: 2, country: "Austria" },
];

console.log("Old value : ", initialState);

initialState.sort((a, b) => (a.id > b.id ? 1 : -1));

console.log("New sorted value : ", initialState);
