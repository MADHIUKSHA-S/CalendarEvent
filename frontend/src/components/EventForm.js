import React, { useState } from 'react';
import axios from 'axios';

const EventForm = ({ onEventAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = { title, description, date: new Date(date).toISOString() };

    try {
      const response = await axios.post('http://localhost:5001/events', newEvent);
      console.log('Event added:', response.data);
      onEventAdded();
      setTitle('');
      setDescription('');
      setDate('');
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
