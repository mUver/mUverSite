const newJobInitialState = {
  title: "",
  pickup_for: "",
  description: "",
  price: "",
  image_url: "",
  destination_a: "",
  destination_b: "",
  phone_number: "",
  number: "",
  exp_month: "",
  exp_year: "",
  cvc: ""
}

export default function (state = newJobInitialState, action) {
  switch (action.type) {

      case 'USER_FORM':
      	return {
          title: state.title,
          description: state.description,
          price: state.price,
          image_url: state.image_url,
          destination_b: state.destination_b,
		  	  pickup_for: action.pickup_for,
		  	  destination_a: action.destination_a,
		  	  phone_number: action.phone_number,
          number: state.number,
          exp_month: state.exp_month,
          exp_year: state.exp_year,
          cvc: state.cvc
      };

      case 'JOB_FORM':
      	return {
		  	  title: action.title,
		  	  description: action.description,
		  	  price: action.price,
          image_url: action.image_url,
          destination_b: action.destination_b,
          pickup_for: state.pickup_for,
          destination_a: state.destination_a,
          phone_number: state.phone_number,
          number: state.number,
          exp_month: state.exp_month,
          exp_year: state.exp_year,
          cvc: state.cvc
      };

      case 'STRIPE_FORM':
      	return {
          title: state.title,
          description: state.description,
          price: state.price,
          image_url: state.image_url,
          destination_b: state.destination_b,
          pickup_for: state.pickup_for,
          destination_a: state.destination_a,
          phone_number: state.phone_number,
		  	  number: action.number,
		  	  exp_month: action.exp_month,
		  	  exp_year: action.exp_year,
          cvc: action.cvc
      };

    default:
      return state;
  }
}