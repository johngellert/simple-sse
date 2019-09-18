const currentColor = (state = '', action) => {
  console.log(action);
  switch (action.type) {
    case "SET_COLOR":
      return action.payload;
    default:
      return state;
  }
};

export default currentColor;

