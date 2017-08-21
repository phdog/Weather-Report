import './index.css';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectActiveCity, getActiveID } from '../../selectors';

import Search from './search';
import MainScreen from '../main-screen';

class Body extends Component {

  render() {
    const { activeCity, loading, id } = this.props;
    return (
      <div className='body'>
        <MainScreen
          name={activeCity.name}
          temp={activeCity.temp}
          pressure={activeCity.pressure}
          humidity={activeCity.humidity}
          loading={loading}
          id={id}
        />
        <Search />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCity: selectActiveCity(state),
  loading: state.ui.loading,
  id: getActiveID(state)
})

export default connect(mapStateToProps)(Body);
