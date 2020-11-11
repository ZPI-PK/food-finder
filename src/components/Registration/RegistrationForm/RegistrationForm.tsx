import { Button, Link, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import RegistrationFormType from "./RegistrationFormType";

const useStyles = makeStyles((theme) => ({
  registration: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegistrationForm = () => {
  const classes = useStyles();

  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      login: "",
      email: "",
      password: "",
    },
  });

  const history = useHistory();

  const onSubmit = (values: RegistrationFormType) =>
    history.push("/register-success");

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="firstName"
        name="firstName"
        inputRef={register({ required: "Wymagane" })}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
        label="Imię"
        autoComplete="given-name"
        variant="outlined"
        margin="normal"
        fullWidth
        autoFocus
      />
      <TextField
        id="lastName"
        name="lastName"
        inputRef={register({ required: "Wymagane" })}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
        label="Nazwisko"
        autoComplete="family-name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="email"
        name="email"
        type="email"
        inputRef={register({ required: "Wymagane" })}
        error={!!errors.email}
        helperText={errors.email?.message}
        label="E-mail"
        autoComplete="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="password"
        name="password"
        inputRef={register({ required: "Wymagane" })}
        error={!!errors.password}
        helperText={errors.password?.message}
        label="Hasło"
        type="password"
        autoComplete="new-password"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button
        fullWidth
        variant="contained"
        color="secondary"
        type="submit"
        className={classes.submit}
      >
        Zarejestruj
      </Button>
      <Link component={RouterLink} to="/" variant="body2">
        {"Masz już konto? Zaloguj się"}
      </Link>
    </form>
  );
};

export default RegistrationForm;
