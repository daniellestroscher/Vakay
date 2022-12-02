import React, { FC } from 'react';
import LodgingItem from '../LodgingItem/LodgingItem';
import AddLodgingForm from '../AddLodgingForm/AddLodgingForm';
import { ILodge } from '../../../Types';

import styles from './LodgingList.module.css';
import { AddBox } from '@mui/icons-material';


interface LodgingListProps{
  lodging: Array<ILodge>
}

const  LodgingList: FC<LodgingListProps> = ({ lodging }) => {

  const openForm = () => {
    document.getElementById('addLodgingForm')!.style.display = 'flex';
  }

  const closeForm = () => {
    document.getElementById('addLodgingForm')!.style.display = 'none';
  }

  return (
    <div className={styles.Container}>
      <div className={styles.title}>
        <h1 className={styles.locationTitle}>Lodging</h1>
        <button onClick={openForm} className={styles.button}>
            <AddBox className={styles.addIcon}/>
        </button>
      </div>
      <div id='addLodgingForm' className={styles.addLodgingForm}>
        <AddLodgingForm closeForm={closeForm}/>
      </div>
      <div className={styles.LodgeListContainer}>
        {
          lodging.map((lodge:ILodge, i)=> {
            return  <LodgingItem key={i + 1} lodge={lodge} />
          })
        }
      </div>
    </div>
  )
}

export default LodgingList;