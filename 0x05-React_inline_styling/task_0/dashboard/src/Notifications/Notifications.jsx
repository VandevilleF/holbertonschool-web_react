import './Notifications.css'
import closebtn from '../assets/close-button.png'
import NotificationItem from './NotificationItem';
import React from 'react';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.notifications.length !== this.props.notifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  render() {
    const { notifications, displayDrawer=true } = this.props;

    return (
      <>
        <div className='notifications-title'>
          <p>Your notifications</p>
        </div>
          {displayDrawer ? (
            <div className="notifications">
              {notifications.length > 0 ? (
                <>
                <p>Here is the list of notifications</p>
                <button
                onClick={() => console.log('Close button has been clicked')} aria-label="Close">
                <img src={closebtn} alt='CLose' />
                </button>
                <ul>
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

export default Notifications;
