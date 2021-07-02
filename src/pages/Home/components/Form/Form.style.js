import { styled, TextField as BaseTextField } from "@material-ui/core";

export const TextField = styled(BaseTextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const ButtonsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
}));

export const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: 545,
}));

export const Image = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
}));
