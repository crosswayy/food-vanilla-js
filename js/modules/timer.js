function timer(id, deadline) {
   function getTimeRemainig(endtime) {
       const t = Date.parse(endtime) - new Date(),
             days = Math.floor(t / (1000 * 60 * 60 * 24)),
             hours = Math.floor((t / (1000 * 60 * 60)) % 24),
             minutes = Math.floor((t / (1000 * 60)) % 60),
             seconds = Math.floor((t / 1000) % 60);
       
       return {
           'total': t,
           days,
           hours,
           minutes,
           seconds
       };
   }

   function setClock(selector, endtime) {
       const timer = document.querySelector(selector),
             days = timer.querySelector('#days'),
             hours = timer.querySelector('#hours'),
             minutes = timer.querySelector('#minutes'),
             seconds = timer.querySelector('#seconds'),
             timeInterval = setInterval(updateClock, 1000);

       updateClock();

       function updateClock() {
           const t = getTimeRemainig(endtime);

           days.innerHTML = t.days < 10 ? `0${t.days}` : t.days;
           hours.innerHTML = t.hours < 10 ? `0${t.hours}` : t.hours;
           minutes.innerHTML = t.minutes < 10 ? `0${t.minutes}` : t.minutes;
           seconds.innerHTML = t.seconds < 10 ? `0${t.seconds}` : t.seconds;

           if (t.total < 1000) {
               clearInterval(timeInterval);
           }
       }
   }

   setClock(id, deadline);
}

export default timer;