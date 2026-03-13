export const initialState =
  JSON.parse(localStorage.getItem("favorites")) || [];

export function favoritesReducer(state, action) {

  switch(action.type){

    case "TOGGLE":

      let updated;

      if(state.includes(action.payload)){
        updated = state.filter(id => id !== action.payload);
      }
      else{
        updated = [...state, action.payload];
      }

      localStorage.setItem("favorites",JSON.stringify(updated));

      return updated;

    default:
      return state;

  }

}