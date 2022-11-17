const initialState = [
  { id: 1, country: "Austria" },
  { id: 2, country: "Belgium" },
  { id: 3, country: "Canada" },
];

const newState = initialState.map((obj, index) => {
  console.log("obj : ", obj.country);
  console.log("index : ", index);
});
