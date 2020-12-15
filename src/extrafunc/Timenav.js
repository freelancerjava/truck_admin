import React, { useState, useRef, useEffect } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import calendar from "./svg/calendar.svg";
import left from "./svg/left.svg";
import right from "./svg/right.svg";
import { addDays } from 'date-fns';
import moment from 'moment';
import ru from 'date-fns/locale/ru';

import './style.less'

import "react-datepicker/dist/react-datepicker.css";

registerLocale('ru', ru)



export const TimeNav = ({ today, startDate, setStartDate }) => {
   let tz = "America/Los_Angeles";
   const user = JSON.parse(localStorage.getItem('user'));
   if (user && user.company && user.company.tz) {
      tz = user.company.tz.value;
   }
   const [isCalendarOpen, setIsCalendarOpen] = useState(true);
   const [counter, setCounter] = useState(0);
   const dateRef = useRef(null);

   useEffect(() => {
      let cancel = false;
      let timer = setTimeout(() => {
         let dateInput = document.querySelector('.react-datepicker__input-container input');
         if (dateInput) {
            dateInput.addEventListener('focus', () => setIsCalendarOpen(true));
            dateInput.addEventListener('blur', () => setIsCalendarOpen(false));
         } else if (counter <= 3) {
            setCounter(counter + 1);
         }
      }, 300)
      if (!cancel) {
      }
      return () => {
         cancel = true;
         clearTimeout(timer);
      }
   }, [counter])

   const getDate = data => {
      setStartDate(data);
      setIsCalendarOpen(!isCalendarOpen);
   }
   const openCalendar = () => {
      setIsCalendarOpen(!isCalendarOpen);
      isCalendarOpen ? dateRef.current.setFocus() : dateRef.current.setBlur();
   }

   const getYesterday = () => {
      const date = new Date(startDate);
      date.setDate(date.getDate() - 1);
      setStartDate(date);
   }
   const getTomorrow = () => {
      if (today) return
      const date = new Date(startDate);
      date.setDate(date.getDate() + 1);
      setStartDate(date);
   }

   return (
      <div className="time-nav ml-3 mb-3">
         <div className="calendar">
            <DatePicker
               locale={'ru'}
               ref={dateRef}
               dateFormat="dd-MM-yyyy"
               selected={startDate}
               onChange={getDate}
               maxDate={addDays(new Date(moment().format('MMM DD, YYYYY')), 0)}
            />
            <img
               src={calendar}
               onClick={openCalendar} />
         </div>
         <span className="switcher">
            {true && <>
               <span onClick={getYesterday} className="left">
                  <img src={left} />
               </span>
               <span onClick={getTomorrow} className={`right ${(today) ? "cursor-block" : ""}`}>
                  <img src={right} />
               </span> </>
            }
         </span>
      </div>
   )
}
