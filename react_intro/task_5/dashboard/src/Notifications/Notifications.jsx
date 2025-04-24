import './Notifications.css'
import closebtn from '../assets/close-button.png'
import { getLatestNotification } from '../utils/utils'
export function Notifications() {
  return (
    <>
      <div className="notifications">
        <p>
        Here is the list of notifications
        </p>
        <button onClick={(event) => console.log('Close button has been clicked')} aria-label="Close">
          <img src={ closebtn } alt='CLose' />
        </button>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
      </div>
    </>
  );
}
