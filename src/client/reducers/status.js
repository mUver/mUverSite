const statusInitialState = {
  status1: "activeStatus",
  status2: "middle",
  status3: "end"
}

export default function (state = statusInitialState, action) {
  switch (action.type) {

      case 'STATUS':
      	return {
		  	  status1: action.status1,
		  	  status2: action.status2,
		  	  status3: action.status3
      };

    default:
      return state;
  }
}