import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import EventList from './EventList';

const CalendarView = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5001/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDateClick = async (date) => {
    const selectedDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())).toISOString().split('T')[0];
    setDate(date);
    try {
      const response = await axios.get(`http://localhost:5001/events/${selectedDate}`);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/events/${id}`);
      fetchEvents(); // Fetch events again after deletion
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div>
      <Calendar onClickDay={handleDateClick} value={date} />
      <EventList events={events} onDelete={handleDelete} />
    </div>
  );
};

export default CalendarView;
