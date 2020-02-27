import { PROFILE_FETCHED, PROFILE_EDITED } from '../actions/actions_profile'

const profile = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_FETCHED:
      return action.payload
    case PROFILE_EDITED: // edit one profile from an array of profiles / state = []
      let newState = JSON.parse(JSON.stringify(state));
      newState = replaceProfile(newState, action.payload);
      return newState;
    default:
      return state
  }
}

export default profile;

function replaceProfile(profiles, newProfile) {
  const newProfiles = [];
  profiles.forEach(function(thisProfile) {
    if(thisProfile.name === newProfile.name) {
      newProfiles.push(thisProfile);
    } else {
      newProfiles.push(thisProfile);
    }
  });
  return newProfiles;
}
