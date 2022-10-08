import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MealPlanner from './components/MealPlanner';
import FoodTracker from './components/FoodTracker';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/mealplanner" element={<MealPlanner />} />
      <Route path="/foodtracker" element={<FoodTracker />} />
    </Routes>
  );
}

export default App;
