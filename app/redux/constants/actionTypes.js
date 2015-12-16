/**
 * Syncronous action types
 */
const HIDE_WELCOME_MESSAGE = 'HIDE_WELCOME_MESSAGE';

const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION';

const CLEAR_USER_DATA = 'CLEAR_USER_DATA';

/*
 * Asyncronous action types
 */ 

// user.login
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

// user.logout
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// user.signup
const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// user.confirmSignup
const CONFIRM_EMAIL_REQUEST = 'CONFIRM_EMAIL_REQUEST';
const CONFIRM_EMAIL_SUCCESS = 'CONFIRM_EMAIL_SUCCESS';
const CONFIRM_EMAIL_FAILURE = 'CONFIRM_EMAIL_FAILURE';

// user.acceptTerms
const ACCEPT_TERMS_REQUEST = 'ACCEPT_TERMS_REQUEST';
const ACCEPT_TERMS_SUCCESS = 'ACCEPT_TERMS_SUCCESS';
const ACCEPT_TERMS_FAILURE = 'ACCEPT_TERMS_FAILURE';

// patient.post
const CREATE_PATIENT_REQUEST = 'CREATE_PATIENT_REQUEST';
const CREATE_PATIENT_SUCCESS = 'CREATE_PATIENT_SUCCESS';
const CREATE_PATIENT_FAILURE = 'CREATE_PATIENT_FAILURE';

// access.leaveGroup
const REMOVE_PATIENT_REQUEST = 'REMOVE_PATIENT_REQUEST';
const REMOVE_PATIENT_SUCCESS = 'REMOVE_PATIENT_SUCCESS';
const REMOVE_PATIENT_FAILURE = 'REMOVE_PATIENT_FAILURE';

// access.removeMember
const REMOVE_MEMBER_REQUEST = 'REMOVE_MEMBER_REQUEST';
const REMOVE_MEMBER_SUCCESS = 'REMOVE_MEMBER_SUCCESS';
const REMOVE_MEMBER_FAILURE = 'REMOVE_MEMBER_FAILURE';

// invitation.send
const SEND_INVITATION_REQUEST = 'SEND_INVITATION_REQUEST';
const SEND_INVITATION_SUCCESS = 'SEND_INVITATION_SUCCESS';
const SEND_INVITATION_FAILURE = 'SEND_INVITATION_FAILURE';

// invitation.cancel
const CANCEL_INVITATION_REQUEST = 'CANCEL_INVITATION_REQUEST';
const CANCEL_INVITATION_SUCCESS = 'CANCEL_INVITATION_SUCCESS';
const CANCEL_INVITATION_FAILURE = 'CANCEL_INVITATION_FAILURE';

// invitation.accept
const ACCEPT_INVITATION_REQUEST = 'ACCEPT_INVITATION_REQUEST';
const ACCEPT_INVITATION_SUCCESS = 'ACCEPT_INVITATION_SUCCESS';
const ACCEPT_INVITATION_FAILURE = 'ACCEPT_INVITATION_FAILURE';

// invitation.dismiss
const DISMISS_INVITATION_REQUEST = 'DISMISS_INVITATION_REQUEST';
const DISMISS_INVITATION_SUCCESS = 'DISMISS_INVITATION_SUCCESS';
const DISMISS_INVITATION_FAILURE = 'DISMISS_INVITATION_FAILURE';

// access.setMemberPermissions
const SET_MEMBERSHIP_PERMISSIONS_REQUEST = 'SET_MEMBERSHIP_PERMISSIONS_REQUEST';
const SET_MEMBERSHIP_PERMISSIONS_SUCCESS = 'SET_MEMBERSHIP_PERMISSIONS_SUCCESS';
const SET_MEMBERSHIP_PERMISSIONS_FAILURE = 'SET_MEMBERSHIP_PERMISSIONS_FAILURE';

// no api call in handler
const UPDATE_PATIENT_DATA_REQUEST = 'UPDATE_PATIENT_DATA_REQUEST';
const UPDATE_PATIENT_DATA_SUCCESS = 'UPDATE_PATIENT_DATA_SUCCESS';
const UPDATE_PATIENT_DATA_FAILURE = 'UPDATE_PATIENT_DATA_FAILURE';

// patient.put
const UPDATE_PATIENT_REQUEST = 'UPDATE_PATIENT_REQUEST';
const UPDATE_PATIENT_SUCCESS = 'UPDATE_PATIENT_SUCCESS';
const UPDATE_PATIENT_FAILURE = 'UPDATE_PATIENT_FAILURE';

// user.put
const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
