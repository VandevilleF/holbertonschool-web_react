import React from "react";

export default function NotificationItem(type, html, value) {
	if (html) {
		return (
			<li data-notification-type={type}
			dangerouslySetInnerHTML={html}></li>
		);
	}
	return (
		<li data-notification-type={type}>{value}</li>
	);
}

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
