import { Button, FormLabel, Paper, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import "./RegistrationForm.css";

const RegistrationForm = () => {
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
  const onSubmit = (values: any) => history.push("/register-success");

  return (
    <Paper>
      <form
        autoComplete="off"
        className="RegistrationForm-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormLabel>Załóż nowe konto</FormLabel>
        <TextField
          id="firstName"
          name="firstName"
          inputRef={register({ required: "Wymagane" })}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          label="Imię"
        />
        <TextField
          id="lastName"
          name="lastName"
          inputRef={register({ required: "Wymagane" })}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          label="Nazwisko"
        />
        <TextField
          id="login"
          name="login"
          inputRef={register({ required: "Wymagane" })}
          error={!!errors.login}
          helperText={errors.login?.message}
          label="Nazwa użytkownika"
        />
        <TextField
          id="email"
          name="email"
          type="email"
          inputRef={register({ required: "Wymagane" })}
          error={!!errors.email}
          helperText={errors.email?.message}
          label="E-mail"
        />
        <TextField
          id="password"
          name="password"
          inputRef={register({ required: "Wymagane" })}
          error={!!errors.password}
          helperText={errors.password?.message}
          label="Hasło"
          type="password"
        />

        <Button color="secondary" type="submit">
          Zarejestruj
        </Button>
      </form>
    </Paper>
  );
};

export default RegistrationForm;
