import React from 'react';

const BedRoom = ({ items }) => {
  return (
    <div className="room-details">
      <h4>Bed Room</h4>
      {items.map((item, index) => (
        <div key={index} className="inventory-item">
          <div>{item.name}</div>
          <div>{item.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default BedRoom;
