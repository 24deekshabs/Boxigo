import React from 'react';

const LivingRoom = ({ items }) => {
  return (
    <div className="room-details">
      <h4>Living Room</h4>
      {items.map((item, index) => (
        <div key={index} className="inventory-item">
          <div>{item.name}</div>
          <div>{item.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default LivingRoom;
