import {
  TextField,
  Container,
  ButtonsContainer,
  ImageContainer,
  Image,
} from "./Form.style";
import Button from "../Button";
import { useState } from "react";

const Form = ({ onSubmit, onCancel }) => {
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [imageUrl, setUrl] = useState("");

  return (
    <Container>
      <TextField
        id="city"
        label="Miasto"
        value={city}
        onChange={(e) => setcity(e.target.value)}
      />
      <TextField
        id="country"
        label="Kraj"
        value={country}
        onChange={(e) => setcountry(e.target.value)}
      />
      <TextField
        id="imageUrl"
        label="Adres obrazu"
        value={imageUrl}
        onChange={(e) => setUrl(e.target.value)}
      />
      <ImageContainer>
        <Image src={imageUrl}></Image>
      </ImageContainer>
      <ButtonsContainer>
        <Button onClick={onCancel}>Anuluj</Button>
        <Button
          disabled={
            city.length <= 0 && country.length <= 0 && imageUrl.length <= 0
          }
          onClick={() => onSubmit({ title: city, country, imageUrl })}
        >
          Dodaj
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Form;
