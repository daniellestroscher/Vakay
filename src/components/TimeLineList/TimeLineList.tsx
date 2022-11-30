import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { DateTime } from "luxon";

import { AddBox } from '@mui/icons-material';
import TimeLineItem from '../TimeLineItem/TimeLineItem';
import AddEventForm from '../AddEventForm/AddEventForm';

import styles from './TimeLineList.module.css';

function TimeLineList () {
  const [allEvents, setAllEvents] = useState([]);

  // useEffect(() => {

  // }, []);

  const events = [
    {ts: "2022-09-16T12:20:46.587Z", title: 'Flight to Windy Gap', eventType: 'travel'},
    {ts: "2022-09-17T12:20:46.587Z", title: 'Margs on the Patio', eventType: 'other'},
    {ts: "2022-09-17T12:21:46.587Z", title: "Cruise on Lake Geneva", eventType: 'leisure'},
    {ts: "2022-09-16T12:21:46.587Z", title: "Skiing Windy Gap", eventType: 'active'},
    {ts: "2022-09-16T12:22:46.587Z", title: 'Hit the Outlets', eventType: 'shopping'},
    {ts: "2022-09-17T12:22:46.587Z", title: "Breakfast at Curly's Diner", eventType: 'food'},
  ];

  const eventDay = (item: any) => (DateTime.fromISO(item.ts).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY));

  const result = _.groupBy(events, eventDay);

  const openForm = () => {
    document.getElementById('addEventForm')!.style.display = 'flex';
  }

  const closeForm = () => {
    document.getElementById('addEventForm')!.style.display = 'none';
  }

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.timelineTitle}>Events Timeline:</h1>
        <button onClick={openForm} className={styles.button}>
          <AddBox className={styles.addIcon}/>
        </button>
      </div>
      <div id='addEventForm' className={styles.addEventForm}>
        <AddEventForm closeForm={closeForm}/>
      </div>
      {Object.entries(result).map(([day, events]) => ([
        <h4 key={day} className={styles.timelineDate}>{day}</h4>,
        events.map((event: any) =>
        <TimeLineItem key={event.ts} event={event} />
      )]))}
    </div>
  )
}

export default TimeLineList;