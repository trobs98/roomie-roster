import React from 'react';
import './App.css';
import NavigationBar from './app/NavigationBar';
import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import UserProfile from './features/profile/UserProfile';
import PrivateRoute from './components/PrivateRoute';
import { useSelector } from 'react-redux';
import { getProfile } from './features/profile/profileSlice';

function App() {
  const user = useSelector(getProfile);
  const isLoggedIn = user.isLoggedIn;
  //console.log(state);

  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
      </div>

      <Routes>
        <Route path="/profile" Component={<PrivateRoute component={UserProfile} path="/profile"/>} />
        <Route 
          path="/" 
          element={<Navigate replace to="/home" />}
        />
        {/* <Route exact path="/profile/:userId" Component={UserProfile} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
