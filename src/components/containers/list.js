import './list.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import { setActiveCity } from '../../actions';
import { selectCityList } from '../../selectors';

class List extends Component {

  handleClick = (e) => {
    const {setActiveCity} = this.props;
    setActiveCity(e);
  }

  render() {
    const { cityList, loading } = this.props;
    return (
       !loading && <div className="list">
        <ul>
          {
            cityList.map(city => {
              return (
                <li
                  value={city.id}
                  key={city.id}
                  onClick={() => {this.handleClick(city.id)}}
                  >
                  <div className='list--item'>
                    {city.name}
                    <span className='list--item__temp'>{city.temp} &#8451;</span>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cityList: selectCityList(state),
  loading: state.ui.loading
})

const mapDispatchToProps = (dispatch) => ({
  setActiveCity: (id) => {dispatch(setActiveCity(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
