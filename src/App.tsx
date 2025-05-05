import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import AddContentPage from './pages/AddContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add" element={<AddContentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
