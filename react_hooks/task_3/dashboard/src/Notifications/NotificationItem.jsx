import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { memo } from "react";

const NotificationItem = memo(function NotificationItem({ type, html, value, markAsRead }) {
	const itemstyle = css(styles.notificationItem, type === 'urgent' ? styles.urgent : styles.default);
	if (html) {
		return (
		<li data-notification-type={type}
		className={itemstyle}
		dangerouslySetInnerHTML={html}
		onClick={markAsRead}>
		</li>
		);
	}
	return (
	<li data-notification-type={type}
	className={itemstyle}
	onClick={markAsRead}>{value}</li>
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
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	html: PropTypes.shape({
	  __html: PropTypes.string,
	}),
};

NotificationItem.defaultProps = {
	type: 'default'
};

export default NotificationItem;
