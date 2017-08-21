import './list.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import { setActiveCity } from '../../actions';
import { selectCityList } from '../../selectors';

class List extends Component {

  handleClick = (e) => {
    const {setActiveCity} = this.props;
    console.log('here', e.target.getAttribute('value'))
    setActiveCity(e.target.getAttribute('value'));
  }

  render() {
    const { cityList } = this.props;
    return (
      <div className="list">
        <ul>
          {
            cityList.map((city, i) => {
              console.log(city.id)
              return (
                <li
                  value={city.id}
                  key={city.id}
                  onClick={this.handleClick}
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
  cityList: selectCityList(state)
})

const mapDispatchToProps = (dispatch) => ({
  setActiveCity: (id) => {dispatch(setActiveCity(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
