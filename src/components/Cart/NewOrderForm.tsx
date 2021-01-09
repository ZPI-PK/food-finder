import { TextField, Button, makeStyles, Container } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import PostOrderRequest from "../../shared/types/order/PostOrderRequest";
import { getUserId } from "../../store/auth/auth.reducer";
import { getCartTotal, getDishes } from "../../store/cart/cart.reducer";
import { postOrder } from "../../store/order/order.action";
import LoginFormType from "../Login/LoginForm/LoginFormType";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const NewOrderForm = () => {
  const classes = useStyles();

  const { handleSubmit, register } = useForm<LoginFormType>();
  const dishes = useSelector(getDishes);
  const userId = useSelector(getUserId);
  const price = useSelector(getCartTotal);
  const dispatch = useDispatch();
  const onSubmit = (formData: PostOrderRequest) => {
    const request = { ...formData, dishes, userId, price };
    dispatch(postOrder(request));
  };

  return (
    <Container maxWidth="lg">
      <form className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="city"
          label="Miasto"
          id="city"
          autoComplete="off"
          inputRef={register({
            required: true,
            minLength: 3,
          })}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="postalCode"
          label="Kod pocztowy"
          name="postalCode"
          autoComplete="off"
          inputRef={register({
            required: true,
          })}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="street"
          label="Ulica"
          name="street"
          autoComplete="off"
          inputRef={register({
            required: true,
          })}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="buildingNumber"
          label="Numer budynku/mieszkania"
          name="buildingNumber"
          autoComplete="off"
          inputRef={register({
            required: true,
          })}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit(onSubmit)}
        >
          Złóż zamówienie
        </Button>
      </form>
    </Container>
  );
};
