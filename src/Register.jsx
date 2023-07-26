import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";

export const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
     
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [data, setData] = useState(null);

  const getFetchData =  () => {
     fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => console.log(response))
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
  };

  return (
    <>
      <Box
        // component="form"
        sx={{
          width: 500,
          height: 500,
          backgroundColor: "#e699aa",
          borderRadius: 5,
          padding: "16px",
        }}
        noValidate
        autoComplete="on"
      >
        <form onSubmit={handleSubmit}>
          <h1>Register Form</h1>
          <InputLabel
            htmlFor="name"
            sx={{
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Your Name
          </InputLabel>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            required
            id="name"
            //   label="Required"
            placeholder="enter your name"
          />

          <br />
          <br />

          <InputLabel
            htmlFor="email"
            sx={{
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Email
          </InputLabel>

          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
            id="email"
            placeholder="enter your email"
          />

          <br />
          <br />

          <InputLabel
            htmlFor="password"
            sx={{
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Password
          </InputLabel>

          <TextField
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            required
            id="password"
            //   label="Required"
            placeholder="enter your password"
          />
          <br />
          <br />

          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#f6d2a0",
              "&:hover": {
                backgroundColor: "#FFDBAA",
              },
            }}
            type="submit"
            variant="contained"
          >
            {" "}
            Register
          </Button>
        </form>
        <br />

        <Button
          onClick={() => props.onFormSwitch("login")}
          color="primary"
          sx={{
            color: "black",
          }}
        >
          Dont't have an account ? Register here
        </Button>
      </Box>
      <div>
        <Button
          onClick={getData}
          sx={{
            backgroundColor: "#f6d2a0",
            "&:hover": {
              backgroundColor: "#FFDBAA",
            },
          }}
          type="submit"
          variant="contained"
        >
          get Api
        </Button>

        <Button
          onClick={getFetchData}
          sx={{
            backgroundColor: "#f6d2a0",
            "&:hover": {
              backgroundColor: "#FFDBAA",
            },
          }}
          type="submit"
          variant="contained"
        >
          get fetch Api
        </Button>
      </div>
    </>
  );
};
