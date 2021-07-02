import { Button as BaseButton } from "./Button.style";

const Button = ({ onClick, children, ...props }) => {
  return (
    <BaseButton
      onClick={onClick}
      variant="contained"
      color="primary"
      {...props}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
