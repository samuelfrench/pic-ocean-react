import './App.css';
import ImagePanel from './components/ImagePanel';
import './components/ImagePanel.css';

function App() {
  function importAll(r) {
    return r.keys().map(r).map(v => v.default);
  }
  
  const contentImages = importAll(require.context('./assets/content', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="App">
     <ImagePanel contentImages={contentImages} shuffleMs={3000} />
    </div>
  );
}

export default App;
