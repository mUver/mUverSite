const jobsInitialState = {
  jobs: [], 
  job: {}
}

export default function (state = jobsInitialState, action) {
  switch (action.type) {
    case 'GET_JOBS':

      return {
        jobs: [...action.jobs], // [...state.jobs, ...action.jobs]
        job: state.job
      };

      case 'GET_JOB':

      return {
        jobs: state.jobs,
        job: action.job
      };

    default:
      return state;
  }
}
