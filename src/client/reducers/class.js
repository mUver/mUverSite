const classInitialState = {
  class1: "active",
  class2: "tab",
  class3: "tab"
}

export default function (state = classInitialState, action) {
  switch (action.type) {

      case 'CLASS_TAB1':
      	return {
		  	  class1: action.class1,
		  	  class2: action.class2,
		  	  class3: action.class3
      };

      case 'CLASS_TAB2':
      	return {
		  	  class1: action.class1,
		  	  class2: action.class2,
		  	  class3: action.class3
      };

      case 'CLASS_TAB3':
      	return {
		  	  class1: action.class1,
		  	  class2: action.class2,
		  	  class3: action.class3
      };

    default:
      return state;
  }
}