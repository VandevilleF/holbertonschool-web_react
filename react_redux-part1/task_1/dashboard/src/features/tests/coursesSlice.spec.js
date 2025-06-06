import { logout } from "../auth/authSlice";
import coursesReducer, { fetchCourses } from "../courses/coursesSlice";

describe('coursesSlice', () => {
	const initialState = {
		courses: [],
	};
	test('Returns the correct initial state by default', () => {
		expect(initialState).toEqual(coursesReducer(undefined, { type: undefined }));
	});
	test('fetches correctly the courses data', () => {
		const courses = [
			{ id: 1, name: "ES6", credit: "60" },
			{ id: 2, name: "Webpack", credit: "20" },
			{ id: 3, name: "React", credit: "40" }
		]
		const action = {
			type: fetchCourses.fulfilled.type,
			payload: courses,
		};
		const expectedState = {
			courses: [
				{ id: 1, name: "ES6", credit: "60" },
				{ id: 2, name: "Webpack", credit: "20" },
				{ id: 3, name: "React", credit: "40" }
			]
		}
		const newCourses = coursesReducer(initialState, action);
		expect(newCourses).toEqual(expectedState);
	});
	test('Resets the courses array to empty whenever the logout action is dispatched', () => {
		const stateToReset = {
			courses: [
				{ id: 1, name: "ES6", credit: "60" },
				{ id: 2, name: "Webpack", credit: "20" },
				{ id: 3, name: "React", credit: "40" }
			]
		};
		const logoutedState = coursesReducer(stateToReset, logout());
		expect(logoutedState).toEqual(initialState);
	});
});

