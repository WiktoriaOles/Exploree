import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Button, List, Form, Info } from "./components";
import Grid from "@material-ui/core/Grid";
import { getListMock } from "./mocks";
import { useState, useEffect } from "react";
import { ListWrapper, DetailsWrapper, Container, Content } from "./Home.style";
import firebase from "../../config/fireBase";

function App() {
  const titles = ["Jankowice", "Jastrzębie-Zdrój", "Gliwice", "Sosnowiec"];

  const fetchCities = () => {
    firebase.child("cities").on("value", (snapshot) => {
      if (snapshot) {
        const response = snapshot.val();
        if (!response) return;
        setData(
          Object.keys(response).map((key) => ({
            ...response[key],
            id: key,
          }))
        );
      }
    });
  };
  useEffect(() => {
    fetchCities();
  }, []);
  const [data, setData] = useState([]);
  const [activeCityId, setActiveCityId] = useState();
  const [isAddingCity, setIsAddingCity] = useState(true);

  const onSubmit = async (newdata) => {
    await firebase
      .child("cities")
      .push({ ...newdata, visited: false }, (err) => console.log(err));
    fetchCities();
    setIsAddingCity(false);
  };

  const onCancel = () => {
    setIsAddingCity(false);
  };

  const onItemClick = (id) => {
    setActiveCityId(id);
    setIsAddingCity(false);
  };

  const city = data.find(({ id }) => id === activeCityId);

  const onDelete = () => {
    if (!city) return;
    setData(data.filter((item) => item.id !== city.id));
    firebase.child(`cities/${city.id}`).remove((err) => console.log(err));
    setIsAddingCity(true);
  };

  const toggleVisitedState = () => {
    if (!city) return;
    console.log(city);
    setData(
      data.map((item) => {
        if (item.id === city.id) {
          return {
            ...item,
            visited: !item.visited,
          };
        }
        return item;
      })
    );
    firebase
      .child(`cities/${city.id}`)
      .set({ ...city, visited: !city.visited }, (err) => console.log(err));
  };
  const notVisitedCities = data.filter((item) => !item.visited);
  const visitedCities = data.filter((item) => item.visited);

  return (
    <Container>
      <AppBar position="static">Exploree</AppBar>
      <Grid>
        <Button onClick={() => setIsAddingCity(true)}>Dodaj Miasto</Button>
      </Grid>
      <Content container justify="center">
        <Grid item xs={5}>
          <ListWrapper>
            Miejsca do odwiedzenia
            <List places={notVisitedCities} onItemClick={onItemClick} />
          </ListWrapper>
          <ListWrapper>
            Odwiedzone miejsca
            <List places={visitedCities} onItemClick={onItemClick} />
          </ListWrapper>
        </Grid>
        <Grid item xs={7}>
          <DetailsWrapper>
            {isAddingCity ? (
              <Form onSubmit={onSubmit} onCancel={onCancel} />
            ) : (
              <Info
                data={city}
                onDelete={onDelete}
                onCheck={toggleVisitedState}
              />
            )}
          </DetailsWrapper>
        </Grid>
      </Content>
    </Container>
  );
}

export default App;
