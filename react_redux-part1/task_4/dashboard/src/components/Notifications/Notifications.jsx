import { memo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../../assets/close-icon.png';
import NotificationItem from '../NotificationItem/NotificationItem';

const opacityKeyframes = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 }
};

const bounceKeyframes = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' }
};

const styles = StyleSheet.create({
  notificationTitle: {
    display: 'flex',
    justifyContent: 'end',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    position: 'fixed',
    right: '1rem',
    top: '1rem',
    zIndex: 10,
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    '@media (max-width: 900px)': {
      display: 'flex',
      justifyContent: 'end',
      cursor: 'pointer',
    },
    ':hover': {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: ['1s', '0.5s'],
      animationIterationCount: [3, 3],
      animationTimingFunction: 'ease-in-out',
    }
  },
  notifications: {
    display: 'none',
    flexDirection: 'column',
    borderStyle: 'dotted',
    borderColor: '#e1003c',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  notificationsVisible: {
    display: 'flex',
    flexDirection: 'column',
    borderStyle: 'dotted',
    borderColor: '#e1003c',
    position: 'fixed',
    top: '3rem',
    right: '1rem',
    backgroundColor: 'white',
    padding: '1rem',
    zIndex: 5,
    minWidth: '250px',
    '@media (max-width: 900px)': {
      display: 'block',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1000,
      backgroundColor: 'white',
      padding: 0,
      margin: 0,
    },
  },
   notificationsList: {
    padding: '0',
    margin: '0.5rem 0 0 0',
    listStyle: 'none',
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '10px 8px',
      fontSize: '20px',
      borderBottom: '1px solid black',
      listStyle: 'none',
    },
  },
  notificationsButton: {
    position: 'absolute',
    cursor: 'pointer',
    right: '5px',
    top: '20px',
    background: 'transparent',
    border: 'none',
  },
   notifimg: {
    width: '0.5rem',
    height: '0.5rem',
  },
  notifparagraph: {
    margin: '0',
    fontWeight: 'bold',
    '@media (max-width: 900px)': {
      margin: '10px',
      fontSize: '20px',
    },
  },
  notificationTypeDefault: {
    color: 'blue',
  },
  notificationTypeUrgent: {
    color: 'red',
  },
  menuItem: {
    textAlign: 'right',
  },
});


const Notifications = memo(function Notifications({
    displayDrawer,
    handleDisplayDrawer,
    handleHideDrawer,
    notifications = [],
    markNotificationAsRead
}) {
    return (
        <>
            <div className={css(styles.notificationTitle)} onClick={handleDisplayDrawer}>
                Your notifications
            </div>
            {displayDrawer && (
                <div className={css(styles.notifications, styles.notificationsVisible)}>
                    {notifications.length > 0 ? (
                        <>
                            <p className={css(styles.notifparagraph)}>Here is the list of notifications</p>
                            <button onClick={handleHideDrawer} aria-label="Close" className={css(styles.notificationsButton)}>
                                <img className={css(styles.notifimg)} src={closeIcon} alt="close icon" />
                            </button>
                            <ul className={css(styles.notificationsList)}>
                                {notifications.map(notification => (
                                    <NotificationItem
                                        key={notification.id}
                                        id={notification.id}
                                        type={notification.type}
                                        value={notification.value}
                                        html={notification.html}
                                        markAsRead={() => markNotificationAsRead(notification.id)}
                                        className={notification.type === 'urgent' ? css(styles.notificationTypeUrgent) : css(styles.notificationTypeDefault)}
                                    />
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p>No new notifications for now</p>
                    )}
                </div>
            )}
        </>
    );
});

export default Notifications;
