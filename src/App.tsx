import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from 'pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route index element={<Teams />} />
          <Route index element={<Members />} />
          <Route path="todos" element={<Todos />}>
            <Route path=":todoID" element={<Todo />} />
            <Route path="new" element={<NewTodoForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
