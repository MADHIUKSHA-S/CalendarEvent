import React, { useState } from 'react';
import CalendarView from './components/CalendarView';
import EventForm from './components/EventForm';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleEventAdded = () => {
    setRefresh(!refresh); // Toggle refresh state to trigger re-fetch
  };

  return (
    <div>
      <h1>Event Calendar</h1>
      <EventForm onEventAdded={handleEventAdded} />
      <CalendarView key={refresh} />
    </div>
  );
};

export default App;
