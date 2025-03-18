import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style.scss';

const rootElem = document.getElementById('root');
const root = createRoot(rootElem);



root.render(<App />);