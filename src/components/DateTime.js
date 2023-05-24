import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

function DateTime() {
  const currentDate = dayjs().format('YYYY년MM월DD일');
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <div className=' dark:text-slate-400 text-[30px] flex flex-col'>
      <p className='text-center dark:text-slate-400 text-[30px] py-3'>{currentDate}</p>
      <p className='text-center dark:text-slate-400 text-[30px] py-3'>{currentTime.format('HH시mm분ss초')}</p>
      </div>
    </div>
  );
}

export default DateTime; //HH:mm:ss