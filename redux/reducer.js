export const fetchData = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      console.log(action.data);
      return action.data;
    default:
      return state;
  }
};
