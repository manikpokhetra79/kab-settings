import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import discussion from '../images/discussion.png';
import classroom from '../images/classroom.png';

import dashboard from '../images/dashboard.png';
import progress from '../images/progress.png';
import menufooter from '../images/menufooter.png';
import writing from '../images/writing.png';

const SidebarMenu = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul className="menu-list">
          <li>
            <Link to="/dashboard">
              <img className="dashboardlogo" src={dashboard} alt="dashboard" />
            </Link>
          </li>
          <li>
            <Link to="/select-chapter">
              {' '}
              <img
                style={styles.menuimages}
                src={discussion}
                alt="discussion"
              />
              Select Chapter
            </Link>
          </li>{' '}
          <li>
            <Link to="/class">
              <img style={styles.menuimages} src={classroom} alt="classroom" />{' '}
              My Class
            </Link>
          </li>
          <li>
            <Link to="/class-forum">
              {' '}
              <img
                style={styles.menuimages}
                src={discussion}
                alt="discussion"
              />
              Class Forum
            </Link>
          </li>
          <li>
            <Link to="/progress">
              {' '}
              <img style={styles.menuimages} src={progress} alt="progress" />
              My Progress
            </Link>
          </li>
          <li>
            <Link to="/diary">
              {' '}
              <img style={styles.menuimages} src={writing} alt="writing" />
              My diary
            </Link>
          </li>
          <li>
            <img
              style={{ width: '120px' }}
              className="menufooter"
              src={menufooter}
              alt="menufooter"
            />
          </li>
        </ul>
      </nav>
    </>
  );
};
const styles = {
  menuimages: {
    width: '22px',
    height: '25px',
    marginRight: '10px',
    marginTop: '16px',
  },
};
export default SidebarMenu;
