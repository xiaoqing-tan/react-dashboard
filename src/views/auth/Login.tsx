import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { ChildCare } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useLogin } from "../../core";
import { services } from "../../services";

const StyledLink = styled(Link)({
  "&:hover": {
    color: "rgba(0, 0, 0, .2)",
  },
  "&": {
    color: "rgba(0, 0, 0, .3)",
    textDecoration: "none",
    fontSize: 14,
  },
});

type formValsProps = {
  email: string;
  password: string;
};

const defaultValues: formValsProps = {
  email: "",
  password: "",
};

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formValsProps>({ defaultValues });
  const [status, setStatus] = useState<boolean>(false);
  const login = useLogin();

  const onSubmit = (formVals: formValsProps) => {
    setStatus(true);
    login({ user: formVals }).then(async (res) => {
      const data = await services.login(formVals);
      console.log(data)
      setStatus(false);
    });
  };

  return (
    <Container
      sx={{
        p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        boxSizing: "border-box",
        backgroundColor: "#f7f7f7",
      }}
      maxWidth={false}
    >
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          paddingX: 4,
          paddingY: 6,
          m: "0 auto",
          width: 460,
          backgroundColor: "#fff",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <ChildCare sx={{ fontSize: 50 }} />
          <Typography
            variant="h2"
            sx={{ lineHeight: 1, marginBottom: 1, fontWeight: "bold" }}
          >
            Log in
          </Typography>
          <Typography
            variant="inherit"
            sx={{ fontSize: 14, color: "#ccc", marginBottom: 2 }}
          >
            Wecome to the platform
          </Typography>
        </Box>

        <Controller
          name="email"
          control={control}
          rules={{
            required: "this is required",
            pattern: {
              value:
                /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
              message: "please input ",
            },
          }}
          render={({ field }) => (
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              {...field}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: "this is required",
            maxLength: {
              value: 20,
              message: "Min length is 20",
            },
          }}
          render={({ field }) => (
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              error={!!errors.password}
              {...field}
              helperText={errors.password?.message}
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />

        <Box sx={{ pt: 2, width: "100%" }}>
          <Button
            fullWidth
            type="submit"
            size="large"
            variant="contained"
            disabled={status}
          >
            Log in
          </Button>
        </Box>

        <Box sx={{ pt: 2, width: "100%", textAlign: "center" }}>
          <StyledLink to="/">Forgot your password?</StyledLink>
        </Box>
      </Box>
    </Container>
  );
}