const userInitialState = {
  profile: {},
  mover_profile: "",
  mover: false
}

export default function (state = userInitialState, action) {
  switch (action.type) {
    case 'GET_PROFILE':

      return {
        ...state, profile: action.profile
      };

      case 'MOVER_ID':

      return {
        mover_profile: action.mover_profile
      };

      case 'MOVER':

      return {
        mover: action.mover
      };

      case 'GET_CUSTOMER':

      return {
        customer_id: action.customer_id
      };

    default:
      return state;
  }
}








