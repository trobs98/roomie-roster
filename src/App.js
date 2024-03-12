import React from 'react';
import './App.css';

import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { useSelector } from 'react-redux';

import ProfilePage from './features/profile/ProfilePage';
import LoginPage from './components/LoginPage';
import { getUser } from './features/user/userSlice';

function App() {
  const user = useSelector(getUser);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          
          <Route
            path="/login"
            element={
              <PublicRoute
                user={user}
                publicComponent={LoginPage}
              />
            }
          />

          <Route
            path="/profile" 
            element={
              <PrivateRoute
                user={user} 
                privateComponent={ProfilePage} 
              />
            } 
          />
          
          <Route
            path="*" 
            element={
              <PrivateRoute 
                user={user} 
                privateComponent={ () => <Navigate replace to="/home" /> } 
              />
            }
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
