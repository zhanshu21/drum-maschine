import './App.css';
import { Pad } from './components/Pad';

function App() {
  return (
    <div className="drum-machine" id='drum-machine'>
      <div id="display">
        <Pad padKey="Q" />
        <Pad padKey="W" />
        <Pad padKey="E" />
        <Pad padKey="A" />
        <Pad padKey="S" />
        <Pad padKey="D" />
        <Pad padKey="Z" />
        <Pad padKey="X" />
        <Pad padKey="C" />
      </div>
    </div>
  );
}

export default App;
