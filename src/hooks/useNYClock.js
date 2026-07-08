import { useEffect, useState } from 'react';

export function useNYClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        `${new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date())} NY`,
      );
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
