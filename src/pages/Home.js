import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion } from "framer-motion";

import Game from "../components/Game";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //data extraction
  const { popularGames, newGames, upcomingGames } = useSelector(
    (state) => state.gamesReducer
  );

  return (
    <StyledGameList>
      <h2>Upcoming Games</h2>
      <StyledGames>
        {upcomingGames.map((game) => {
          return (
            <Game
              name={game.name}
              released={game.released}
              image={game.background_image}
              id={game.id}
              key={game.id}
            />
          );
        })}
      </StyledGames>
      <h2>Popular Games</h2>
      <StyledGames>
        {popularGames.map((game) => {
          return (
            <Game
              name={game.name}
              released={game.released}
              image={game.background_image}
              id={game.id}
              key={game.id}
            />
          );
        })}
      </StyledGames>
      <h2>New Games</h2>
      <StyledGames>
        {newGames.map((game) => {
          return (
            <Game
              name={game.name}
              released={game.released}
              image={game.background_image}
              id={game.id}
              key={game.id}
            />
          );
        })}
      </StyledGames>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
