// Placeholder to host a component
import React from 'react';

const Hours = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const hours = {
    weekday: '10:00 AM - 4:00 PM',
    weekend: '9:00 AM - 8:00 PM',
  };

  const today = new Date();
  const currentDay = days[today.getDay()];

  const openingHours = ['Saturday', 'Sunday'].includes(currentDay) ? hours.weekend : hours.weekday;

  return (
    <div>
      <h3>Today's Hours</h3>
      <p>{openingHours}</p>
    </div>
  );
};

export default Hours;
