import React, { useState } from 'react';
import './MoveDetails.css';

const MoveDetails = ({ details }) => {
  const {
    estimate_id,
    moving_from,
    moving_to,
    property_size,
    total_items,
    distance,
    moving_on,
    additional_information,
    items = {}, // Ensure items is part of the details object
    old_floor_no,
    old_elevator_availability,
    old_packing_required,
    old_distance_from_truck_to_door,
    new_floor_no,
    new_elevator_availability,
    new_packing_required,
    new_distance_from_truck_to_door
  } = details;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (

    <div className="move-details">

      <div className="request-id">Request# {estimate_id}</div>
      <div className="move-info">
        <div>
          <strong>From:</strong> {moving_from}
        </div>
        <div>
          <strong>To:</strong> {moving_to}
        </div>
        <div className="move-property">
          <div>
            <span role="img" aria-label="house">🏠</span> {property_size}
          </div>
          <div>
            <span role="img" aria-label="boxes">📦</span> {total_items}
          </div>
          <div>
            <span role="img" aria-label="distance">📏</span> {distance} km
          </div>
          <div>
            <span role="img" aria-label="calendar">📅</span> {new Date(moving_on).toLocaleString()}
          </div>
        </div>
        <div className="disclaimer">
          Disclaimer: {additional_information}
        </div>
      </div>
      <div className="action-buttons">
        <button className="btn-details" onClick={toggleExpand}>
          {isExpanded ? 'Hide Move Details' : 'View Move Details'}
        </button>
        <button className="btn-quotes">Quotes Awaiting</button>
      </div>
      {isExpanded && (
        <div className="expanded-details">
          <h3>Inventory Details</h3>
          <div className="inventory">
            <details>
              <summary>Living Room ({items.Living_Room ? items.Living_Room.length : 0})</summary>
              <div className="room-details">
                {items.Living_Room && items.Living_Room.length > 0 ? (
                  items.Living_Room.map((item, index) => (
                    <div key={index} className="inventory-item">
                      <div>{item.name}</div>
                      <div>{item.quantity}</div>
                    </div>
                  ))
                ) : (
                  <div>No items available</div>
                )}
              </div>
            </details>
            <details>
              <summary>Bed Room ({items.Bed_Room ? items.Bed_Room.length : 0})</summary>
              <div className="room-details">
                {items.Bed_Room && items.Bed_Room.length > 0 ? (
                  items.Bed_Room.map((item, index) => (
                    <div key={index} className="inventory-item">
                      <div>{item.name}</div>
                      <div>{item.quantity}</div>
                    </div>
                  ))
                ) : (
                  <div>No items available</div>
                )}
              </div>
            </details>
            <details>
              <summary>Kitchen ({items.Kitchen ? items.Kitchen.length : 0})</summary>
              <div className="room-details">
                {items.Kitchen && items.Kitchen.length > 0 ? (
                  items.Kitchen.map((item, index) => (
                    <div key={index} className="inventory-item">
                      <div>{item.name}</div>
                      <div>{item.quantity}</div>
                    </div>
                  ))
                ) : (
                  <div>No items available</div>
                )}
              </div>
            </details>
            <details>
              <summary>Bathroom ({items.Bathroom ? items.Bathroom.length : 0})</summary>
              <div className="room-details">
                {items.Bathroom && items.Bathroom.length > 0 ? (
                  items.Bathroom.map((item, index) => (
                    <div key={index} className="inventory-item">
                      <div>{item.name}</div>
                      <div>{item.quantity}</div>
                    </div>
                  ))
                ) : (
                  <div>No items available</div>
                )}
              </div>
            </details>
          </div>
          <h3>House Details</h3>
          <div className="house-details">
            <div>
              <strong>Existing House Details:</strong>
              <div>Floor No.: {old_floor_no}</div>
              <div>Elevator Available: {old_elevator_availability}</div>
              <div>Packing Required: {old_packing_required}</div>
              <div>Distance from truck to door: {old_distance_from_truck_to_door}</div>
            </div>
            <div>
              <strong>New House Details:</strong>
              <div>Floor No.: {new_floor_no}</div>
              <div>Elevator Available: {new_elevator_availability}</div>
              <div>Packing Required: {new_packing_required}</div>
              <div>Distance from truck to door: {new_distance_from_truck_to_door}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoveDetails;
