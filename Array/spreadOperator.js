const initialState = [
  { id: 1, country: "Austria" },
  { id: 2, country: "Belgium" },
  { id: 3, country: "Canada" },
];

const newState = [...initialState, { id: 4, country: "India" }];
console.log("newState : ", newState);
console.log("length : ", newState.length);
