import React from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <Container style={{ display: "flex", flexDirection: "column" }}>
      Rejestracja pomyślna
      <Link to="/">Wróć na stronę główną</Link>
    </Container>
  );
};

export default RegisterSuccess;
