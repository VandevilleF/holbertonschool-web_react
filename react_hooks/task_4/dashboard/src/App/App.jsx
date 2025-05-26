import React from 'react'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import BodySection from '../BodySection/BodySection'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import CourseList from '../CourseList/CourseList'
import PropTypes from 'prop-types'
import { getLatestNotification } from '../utils/utils'
import { StyleSheet, css } from 'aphrodite';
import NewContext from '../Context/context'
import { useState, useContext } from 'react'

const notificationsList = [
  { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];
const coursesList = [
  { id: 1, name: 'ES6', credit: '60' },
  { id: 2, name: 'Webpack', credit: '20' },
  { id: 3, name: 'React', credit: '40' },
];

function App() {
  const context = useContext(NewContext);
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState(context);
  const [notifications, setNotifications] = useState(notificationsList);

  const logOut = () => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    })
  }

  const markNotificationAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id),
    );
  }

  const logIn = (email, password) => {
    setUser({
      email: email,
      password: password,
      isLoggedIn: true,
    })
  }

  const handleDisplayDrawer = () => {
    setDisplayDrawer(true);
  }

  const handleHideDrawer = () => {
    setDisplayDrawer(false);
  }

    return (
      <NewContext.Provider value={{ user: user, logOut: logOut }}>
        <React.Fragment>
          <div className={css(styles.app)}>
            <div className={css(styles.notifications)}>
              <Notifications markNotificationAsRead={markNotificationAsRead}
              notifications={notifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={handleDisplayDrawer}
              handleHideDrawer={handleHideDrawer} />
            </div>
            <Header />
            <div className={css(styles.body)}>
              {user.isLoggedIn ? (
                <BodySectionWithMarginBottom title='Course list'>
                  <CourseList courses={coursesList} />
                </BodySectionWithMarginBottom>
                ) : (
                <BodySectionWithMarginBottom title='Log in to continue'>
                  <Login
                  logIn={logIn}
                  email={user.email}
                  password={user.password} />
                </BodySectionWithMarginBottom>
              )}
              <BodySection title='News from the School'>
                <p>Holberton School News goes here</p>
              </BodySection>
            </div>
            <Footer />
          </div>
        </React.Fragment>
      </NewContext.Provider>
    )
}

const styles = StyleSheet.create({
  app: {
    margin: '0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  body: {
    flex: '1',
  },
  notifications: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    right: '0',
    paddingRight: '1rem',
    minWidth: '30rem',
  }
})

App.PropTypes = {
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

export default App
