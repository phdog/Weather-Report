import './index.css';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addCity, removeCity } from '../../actions';
import { selectActiveCity, getActiveID } from '../../selectors';

import Search from './search';
import MainScreen from '../main-screen';
import List from './list';

class Body extends Component {



  render() {
    const { activeCity, loading, id, addCity, removeCity } = this.props;
    return (
      <div className='body'>
        <MainScreen
          addCity={addCity}
          removeCity={removeCity}
          name={activeCity.name}
          temp={activeCity.temp}
          pressure={activeCity.pressure}
          humidity={activeCity.humidity}
          loading={loading}
          id={id}
        />
        <Search />
        <List />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCity: selectActiveCity(state),
  loading: state.ui.loading,
  id: getActiveID(state)
})

const mapDispatchToProps = (dispatch) => ({
  addCity: (id) => {dispatch(addCity(id))},
  removeCity: (id) => {dispatch(removeCity(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Body);
