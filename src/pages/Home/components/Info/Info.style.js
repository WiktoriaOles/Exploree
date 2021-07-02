import {
  styled,
  Checkbox as BaseCheckbox,
  Button as BaseButton,
} from "@material-ui/core";

export const TextContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const ButtonsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  height: 100,
}));

export const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: 600,
}));

export const Image = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
}));

export const Checkbox = styled(BaseCheckbox)(({ theme }) => ({
  display: "flex",
}));

export const Button = styled(BaseButton)(({ theme }) => ({
  width: 200,
}));
