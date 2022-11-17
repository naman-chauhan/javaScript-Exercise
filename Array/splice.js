const initialState = [
  { id: 1, country: "Austria" },
  { id: 2, country: "Belgium" },
  { id: 3, country: "Canada" },
  { id: 4, country: "India" },
  { id: 5, country: "Japan" },
];

console.log("Old value : ", initialState);

initialState.splice(1, 1);

console.log("New poped value : ", initialState);
