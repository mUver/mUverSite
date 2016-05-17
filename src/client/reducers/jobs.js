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

    default:
      return state;
  }
}
