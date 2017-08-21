import './main-screen.css';
import React from 'react';

export default function MainScreen(props) {
  const { name, temp, pressure, humidity, loading, id } = props;
  return (
    <div className='main-screen'>
      {loading ? <div className='main-screen--loader'></div>
        : <div>
            <div className='main-screen--position'>
                {id==='local' && 'Вы находитесь здесь'}
            </div>

          <div className='main-screen--left'>
            <div className='main-screen--left--temp'>
              {temp}
              <span className='main-screen--left--temp__sign'>C</span>
            </div>
            <div className='main-screen--left__name'>
              {name}
            </div>
          </div>
          <div className='main-screen--right'>
            <div className='main-screen--right--box'>
               <span className='main-screen--right--box__tag'>давление</span>{pressure}
            </div>
            <div>
              <span className='main-screen--right--box__tag'>влажность</span>{humidity}
            </div>
          </div>

        </div>
      }


    </div>
  )
}
