import { createUseStyles } from "react-jss";
import {useMappedState} from 'redux-react-hook';
const useStyles = createUseStyles({
    root: {
        textAlign:"center",
        fontSize:32,
        fontWeight:500,
    },
});

function addZeros(number, numberOfPlaces){
    
}


function Timer() {
    const {start, pausedIntervals}=useMappedState(state=>({
        start:start.time.start,
        pausedIntervals: state.time.pausedIntervals,
    }));
    const classes = useStyles();
    let timeStr;
    if (start == null) {
        timeStr = '00:00:00:00';
    } else {
        const current = Date.now() - pausedIntervals -start;
        const minutes = Math.floor((current/1000/60) % 60);
        const seconds = Math.floor((current/1000) % 60);
        const hour = Math.floor((current/1000/3600) % 24);
        const miliseconds = current %  1000;

    }
    return(
        <p className={classes.root}>00:00:00</p>
    )
}

export default Timer;