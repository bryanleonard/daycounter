import './App.scss';
import './components/main';
import Main from './components/main';

function App() {

  const dDay = new Date('05/05/2025');

  return (
    <div className="app wrapper">
      <header className="header text-center py-3">
       <h1 className={`m-0`}>Days until decision time...</h1>
      </header>

      <Main deadline={dDay} />

      <footer className={'container-fluid text-center py-3 footer'}>
        <ul className={`list-unstyled mb-0`}>
          <li>Built with <span className={`heart`}>♡</span></li>
          <li>Also, a website shouldn't take 8 years to complete.</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
