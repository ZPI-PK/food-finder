import { Button, Grid, Link, makeStyles, TextField } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import LoginFormType from "./LoginFormType";
import LoginRequest from "../../../shared/types/auth/LoginRequest";

interface LoginFormProps {
  onAuth: (loginRequest: LoginRequest) => void;
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { onAuth } = props;

  const classes = useStyles();

  const { handleSubmit, register } = useForm<LoginFormType>();

  const onSubmit = (formData: LoginFormType) => {
    const data: LoginRequest = {
      usernameOrEmail: formData.email,
      password: formData.password,
    };
    onAuth(data);
  };

  return (
    <form className={classes.form}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="email"
        label="E-mail/UserName"
        name="email"
        type={"text"}
        autoComplete="email"
        inputRef={register({
          required: true,
        })}
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        name="password"
        label="Hasło"
        type="password"
        id="password"
        autoComplete="current-password"
        inputRef={register({
          required: true,
          minLength: 3,
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
        Zaloguj się
      </Button>
      <Grid container>
        <Grid item>
          <Link component={RouterLink} to="/register" variant="body2">
            {"Nie posiadasz konta? Zarejestruj się"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
