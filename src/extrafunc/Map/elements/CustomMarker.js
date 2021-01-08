import React, { useState, useEffect, useRef } from 'react';
import { Marker, InfoWindow } from "react-google-maps";
import './style.less';
import moment from 'moment';

import upArr from '../icons/up-arrow.svg';
import location from '../icons/up-arrow2.svg';

export const CustomMarker = ({ iconDeg, label, position, index, age, speed }) => {
   const user = JSON.parse(localStorage.getItem('user'));
   const [counter, setCounter] = useState(1);
   const [open, setopen] = useState(true);

   const iconRef = useRef(null);
   const infoRef = useRef(null);

   useEffect(() => {
      let cancel = false;
      let timer;
      if (!cancel) {
         timer = setTimeout(() => {
            let icons = Array.from(document.querySelectorAll(`[src*="up-arrow"]`));
            if (icons[index]) {
               icons[index].style.transform = `rotate(${iconDeg}deg)`;
               icons[index].style.backfaceVisibility = `hidden`;
               icons[index].style.transformOrigin = `center`;
            } else {
               setCounter(counter + 1);
            }
         }, 300);
      }
      return () => {
         cancel = true;
         clearTimeout(timer);
      };
   }, [counter, iconDeg, index, speed]);

   const onDomReady = () => {
      const btn = document.querySelector('.gm-ui-hover-effect');
      if (btn) {
         btn.remove();
      }
   }

   return (
      <span ref={iconRef}>
         <Marker
            onClick={() => setopen(!open)}
            icon={{
               anchor: { x: 15, y: 15 },
               url: speed > 0 ? upArr : location,
               scaledSize: { width: 30, height: 30 },
               origin: { x: .5, y: .5 },
            }}
            position={position}
         // position={{ lat: 40.749827, lng: -73.970000 }} 
         >
            {open && <InfoWindow

               onDomReady={onDomReady}
               options={{
                  // disableAutoPan: true
               }}
               ref={infoRef}>
               <div className="infoWindow ">
                  {label || 'Label'}
                  {age &&
                     <span className="infoAge">
                        {moment(age).format('HH:mm')}
                     </span>
                  }
               </div>
            </InfoWindow>}
         </Marker>
      </span>
   )
}
