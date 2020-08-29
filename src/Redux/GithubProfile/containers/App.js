import { connect } from "react-redux";
import { fetchProfile } from "../actions/actions_profile";

import AppComponent from "../components/App";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProfile: () => {
      dispatch(fetchProfile());
    },
  };
};

const Profile = connect(false, mapDispatchToProps)(AppComponent);

export default Profile;
