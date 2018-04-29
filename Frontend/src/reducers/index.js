const initialState = {
  sport:[]
};

export default(state = initialState, action) => {
  switch (action.type) {
    case 'GET_SPORT':
      return{
            ...state,
            sport:action.payload.data

      }

    default:
      return state;
  }
}
