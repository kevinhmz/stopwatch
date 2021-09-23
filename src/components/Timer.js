import { pause } from 'actions/TimeActions';
import {useState, useEffect} from 'react';
import {createUseStyles} from 'react-jss';
import {useMappedState} from 'redux-react-hook';

const useStyles = createUseStyles({
  root: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 500,
  },
});

// 10000000000000000000
// 20

// 4, 3
// 004

// 4, 2
// 04

// 12, 2
// 12

// 12, 3
// 012
function addZeros(number, numberOfPlaces) {
  let numDigits = 1;
  let div = Math.floor(number / 10);
  while (div > 0) {
    div = Math.floor(div / 10);
    ++numDigits;
  }
  if (numberOfPlaces - numDigits < 0) {
    return `${number}`;
  }
  const zeroes = new Array(numberOfPlaces - numDigits).fill('0');
  return `${zeroes.join('')}${number}`;
}

function createTimeString(start, pausedIntervals, paused) {
  let timeStr;
  if (start == null) {
    timeStr = '00:00:00.000';
  } else {
    const now = paused != null ? paused : Date.now();
    const current = now - pausedIntervals - start;
    const minutes = Math.floor((current / 1000 / 60) % 60);
    const seconds = Math.floor((current / 1000) % 60);
    const hours = Math.floor((current / 1000 / 3600) % 24);
    const milliseconds = current % 1000;
    timeStr = `${addZeros(hours, 2)}:${addZeros(minutes, 2)}:${addZeros(
      seconds,
      2,
    )}.${addZeros(milliseconds, 3)}`;
  }
  return timeStr;
}

function Timer() {
  const {start, pausedIntervals, paused} = useMappedState((state) => ({
    start: state.time.start,
    pausedIntervals: state.time.pausedIntervals,
    paused: state.time.paused,
  }));
  const [time, setTime] = useState('00:00:00.000');
  const classes = useStyles();

  useEffect(() => {
    const intervalId = setInterval(() => {
     
      setTime(createTimeString(start, pausedIntervals, paused));
    }, 100);

    return function () {
      clearInterval(intervalId);
    };
  }, [start, pausedIntervals, paused]);

  

  return <p className={classes.root}>{time}</p>;
}

export default Timer;
