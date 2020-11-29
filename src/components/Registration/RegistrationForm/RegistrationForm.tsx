import { Button, Link, makeStyles, TextField } from "@material-ui/core";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import RegisterRequest from "../../../shared/types/register/RegisterRequest";

interface RegisterFormProps {
  onRegister: (request: RegisterRequest) => void;
}

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

const RegistrationForm: FC<RegisterFormProps> = ({ onRegister }) => {
  const classes = useStyles();

  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      name: "",
      username: "",
      login: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: RegisterRequest) => onRegister(values);

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="name"
        name="name"
        inputRef={register({ required: "Wymagane" })}
        error={!!errors.name}
        helperText={errors.name?.message}
        label="Imię"
        autoComplete="given-name"
        variant="outlined"
        margin="normal"
        fullWidth
        autoFocus
      />
      <TextField
        id="username"
        name="username"
        inputRef={register({ required: "Wymagane" })}
        error={!!errors.username}
        helperText={errors.username?.message}
        label="Nazwa użytkownika"
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
