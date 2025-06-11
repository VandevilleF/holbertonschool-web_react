import notificationsReducer, { markNotificationAsRead, showDrawer, hideDrawer, fetchNotifications } from '../notifications/notificationsSlice';
import { getLatestNotification } from '../../utils/utils';

describe('notificationsSlice', () => {
	const initialState = {
		notifications: [],
		displayDrawer: true,
	};
	test('Returns the correct initial state by default', () => {
		expect(initialState).toEqual(notificationsReducer(undefined, { type: undefined }));
	});
	test('fetches notifications data correctly', () => {
		const notifications = [
			{ id: 1, type: "default", value: "New course available" },
			{ id: 2, type: "urgent", value: "New resume available" },
			{ id: 3, type: "urgent", html: { __html: getLatestNotification() } },
		];
		const action = {
			type: fetchNotifications.fulfilled.type,
			payload: notifications,
		};
		const newState = notificationsReducer(initialState, action);
		expect(newState).toEqual({
			notifications,
			displayDrawer: true,
		});
	});
	test('Removes a notification correctly when the markNotificationAsRead action is dispatched', () => {
		const updatedState = {
			notifications: [
				{ id: 1, type: "default", value: "New course available" },
				{ id: 2, type: "urgent", value: "New resume available" },
			],
			displayDrawer: true,
		};

		const newState = notificationsReducer(updatedState, markNotificationAsRead({ id: 2 }));
		expect(newState).toEqual({
			notifications: [
				{ id: 1, type: "default", value: "New course available" },
			],
			displayDrawer: true,
		});
	});
	test('Toggles the displayDrawer state correctly when the showDrawer and hideDrawer actions are dispatched', () => {
		expect(initialState).toEqual({
			notifications: [],
			displayDrawer: true,
		});
		const toggledDisplayHide = notificationsReducer(initialState, hideDrawer());
		expect(toggledDisplayHide).toEqual({
			notifications: [],
			displayDrawer: false,
		});
		const toggledDisplayShow = notificationsReducer(initialState, showDrawer());
		expect(toggledDisplayShow).toEqual({
			notifications: [],
			displayDrawer: true,
		});
	});
});
