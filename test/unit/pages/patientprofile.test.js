/* global chai */
/* global describe */
/* global sinon */
/* global it */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
var assert = chai.assert;
var expect = chai.expect;

import { mapStateToProps } from '../../../app/pages/patientprofile/patientprofile';

describe('PatientProfile', () => {
  describe('mapStateToProps', () => {
    describe('logged-in user is PWD viewing own profile', () => {
      const state = {
        allUsersMap: {
          a1b2c3: {userid: 'a1b2c3'}
        },
        currentPatientInViewId: 'a1b2c3',
        loggedInUserId: 'a1b2c3',
        working: {
          fetchingPatient: {inProgress: false, notification: null},
          fetchingUser: {inProgress: false, notification: null}
        }
      };
      const result = mapStateToProps({blip: state});

      it('should map allUsersMap.a1b2c3 to user', () => {
        expect(result.user).to.deep.equal(state.allUsersMap.a1b2c3);
      });

      it('should map working.fetchingUser.inProgress to fetchingUser', () => {
        expect(result.fetchingUser).to.equal(state.working.fetchingUser.inProgress);
      });

      it('should map allUsersMap.a1b2c3 to patient', () => {
        expect(result.patient).to.deep.equal(state.allUsersMap.a1b2c3);
      });

      it('should map working.fetchingPatient.inProgress to fetchingPatient', () => {
        expect(result.fetchingPatient).to.deep.equal(state.working.fetchingPatient.inProgress)
      });
    });

    describe('logged-in user is viewing a different PWD\'s profile', () => {
      const state = {
        allUsersMap: {
          a1b2c3: {userid: 'a1b2c3'},
          d4e5f6: {userid: 'd4e5f6'}
        },
        currentPatientInViewId: 'd4e5f6',
        loggedInUserId: 'a1b2c3',
        working: {
          fetchingPatient: {inProgress: true, notification: null},
          fetchingUser: {inProgress: false, notification: null}
        }
      };
      const result = mapStateToProps({blip: state});

      it('should map allUsersMap.a1b2c3 to user', () => {
        expect(result.user).to.deep.equal(state.allUsersMap.a1b2c3);
      });

      it('should map working.fetchingUser.inProgress to fetchingUser', () => {
        expect(result.fetchingUser).to.equal(state.working.fetchingUser.inProgress);
      });

      it('should map allUsersMap.d4e5f6 to patient', () => {
        expect(result.patient).to.deep.equal(state.allUsersMap.d4e5f6);
      });

      it('should map working.fetchingPatient.inProgress to fetchingPatient', () => {
        expect(result.fetchingPatient).to.deep.equal(state.working.fetchingPatient.inProgress)
      });
    });
  });
});
