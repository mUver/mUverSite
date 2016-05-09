import api from 'api/api';
import store from 'store';
//var Stripe = require ("stripe") ("pk_test_3RsaJVqvBeCubIJT7jd6Egny");

api.new('https://radiant-eyrie-75982.herokuapp.com/api/');
// api.new('http://10.68.0.26:8000/api/');

export function login(user, pass) {
  return api.login(user, pass);
}

export function addNewJob(data) {
  console.log(data);
	return api.post("jobs/", data)
}

export function addCustomer(token) {
  return api.post("customer/", {token:token})
}

export function becomeMover(data) {
  console.log(data);
  return api.post("stripe/", data)
}

export function confirmJob(job, id) {
  return api.patch("jobs/" + job + "/", {mover_profile: id})
}

export function getCustomer() {
  return api.get("profile/").then(function(resp){
    store.dispatch({
      type:"GET_CUSTOMER",
      customer_id: resp.data.customer_id
    })
  })
}

export function getJobs() {
  return api.get("jobs/").then(function(resp){
    store.dispatch({
      type:"GET_JOBS",
      jobs: resp.data.results
    })
  })
}

export function getMover () {
  return api.get("profile/").then(function(resp){
    store.dispatch({
      type: "GET_MOVER",
      mover: resp.data.mover
    })
  })
}

export function getUser() {
  return api.get("profile/").then(function(resp){
    store.dispatch({
      type: 'GET_PROFILE',
      profile: resp.data 
    })
  })
}

export function getMoverId () {
  return api.get("profile/").then(function(resp){
    store.dispatch({
      type:'MOVER_ID',
      mover_profile: resp.data.user.id
    })
  })
}

export function addNewUser(username, password, cb){
 return api.post('user/', {username:username, password:password,}).then(function(){
   api.login(username, password).then(function(){
      cb();
   }).catch(function(err){
     console.log(err);
   });
 }).catch(function(err){
   console.log(err);
 });
}