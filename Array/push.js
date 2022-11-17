const initialState = [
  { id: 1, country: "Austria" },
  { id: 2, country: "Belgium" },
  { id: 3, country: "Canada" },
];

console.log("Old value : ", initialState);

initialState.push({ id: 4, country: "India" }, { id: 5, country: "Japan" });

console.log("New pushed value : ", initialState);
