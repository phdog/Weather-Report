import './main-screen.css';
import React from 'react';

export default function MainScreen(props) {
  const { name, temp, pressure, humidity, loading, id, addCity, removeCity } = props;
  return (
    <div className='main-screen'>
      {loading ? <div className='main-screen--loader'></div>
        : <div>
            <div className='main-screen--position'>
                {id==='local' && 'Вы находитесь здесь'}
            </div>
            <div className='main-screen--buttons'>
                <span
                  className='main-screen--buttons__button'
                  onClick={()=> {removeCity(id)}}
                >
                  удалить
                </span>
                <span
                  className='main-screen--buttons__button'
                  onClick={() => {addCity(id)}}
                  >
                    добавить
                </span>
            </div>

          <div className='main-screen--left'>
            <div className='main-screen--left--temp'>
              {temp}
              <span className='main-screen--left--temp__sign'>&#8451;</span>
            </div>
            <div className='main-screen--left__name'>
              {name}
            </div>
          </div>
          <div className='main-screen--right'>
            <div className='main-screen--right--box'>
               <span className='main-screen--right--box__tag'>давление</span>{pressure}
                <span className='main-screen--right--box__unit'>mm</span>
            </div>
            <div>
              <span className='main-screen--right--box__tag'>влажность</span>{humidity}
              <span className='main-screen--right--box__unit'>%</span>
            </div>
          </div>

        </div>
      }


    </div>
  )
}
