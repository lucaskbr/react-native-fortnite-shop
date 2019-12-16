import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART_SUCCESS':
      return produce(state, draftState => {
        const { data } = action;
        draftState.push(data);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draftState => {
        const { id, amount } = action;
        const productIndex = state.findIndex(item => id === item.id);
        draftState[productIndex].amount = Number(amount);
      });
    case '@cart/REMOVE_FROM_CART':
      return produce(state, draftState => {
        const { id } = action;
        const productIndex = state.findIndex(item => id === item.id);
        draftState.splice(productIndex, 1);
      });
    default:
      return state;
  }
}
