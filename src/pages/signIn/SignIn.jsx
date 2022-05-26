import React, { useEffect, useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import signInFoto from "../../image/background/signIn.svg";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { authAction } from "../../redux/actions/AuthAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userNameRef = useRef();
  const PasswordRef = useRef();
  const [userNameCheck, setuserNameCheck] = useState({
    helperText: "",
    error: false,
  });
  const [passwordCheck, setPasswordCheck] = useState({
    helperText: "",
    error: false,
  });
  const [values, setValues] = React.useState({
    amount: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userNameRef.current.value === "") {
      setuserNameCheck({ helperText: "mail bos ola bilemez", error: true });
    } else {
      setuserNameCheck({ helperText: "", error: false });
    }
    if (PasswordRef.current.value === "") {
      setPasswordCheck({
        helperText: "sifre mail bos ola bilemez",
        error: true,
      });
    } else {
      setPasswordCheck({ helperText: "", error: false });
    }

    const loginData = {
      UserName: userNameRef.current.value,
      Password: PasswordRef.current.value,
    };
    if (userNameRef.current.value !== "" && PasswordRef.current.value !== "") {
      dispatch(authAction(loginData, navigate));
      // console.log(loginData);
    } else {
      console.log("xeta var");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            //   'url(https://source.unsplash.com/random)'
            backgroundImage: "url(" + signInFoto + ")",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "auto", //cover
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={4}
          elevation={6}
          square="true"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                // required
                fullWidth
                id="userName outlined-error-helper-text"
                label="User Name"
                name="user name"
                autoComplete="off"
                autoFocus
                error={userNameCheck.error}
                inputRef={userNameRef}
                helperText={userNameCheck.helperText}
              />
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="password outlined-error-helper-text"
                  type={values.showPassword ? "text" : "password"}
                  // value={values.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  inputRef={PasswordRef}
                  error={passwordCheck.error}
                  helpertext={passwordCheck.helperText}
                />
                {passwordCheck.helperText && (
                  <FormHelperText error id="password">
                    {passwordCheck.helperText}
                  </FormHelperText>
                )}
              </FormControl>
              {/* <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password outlined-error-helper-text"
                inputRef={PasswordRef}
                error={passwordCheck.error}
                // autoComplete="current-password"
                helperText={passwordCheck.helperText}
              /> */}

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/home" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
