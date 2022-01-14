// import { Container } from "react";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Header } from "./component/Header";
import { PokemonList } from "./container/PokemonList";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <PokemonList />
      </Container>
      <Header />
    </Fragment>
  );
};

export default App;
