import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const LoginForm = () => {
  return (
    <form>
      <h2>Login</h2>
      {/* Input fields */}
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

const SignUpForm = () => {
  return (
    <form>
      <h2>Sign Up</h2>
      {/* Input fields */}
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

const Test = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Test;
