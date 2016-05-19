import api from 'api/api';
import store from 'store';
//var Stripe = require ("stripe") ("pk_test_3RsaJVqvBeCubIJT7jd6Egny");

api.new('https://radiant-eyrie-75982.herokuapp.com/api/');
// api.new('http://10.68.0.26:8000/api/');

export function login(user, pass) {
  return api.login(user, pass);
}

export function logout() {
  return api.logout();
}

export function reset(id, cb) {
  api.patch("profiles/" + id + "/", {_demo_user_reset:true}).then(function(){
    cb();
  })
}

export function changeColor() {

}

export function getProgress() {
  return api.get("profile/").then(function(resp){
    store.dispatch({
      type:"PROGRESS",
      in_progress: resp.data.in_progress
    })
  })
}

export function moverConfirm(id) {
  return api.patch("jobs/" + id + "/", {confirmation_mover:true})
}

export function userConfirm(id) {
  return api.patch("jobs/" + id + "/", {confirmation_user:true})
}

export function reportMover(mover) {

}

export function getCurrentJob() {
  return api.get("profile/jobs/").then(function(resp){
    store.dispatch({
      type:"CURRENT_JOB",
      current_job: resp.data.results
    })
  })
}

export function addNewJob(data) {
	return api.post("jobs/", data)
}

export function addCustomer(token) {
  return api.post("customer/", {token:token})
}

export function becomeMover(data) {
  return api.post("stripe/", data)
}

export function confirmJob(job, id) {
  return api.patch("jobs/" + job + "/", {mover_profile: id})
}

export function moverUser(id, data) {
  return api.patch("profiles/" + id + "/", data)
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

export function sortJobs(val) {
  return api.get("jobs/" + val).then(function(resp){
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

export function getId () {
  return api.get("profile/").then(function(resp){
    store.dispatch({
      type:'GET_ID',
      user_id: resp.data.id
    })
  })
}

export function getCompletedJobs() {
  return api.get("profile/jobs/completed/").then(function(resp){
    store.dispatch({
      type:"COMPLETE",
      completed_jobs: resp.data.results
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