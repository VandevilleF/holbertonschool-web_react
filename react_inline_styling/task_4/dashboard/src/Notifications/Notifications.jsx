import closebtn from '../assets/close-button.png'
import NotificationItem from './NotificationItem';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const opacityKeyframes = {
  '0%': {
    opacity: 0.5
  },
  '100%': {
    opacity: 1
  }
};

const bounceKeyframes = {
  '0%': {
    transform: 'translateY(0px)'
  },
  '50%': {
    transform: 'translateY(-5px)'
  },
  '100%': {
    transform: 'translateY(5px)'
  }
};

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotificationVisible: false
    };
    this.markAsRead = this.markAsRead.bind(this);
    this.toggleNotifications = this.toggleNotifications.bind(this);
    this.closeNotifications = this.closeNotifications.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  toggleNotifications() {
    this.setState(prevState => ({
      isNotificationVisible: !prevState.isNotificationVisible
    }));
  }

  closeNotifications() {
    this.setState({ isNotificationVisible: false });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.notifications.length !== this.props.notifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer ||
      nextState.isNotificationVisible !== this.state.isNotificationVisible
    );
  }

  render() {
    const { notifications, displayDrawer=true } = this.props;
    const { isNotificationVisible } = this.state;

    return (
      <>
        {/* Hide the title when notifications are visible */}
        {!isNotificationVisible && (
          <div
            className={css(styles.notiftitle)}
            onClick={this.toggleNotifications}
          >
            <p>Your notifications</p>
          </div>
        )}
        {displayDrawer ? (
          <div className={css(
            styles.notifications,
            isNotificationVisible && styles.notificationsVisible
          )}>
            {notifications.length > 0 ? (
              <>
                <p className={css(styles.notifparagraph)}>Here is the list of notifications</p>
                <button
                  className={css(styles.notifbutton)}
                  onClick={this.closeNotifications}
                  aria-label="Close"
                >
                  <img className={css(styles.notifimg)} src={closebtn} alt='Close' />
                </button>
                <ul className={css(styles.notificationsList)}>
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => this.markAsRead(notification.id)} />
                  ))}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  notiftitle: {
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
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
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
  notifbutton: {
    position: 'absolute',
    display: 'flex',
    background: 'none',
    borderStyle: 'none',
    right: '1rem',
    top: '1rem',
    width: '0.5rem',
    height: '0.5rem',
    '@media (max-width: 900px)': {
      top: '0.5rem',
      right: '1rem',
    },
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
})

export default Notifications;
