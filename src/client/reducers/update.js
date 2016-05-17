const newJobInitialState = {
  display_name: "",
  phone_number: "",
  first_name: "",
  last_name: "",
  dob_day:"",
  dob_month:"",
  dob_year:"",
  address_line_one:"",
  address_line_two:"",
  address_city:"",
  address_state:"",
  postal_code:"",
  ssn_last_four:"",
  account_number:"",
  routing_number:""
}

export default function (state = newJobInitialState, action) {
  switch (action.type) {

      case 'MOVER_USER':
      	return {
          display_name: action.display_name,
          phone_number: action.phone_number,
          first_name: state.first_name,
          last_name: state.last_name,
          dob_day: state.dob_day,
          dob_month: state.dob_month,
          dob_year: state.dob_year,
          address_line_one: state.address_line_one,
          address_line_two: state.address_line_two,
          address_city: state.address_city,
          address_state: state.address_state,
          postal_code: state.postal_code,
          ssn_last_four: state.ssn_last_four,
          account_number: state.account_number,
          routing_number: state.routing_number
      };

      case 'MOVER_LOCATION':
      	return {
		  	  display_name: state.display_name,
          phone_number: state.phone_number,
          first_name: state.first_name,
          last_name: state.last_name,
          dob_day: state.dob_day,
          dob_month: state.dob_month,
          dob_year: state.dob_year,
          address_line_one: action.address_line_one,
          address_line_two: action.address_line_two,
          address_city: action.address_city,
          address_state: action.address_state,
          postal_code: action.postal_code,
          ssn_last_four: state.ssn_last_four,
          account_number: state.account_number,
          routing_number: state.routing_number
      };

      case 'MOVER_BANK':
      	return {
          display_name: state.display_name,
          phone_number: state.phone_number,
          first_name: action.first_name,
          last_name: action.last_name,
          dob_day: action.dob_day,
          dob_month: action.dob_month,
          dob_year: action.dob_year,
          address_line_one: state.address_line_one,
          address_line_two: state.address_line_two,
          address_city: state.address_city,
          address_state: state.address_state,
          postal_code: state.postal_code,
          ssn_last_four: action.ssn_last_four,
          account_number: action.account_number,
          routing_number: action.routing_number
      };

    default:
      return state;
  }
}