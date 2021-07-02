import { styled, Button as BaseButton } from "@material-ui/core";

export const Button = styled(BaseButton)(({ theme }) => ({
  width: 200,
  marginTop: theme.spacing(2),
}));
