import PropTypes from 'prop-types';
import { memo } from "react";
import '../Notifications/Notifications.css';

const NotificationItem = memo(function NotificationItem({ id, type, html, value, markNotificationAsRead }) {
  const itemClass = `notificationItem ${type === 'urgent' ? 'urgent' : 'default'}`;

  const handleClick = () => {
    markNotificationAsRead(id);
  };

  if (html) {
    return (
      <li
        data-notification-type={type}
        className={itemClass}
        dangerouslySetInnerHTML={html}
        onClick={handleClick}
      ></li>
    );
  }

  return (
    <li
      data-notification-type={type}
      className={itemClass}
      onClick={handleClick}
    >
      {value}
    </li>
  );
});

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markNotificationAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markNotificationAsRead: () => {},
};

export default NotificationItem;
