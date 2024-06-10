import React, { createContext, useState, useContext } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationCount, setNotificationCount] = useState(0);

  return (
    <NotificationContext.Provider value={{ notificationCount, setNotificationCount }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
