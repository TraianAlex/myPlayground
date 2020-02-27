import { connect } from 'react-redux';
import AppComponent from '../components/App';

const mapStateToProps = state => {
  return {
    info: state.info
  };
}

const AppEx = connect(mapStateToProps)(AppComponent);

export default AppEx;
