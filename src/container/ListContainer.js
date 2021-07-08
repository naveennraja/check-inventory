import React from 'react';
import Card from '../components/UIComponents/Card/Card';

const ListContainer = (props) => {
  const { contents } = props;
  // List container for generating list of items
  return (
    <>
      <div className='list-container'>
        {contents.map((key) => (
          <Card key={key.vin} data={key}></Card>
        ))}
      </div>
    </>
  );
};

export default ListContainer;
