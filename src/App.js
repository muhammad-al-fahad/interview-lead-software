import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UserProfile from './components/userId';
import Home from './components/home';
import NotFound from './components/404';

const App = () => {
  return (
    <div className="App">
      <main className='content'>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<UserProfile />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </main>
    </div>
  );
}

export default App;
