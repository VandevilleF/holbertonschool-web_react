import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
	render() {
		const { type, html, value, markAsRead } = this.props
		const itemstyle = css(type === 'urgent' ? styles.urgent : styles.default);
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
	}
}

const styles = StyleSheet.create({
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
