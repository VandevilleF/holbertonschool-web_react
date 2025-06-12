import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getLatestNotification } from '../../utils/utils';

const initialState = {
	notifications: [],
	displayDrawer: true,
};

const API_BASE_URL = 'http://localhost:5173/holbertonschool-web_react/'

const ENDPOINTS = {
	notifications: `${API_BASE_URL}/notifications.json`,
}

export const fetchNotifications = createAsyncThunk(
	'notifications/fetchNotifications',
	async () => {
		const response = await axios.get(ENDPOINTS.notifications);
		const notifications = response.data;

		const updatedNotif = notifications.map((notif) =>
			notif.id === 3
		? { ...notif, value: getLatestNotification() }
		: notif
		);
		return updatedNotif;
	}
);

const notificationsSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		markNotificationAsRead: (state, action) => {
			console.log(`Notification ${action.payload} has been marked as read`);
			state.notifications = state.notifications.filter(notif => notif.id !== action.payload.id);
		},
		showDrawer: state => {
			state.displayDrawer = true;
		},
		hideDrawer: state => {
			state.displayDrawer = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchNotifications.fulfilled, (state, action) => {
			state.notifications = action.payload;
		})
	}
});

export const { markNotificationAsRead, showDrawer, hideDrawer } = notificationsSlice.actions;
export default notificationsSlice.reducer;
