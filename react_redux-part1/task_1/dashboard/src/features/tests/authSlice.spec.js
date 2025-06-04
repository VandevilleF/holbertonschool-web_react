import authReducer, { login, logout } from '../auth/authSlice';

describe('authSlice', () => {
	const initialState = {
		email: '',
		password: '',
		isLoggedIn: false,
	};
	test('Returns the correct initial state by default', () => {
		expect(initialState).toEqual(authReducer(undefined, { type: undefined }));
	});

	test('Updates the state correctly when the login action is dispatched', () => {
		const action = {
			email: 'test@exemple.com',
			password: 'password123',
		};

		const newState = authReducer(initialState, login(action));

		expect(newState).toEqual({
			email: 'test@exemple.com',
			password: 'password123',
			isLoggedIn: true,
		});
	});

	test('Resets the state correctly when the logout action is dispatched', () => {
		const loginState = {
			email: 'test@exemple.com',
			password: 'password123',
			isLoggedIn: true,
		};

		const newState = authReducer(loginState, logout());

		expect(newState).toEqual(initialState);
	});
});
