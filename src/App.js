import React from 'react';
import './App.css';
import NavigationBar from './app/NavigationBar';
import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import ProfilePage from './features/profile/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
import { useSelector } from 'react-redux';
import { getProfile } from './features/profile/profileSlice';
import { getUser } from './features/user/userSlice';

function App() {
  const user = useSelector(getUser);

  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
      </div>

      <Routes>
        <Route 
          path="/profile" 
          element={<PrivateRoute user={user} privateComponent={ProfilePage} />} 
        />
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
