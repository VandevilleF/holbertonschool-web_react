import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { memo } from "react";

const NotificationItem = memo(function NotificationItem({ id, type, html, value, markNotificationAsRead }) {
	const itemstyle = css(styles.notificationItem, type === 'urgent' ? styles.urgent : styles.default);
	const handleClick = () => {
		markNotificationAsRead(id);
	};
	if (html) {
		return (
		<li data-notification-type={type}
		className={itemstyle}
		dangerouslySetInnerHTML={html}
		onClick={handleClick}>
		</li>
		);
	}
	return (
	<li data-notification-type={type}
	className={itemstyle}
	onClick={handleClick}>{value}</li>
	);
});

const styles = StyleSheet.create({
	notificationItem: {
		'@media (max-width: 900px)': {
			width: '100%',
			padding: '10px 8px',
			fontSize: '20px',
			borderBottom: '1px solid black',
			':last-child': {
				borderBottom: 'none',
			},
		},
	},
	urgent: {
		color: 'red',
	},
	default: {
		color: 'blue',
	},
})

// Check type of data props, raise a warning in the console if is't an invalid value
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
