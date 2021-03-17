import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Home from "./pages/Home";
import Game from "./components/Game";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
      <Game />
    </div>
  );
}

export default App;
