const initialState = [
  { id: 1, country: "Austria" },
  { id: 2, country: "Belgium" },
  { id: 3, country: "Canada" },
];

console.log("Before Update ", initialState);

const newState = initialState.map((obj, index) => {
  if (obj.id === 2) {
    return { ...obj, id: 4, country: "India" };
  }
  return obj;
});

console.log("After Update", newState);
