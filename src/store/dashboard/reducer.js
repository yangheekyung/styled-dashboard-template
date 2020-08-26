import update from 'immutability-helper';
import {actionTypes, sidebarToggle} from './action';

const initState = {}

const dashboardReducer = (state = initState, action = {}) => {
  const {
    type = '',
    payload = {}
  } = action;

  switch(type) {
    case actionTypes.INIT :
      return update(state, {
        user : {$set: payload}
      });
    case actionTypes.SIDEBAR_TOGGLE :
      return update(state, {
        layout : {
          common : {
            $toggle : ['sidebarToggle']
          }
        }
      })
    default :
      return state;
  }
}

export default dashboardReducer;