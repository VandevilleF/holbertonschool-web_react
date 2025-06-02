import closebtn from '../../assets/close-button.png';
import NotificationItem from '../NotificationItem/NotificationItem';
import PropTypes from 'prop-types';
import { memo } from 'react';
import './Notifications.css';

const Notifications = memo(function Notifications({
  notifications,
  displayDrawer,
  handleDisplayDrawer,
  handleHideDrawer,
  markNotificationAsRead,
}) {
  return (
    <>
      {!displayDrawer && (
        <div className="notiftitle" onClick={handleDisplayDrawer}>
          Your notifications
        </div>
      )}
      {displayDrawer && (
        <div className="notifications notificationsVisible">
          {notifications.length > 0 ? (
            <>
              <p className="notifparagraph">Here is the list of notifications</p>
              <button
                className="notifbutton"
                onClick={handleHideDrawer}
                aria-label="Close"
              >
                <img className="notifimg" src={closebtn} alt="Close" />
              </button>
              <ul className="notificationsList">
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markNotificationAsRead={() => markNotificationAsRead(notification.id)}
                  />
                ))}
              </ul>
            </>
          ) : (
            <p>No new notification for now</p>
          )}
        </div>
      )}
    </>
  );
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
