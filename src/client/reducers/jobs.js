const jobsInitialState = {
  jobs: [], 
  job: {},
  current_job: [],
  completed_jobs: []
}

export default function (state = jobsInitialState, action) {
  switch (action.type) {
    case 'GET_JOBS':

      return {
        jobs: [...action.jobs], // [...state.jobs, ...action.jobs]
        job: state.job,
        current_job: state.current_job,
        completed_jobs: state.completed_jobs
      };

    case 'GET_JOB':

      return {
        jobs: state.jobs,
        job: action.job,
        current_job: state.current_job,
        completed_jobs: state.completed_jobs
      };

    case 'CURRENT_JOB':

      return {
        jobs: state.jobs,
        job: state.job,
        current_job: action.current_job,
        completed_jobs: state.completed_jobs
      };

    case 'COMPLETE':

      return {
        jobs: state.jobs,
        job: state.job,
        current_job: state.current_job,
        completed_jobs: action.completed_jobs
      };

    case 'FILTER_JOBS':

      switch(action.filter){

        case 'PRICE_HIGH':
         
          
          return {
            ...state,
            jobs:state.jobs.sort((a,b) => a.price > b.price)
          }

        case 'PRICE_LOW':
         
          
          return {
            ...state,
            jobs:state.jobs.sort((a,b) => b.price > a.price)
          }

        case 'TRIP_HIGH':
        
          return {
            ...state,
            jobs:state.jobs.sort((a,b)=> Number(a.trip_distance) > Number(b.trip_distance))
          }

        case 'TRIP_LOW':
          return {
            ...state,
            jobs:state.jobs.sort((a,b)=> Number(b.trip_distance) > Number(a.trip_distance))
          }

        case 'DISTANCE_HIGH':
        console.log(state.jobs)
          return {
            ...state,
            jobs:state.jobs.sort((a,b)=> Number(b.trip_distance) > Number(a.trip_distance))
          }

        case 'DISTANCE_LOW':
          return {
            ...state,
            jobs:state.jobs.sort((a,b)=> Number(b.trip_distance) > Number(a.trip_distance))
          }

      }


    default:
      return state;
  }
}
