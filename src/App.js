
import { createUseStyles } from 'react-jss';
import Timer from "components/Timer";
import TimerActions from 'components/TimerActions';
import Laps from 'components/Laps';
import store from 'store';
import {storeContext} from 'redux-react-hook'
const useStyles = createUseStyles({
  root: {
    width: '100%'
  },
  title: {
    fontSize: 32,
    marginBottom: 64,
    textAlign: "center",
    fontWeight: 700,
    marginTop:32,

  },
});
function App() {
  const classes = useStyles();
  return (
  <storeContext.Provider value={store}>
    <div>
      <h1 className={classes.title}>StopWacth</h1>
      <Timer/>
      <TimerActions />
      <Laps />
  </div>
  </storeContext.Provider>
  );
}

export default App;
