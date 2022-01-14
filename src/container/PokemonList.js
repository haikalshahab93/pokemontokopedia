import { useEffect, useState } from "react";
import { Container, Col, Card, Button, Row , NavLink } from "react-bootstrap";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState('');

  const getPokemon = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await res.json();

    

      setCount(data.count);

      
      const detailPokemon = async(result) => {
        result.forEach(async(pokemon)=>{
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          const data = await response.json();

          setPokemons(currentList =>[...currentList,data]);
        })
    };

    detailPokemon(data.results)
    // setPokemons(data.results);
  }


  useEffect(()=>{
    getPokemon();
  },[])


  return (
    <Container fluid={true} className="py-5">
      <Row>
        <Col sm={{ size: 8 }} md={{ size: 6 }} lg={{ size: 4 }}>
          <h1 className="display-43 text-dark text-center">Pokemon List</h1>
          <h3 className="display-43 text-dark text-center">Jumlah Pokemon {count}</h3>
        </Col>
      </Row>

      <Row className="text-center my-5">
        {pokemons.map((pokemon) => {
          return (
            <Col xs={{ size: 6 }} sm={{ size: 4 }} lg={{ size: 3 }} xl={{ size: 2 }} className="mb-3">
              <Card style={{ width: "18rem" }}>
              <Card.Title>{pokemon.id}</Card.Title>
                <Card.Img variant="top" src={pokemon.sprites.front_default} />
                <Card.Body>
                  <Card.Title>{pokemon.name}</Card.Title>
                  <NavLink  to={`detail/${pokemon.name}`}>
                                        <Button outline className="w-100" color="primary">View</Button>
                    </NavLink>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

    </Container>
  );
};

export { PokemonList };
