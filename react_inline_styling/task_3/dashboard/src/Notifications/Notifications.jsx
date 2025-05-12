import closebtn from '../assets/close-button.png'
import NotificationItem from './NotificationItem';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

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
        <div
          className={css(styles.notiftitle)}
          onClick={this.toggleNotifications}
        >
          <p>Your notifications</p>
        </div>
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
    '@media (max-width: 900px)': {
      display: 'flex',
      justifyContent: 'end',
      cursor: 'pointer',
    },
  },
  notifications: {
    display: 'block',
    flexDirection: 'column',
    borderStyle: 'dotted',
    borderColor: '#e1003c',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  notificationsVisible: {
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
    right: '1.5rem',
    top: '3.5rem',
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
    margin: 'auto',
    '@media (max-width: 900px)': {
      margin: '10px',
      fontSize: '20px',
    },
  },
})

export default Notifications;
