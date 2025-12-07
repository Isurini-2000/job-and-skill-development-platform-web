import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff, Lock } from "@mui/icons-material";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = () => {
    console.log({ username, password });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e8f5e9", 
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: 400,
          borderRadius: 3,
          backgroundColor: "#ffffff",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Lock sx={{ fontSize: 50, color: "#43a047" }} />
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
            Welcome Back
          </Typography>
        </Box>

        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ textAlign: 'right', mt: 1 }}>
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: '#4caf50',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: '#2e7d32'
                  }
                }}
              >
                Forgot password?
              </Link>
            </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            py: 1.5,
            backgroundColor: "#43a047",
            "&:hover": { backgroundColor: "#388e3c" },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <Link
                  href="#"
                  sx={{
                    color: '#4caf50',
                    textDecoration: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      textDecoration: 'underline',
                      color: '#2e7d32'
                    }
                  }}
                >
                  Register
                </Link>
              </Typography>
            </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
