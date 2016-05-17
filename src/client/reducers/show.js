const showInitialState = {
  show: false,
  tab1: true,
  tab2: false,
  tab3: false
}

export default function (state = showInitialState, action) {
  switch (action.type) {
    
    case 'SHOW_REPORT':
      return {
        	show: action.show,
		  	tab1: state.tab1,
		  	tab2: state.tab2,
		  	tab3: state.tab3
      };

      case 'SHOW_TAB1':
      	return {
        	show: state.show,
		  	tab1: action.tab1,
		  	tab2: action.tab2,
		  	tab3: action.tab3
      };

      case 'SHOW_TAB2':
      	return {
        	show: state.show,
		  	tab1: action.tab1,
		  	tab2: action.tab2,
		  	tab3: action.tab3
      };

      case 'SHOW_TAB3':
      	return {
        	show: state.show,
		  	tab1: action.tab1,
		  	tab2: action.tab2,
		  	tab3: action.tab3
      };

    default:
      return state;
  }
}