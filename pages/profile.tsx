import { useEffect, useState } from 'react';
import Divider from '../src/components/Divider/Divider';
import HomeLeft from '../src/components/HomeLeft/HomeLeft';
import NavBar from '../src/components/NavBar/NavBar';
import ProfileInfo from '../src/components/ProfileInfo/ProfileInfo';
import TripInviteList from '../src/components/TripInviteList/TripInviteList';
import { useUserContext } from '../src/Contexts/UserContext';
import { getInvites } from '../src/services/inviteService';
import styles from '../styles/profile.module.css';
import { ITripItem } from '../Types';

function Profile() {
  const [tripInvites, setTripInvites] = useState<ITripItem[]>([]);
  const userContext = useUserContext();

  useEffect(() => {
    if (userContext.authUser)
      getInvites(userContext.authUser.token).then((invites) => {
        invites && setTripInvites(invites);
      });
  }, [userContext]);

  return (
    <div className={styles.body}>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.leftSide}>
          <HomeLeft />
          <Divider />
        </div>
        <div className={styles.profileContainer}>
          <ProfileInfo />
          <div className={styles.invitations}>
            {tripInvites.length > 0 ? (
              <TripInviteList title="Invitations" trips={tripInvites} />
            ) : (
              <h2>No invites yet!</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
