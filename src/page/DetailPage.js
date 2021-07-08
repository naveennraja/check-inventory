import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CHECK_INVENTORY_DB } from '../Const_URL';

const DetailPage = () => {
  let { id } = useParams();
  id = id.substring(1); // Removing colon  from the string
  let getData = JSON.parse(window.localStorage.getItem(CHECK_INVENTORY_DB));
  const data = getData.filter((obj) => obj.vin === id); //  Gettingt the particular  data from the id
  // Setting Icons for better visuals
  const icons = {
    body_type: 'fa-car',
    fuel_type: 'fa-gas-pump',
    doors: 'fa-door-open',
    transmission_type: 'fa-cog',
    engine_size: 'fa-weight'
  };
  // Detail page which displays the data with  the  necessary items we  can display all the items
  // Displaying  appropriate  items which users have to see.
  return (
    <>
      <div className='jumbotron text-white'>
        <Link className='btn btn-primary' to={`/`}>
          <i className='fas fa-long-arrow-alt-left m-2'></i>
          <span>Back</span>
        </Link>
        <div className='vehicle-detail-container'>
          <h4 className='text-center  model_variant'>
            {data[0].model_variant}
          </h4>
          <ul className='list-group w-50 m-auto'>
            {Object.keys(icons).map((key) => (
              <li className='list-group-item d-flex justify-content-between align-items-center'>
                <i className={`fas ${icons[key]}`}></i>
                <span className='badge  rounded-pill  text-capitalize'>
                  {data[0][key]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
