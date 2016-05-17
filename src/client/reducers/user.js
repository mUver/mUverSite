const userInitialState = {
  profile: {
    user_id: "",
    mover: false,
    user: {
      username: ''
    },
  },
  mover_profile: "",
  customer_id: "",
  in_progress: false
}

export default function (state = userInitialState, action) {
  switch (action.type) {
    case 'GET_PROFILE':

      return {
        profile: action.profile,
        mover_profile: state.mover_profile,
        customer_id: state.customer_id,
        in_progress: state.in_progress
      };

    case 'MOVER_ID':

      return {
        profile: state.profile,
        mover_profile: action.mover_profile,
        customer_id: state.customer_id,
        in_progress: state.in_progress
      };

    case 'GET_ID':

      return {
        profile: {
          mover: state.profile.mover,
          user_id: action.user_id,
          user:{
            username: state.username
          },
        },
        mover_profile: state.mover_profile,
        customer_id: state.customer_id,
        in_progress: state.in_progress
      };

    case 'MOVER':

      return {
        profile: {
          mover: action.mover,
          user_id: state.user_id,
          user:{
            username: state.username
          }
        },
        mover_profile: state.mover_profile,
        customer_id: state.customer_id,
        in_progress: state.in_progress
      };

    case 'GET_CUSTOMER':

      return {
        profile: state.profile,
        customer_id: action.customer_id,
        mover_profile: state.mover_profile,
        in_progress: state.in_progress
      };

    case 'PROGRESS':

      return {
        profile: state.profile,
        customer_id: state.customer_id,
        mover_profile: state.mover_profile,
        in_progress: action.in_progress
      };

    case 'LOGIN':

      return {
        profile: {
          mover: state.mover,
          user_id: state.user_id,
          user:{
            username: action.username
          }
        },
        mover_profile: state.mover_profile,
        customer_id: state.customer_id,
        in_progress: state.in_progress
      };

    case 'LOGOUT':

      return {
        profile: {
          mover: state.mover,
          user_id: state.user_id,
          user:{
            username: action.username
          }
        },
        mover_profile: state.mover_profile,
        customer_id: state.customer_id,
        in_progress: state.in_progress
      };


    default:
      return state;
  }
}








