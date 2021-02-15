import React, { useState, useEffect, useRef } from 'react';
import { Marker, InfoWindow } from "react-google-maps";
import './style.less';
import moment from 'moment';

import upArr from '../icons/up-arrow.svg';
import location from '../icons/up-arrow2.svg';
// import location from '../../svg/left.svg';

export const CustomMarker = ({ iconDeg, label, position, index, age, speed, draggable, iconpin }) => {
   const user = JSON.parse(localStorage.getItem('user'));
   const [counter, setCounter] = useState(1);
   const [open, setopen] = useState(false);

   const iconRef = useRef(null);
   const infoRef = useRef(null);

   useEffect(() => {
      let cancel = false;
      let timer;
      if (!cancel) {
         timer = setTimeout(() => {
            let icons = Array.from(document.querySelectorAll(`[src*="truck"]`));
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
            draggable={draggable}
            onClick={() => setopen(!open)}
            icon={{
               anchor: { x: 16, y: 49 },
               url: iconpin ? iconpin : location,
               // scaledSize: { width: 50, height: 50 },
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
