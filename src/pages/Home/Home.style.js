import { styled, Grid, Paper as BasePaper } from "@material-ui/core";

export const Paper = styled(BasePaper)(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
}));

export const ListWrapper = styled(Paper)(({ theme }) => ({
  height: "50%",
  boxSizing: "border-box",
}));

export const DetailsWrapper = styled(Paper)(({ theme }) => ({
  height: "100%",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
}));

export const Content = styled(Grid)(({ theme }) => ({
  flex: "1 0",
}));
