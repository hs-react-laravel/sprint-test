import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from 'store'
import Home from 'pages/Home';
import './App.css';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
