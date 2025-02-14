import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChalenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Not Easy" targetTime={5}/>
        <TimerChallenge title="Getting Tough" targetTime={10}/>
        <TimerChallenge title="Hard" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
