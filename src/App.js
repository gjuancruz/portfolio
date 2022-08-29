import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button, Form } from "react-bootstrap";
import Blue from './pages/Blue';
import Red from './pages/Red';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import Landing from "./pages/Landing";
import AnimatedRoutes from "./pages/AnimatedRoutes";

export default function App() {

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
