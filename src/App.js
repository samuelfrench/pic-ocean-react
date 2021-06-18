import './App.css';

function App() {
  function importAll(r) {
    return r.keys().map(r).map(v => v.default);
  }
  
  const contentImages = importAll(require.context('./assets/content', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="App">
      { contentImages.map(ci => <img src={ci} className='content-image' alt='Demo content'/>) }
    </div>
  );
}

export default App;
