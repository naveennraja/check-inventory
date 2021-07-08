import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
const Card = (props) => {
  const { data } = props;
  return (
    <>
      <div className='list-card'>
        <div className='box'>
          <div className='content'>
            <h4 className='model_variant'>{data['model_variant']}</h4>
            <ul className='list-group'>
              <li className='list-group-item d-flex justify-content-between align-items-center'>
                <i className='fas fa-car'></i>
                <span className='badge  rounded-pill text-capitalize body-type'>
                  {data.body_type}
                </span>
              </li>
              <li className='list-group-item d-flex justify-content-between align-items-center'>
                <i className='fas fa-gas-pump'></i>
                <span className='badge  rounded-pill  text-capitalize fuel_type'>
                  {data.fuel_type}
                </span>
              </li>
            </ul>
            <>
              <Link className='nav-link my-3' to={`/car-detail:${data.vin}`}>
                View More
              </Link>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
