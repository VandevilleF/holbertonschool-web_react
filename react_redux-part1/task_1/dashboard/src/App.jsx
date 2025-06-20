import React from 'react'
import Notifications from './components/Notifications/Notifications'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login.jsx'
import BodySection from './components/BodySection/BodySection'
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom'
import CourseList from './pages/CourseList/CourseList.jsx'
import PropTypes from 'prop-types'
import { getLatestNotification } from './utils/utils'
import { useEffect, useReducer } from 'react'
import axios from 'axios';
import { appReducer, initialState, APP_ACTIONS } from './appReducer';
import './App.css'

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('notifications.json');
        const processedNotifications = response.data.map((notif) => {
          if (notif.html && notif.html.useFunction === 'getLatestNotification') {
            return {
              ...notif,
              html: { __html: getLatestNotification() },
            };
          }
          return notif;
        });
        dispatch({ type: APP_ACTIONS.SET_NOTIFICATIONS, data: { notifications: processedNotifications } });
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error(error);
        }
      }
    };
    fetchNotifications();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('courses.json');
        dispatch({ type: APP_ACTIONS.SET_COURSES, data: { courses: response.data } });
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error(error);
        }
      }
    };
    fetchCourses();
  }, [state.user]);

  const logIn = (email, password) => {
    dispatch({ type: APP_ACTIONS.LOGIN, data: { email: email, password: password } });
  };

  const logOut = () => {
    dispatch({ type: APP_ACTIONS.LOGOUT });
  };

  const markNotificationAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
    dispatch({ type: APP_ACTIONS.MARK_NOTIFICATION_READ, data: { id } })
  };

  const handleDisplayDrawer = () => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
  };

  const handleHideDrawer = () => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
  };

    return (
      <React.Fragment>
        <div className='app'>
          <div className='notfications'>
            <Notifications markNotificationAsRead={markNotificationAsRead}
            notifications={state.notifications}
            displayDrawer={state.displayDrawer}
            handleDisplayDrawer={handleDisplayDrawer}
            handleHideDrawer={handleHideDrawer} />
          </div>
          <Header user={state.user} logOut={logOut} />
          <div className='body'>
            {state.user.isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList courses={state.courses} />
              </BodySectionWithMarginBottom>
              ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login
                logIn={logIn}
                email={state.user.email}
                password={state.user.password} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title='News from the School'>
              <p>Holberton School News goes here</p>
            </BodySection>
          </div>
          <Footer user={state.user} />
        </div>
      </React.Fragment>
    )
}

App.PropTypes = {
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

export default App
