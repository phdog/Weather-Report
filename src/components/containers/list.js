import './list.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import { setActiveCity } from '../../actions';
import { selectCityList, getActiveID } from '../../selectors';

class List extends Component {

  handleClick = (e) => {
    const {setActiveCity} = this.props;
    setActiveCity(e);
  }

  render() {
    const { cityList, activeID } = this.props;
    return (
       cityList.length >0 && <div className="list">
        <ul>
          {
            cityList.map(city => {
              return (
                <li
                  value={city.id}
                  key={city.id}
                  onClick={() => {this.handleClick(city.id)}}
                  >
                  <div className={activeID === city.id ? 'menu__active' : 'list--item' }>
                    {city.name}
                    <span className={activeID === city.id ? 'menu__active__temp' : 'list--item__temp' }>
                      {city.temp} &#8451;
                    </span>
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
  activeID: getActiveID(state)
})

const mapDispatchToProps = (dispatch) => ({
  setActiveCity: (id) => {dispatch(setActiveCity(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
