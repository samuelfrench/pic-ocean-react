import './App.css';
import ImagePanel from './components/ImagePanel' 

function App() {
  function importAll(r) {
    return r.keys().map(r).map(v => v.default);
  }
  
  const contentImages = importAll(require.context('./assets/content', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="App">
     <ImagePanel contentImages={contentImages} />
    </div>
  );
}

export default App;
