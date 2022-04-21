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
import Team from 'pages/Team';
import Member from 'pages/Member';
import JobList from 'pages/Job/List';
import JobForm from 'pages/Job/Form';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="teams" element={<Team />} />
          <Route path="members" element={<Member />} />
          <Route path="todos" element={<JobList />} />
          <Route path="todos/create" element={<JobForm mode='create' />} />
          <Route path="todos/:id/edit" element={<JobForm mode='edit' />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
