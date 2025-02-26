import { useState } from 'react';
import 'App.scss';
import 'components/main';
import Main from 'components/main';
import Toggler from 'components/toggler';

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (val) => {
    setIsToggled(val);
  }

  const dDay = new Date('05/05/2025');

  return (
    <div className="app wrapper">
      <header className="container-fluid text-center py-3 header">
        <div className="row">
          <div className="col">
            <h1 className={`m-0`}>Days until...</h1>
          </div>
        </div>
       
      </header>

      <Main deadline={dDay} isToggled={isToggled} />

      <footer className={'container-fluid text-center py-3 footer'}>
        <ul className={`list-unstyled mb-0`}>
          <li className={`mb-3`}><Toggler isToggled={isToggled} onToggle={handleToggle} /></li>
          <li>Built with <span className={`heart`}>♡</span></li>
          <li>v1.6 | Websites don't take 8 years to complete.</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
