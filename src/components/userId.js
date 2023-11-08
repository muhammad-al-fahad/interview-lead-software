import {useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import userData from '../data/usersData';
import Not_Found from './404';

const UserProfile = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('userId');

  const [profile, setProfile] = useState(null);

  function showPage(props) {
    props = setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("myDiv").style.display = "block";
    }, 100);
  }

  useEffect(() => {
    let endLoader;

    const specificUser = userData.find(user => user.id === userId);
    setProfile(specificUser);
    showPage(endLoader);

    return () => clearTimeout(endLoader);
  }, [userId])

  return (
    <div>
      { profile ?
          <div>
            <div id="loader"></div>
            <div id='myDiv' className='.animate-botton'>
              <h2>User Profile</h2>
              <p>User ID: {profile.id}</p>
            </div>
          </div>  
          : 
          // eslint-disable-next-line react/jsx-pascal-case
          <Not_Found />
      }
    </div>
  );
}

export default UserProfile;
