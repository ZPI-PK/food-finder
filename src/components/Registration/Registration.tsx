import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Copyright from "../UI/Copyright/Copyright";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

interface RegistrationProps {}

const useStyles = makeStyles((theme) => ({
  registration: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Registration: React.FC<RegistrationProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.registration}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Załóż konto
        </Typography>
        <RegistrationForm />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </>
  );
};

export default Registration;
