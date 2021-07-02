import {
  TextContainer,
  Container,
  ButtonsContainer,
  ImageContainer,
  Image,
  Checkbox,
  Button,
} from "./Info.style";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Info = ({ data = {}, onDelete, onCheck }) => {
  return (
    <Container>
      <TextContainer>
        <p>{data.title}</p>
        <p>{data.country}</p>
      </TextContainer>
      <ImageContainer>
        <Image src={data.imageUrl}></Image>
      </ImageContainer>
      <ButtonsContainer>
        <FormControlLabel
          control={
            <Checkbox
              checked={!!data.visited}
              onChange={onCheck}
              name="checked"
              color="primary"
            />
          }
          label="Odwiedzone"
        />
        <Button onClick={onDelete} variant="contained" color="primary">
          Usuń
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Info;
