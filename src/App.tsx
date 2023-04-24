import { Route, Routes } from 'react-router-dom';

import { TodoPage } from './pages/TodoPage';
import { FollowersPage } from './pages/FollowersPage';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<TodoPage />} />
        <Route path='/followers' element={<FollowersPage />} />
      </Routes>
    </>
  );
}

export default App;
