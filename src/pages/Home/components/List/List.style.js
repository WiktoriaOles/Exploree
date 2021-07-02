import { styled, List as BaseList } from "@material-ui/core";

export const List = styled(BaseList)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));
