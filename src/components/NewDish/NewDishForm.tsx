import { TextField, Button, makeStyles, Container } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import AddDishRequest from "../../shared/types/dish/AddDishRequest";
import { addDish } from "../../store/dish/dish.action";
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

export const NewDishForm = () => {
  const classes = useStyles();

  const { handleSubmit, register } = useForm<LoginFormType>();
  const dispatch = useDispatch();
  const onSubmit = (formData: AddDishRequest) => {
    dispatch(addDish(formData));
  };

  return (
    <Container maxWidth="lg">
      <form className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="name"
          label="Nazwa"
          id="name"
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
          id="price"
          label="Cena"
          name="price"
          type="number"
          InputProps={{ inputProps: { step: 0.01 } }}
          autoComplete="off"
          inputRef={register({
            required: true,
          })}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="description"
          label="Opis"
          name="description"
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
          Dodaj
        </Button>
      </form>
    </Container>
  );
};
