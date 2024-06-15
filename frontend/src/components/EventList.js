import React from 'react';

const EventList = ({ events, onDelete }) => {
  return (
    <div>
      <h2>Events on {events.length ? new Date(events[0].date).toLocaleDateString() : ''}</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <button onClick={() => onDelete(event._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
