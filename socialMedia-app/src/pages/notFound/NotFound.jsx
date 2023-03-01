import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <img
              src="./pictures/horuslogo.png"
              alt=""
              width={400}
              height={300}
            />
          </Grid>
          <Grid xs={6}>
            <Typography variant="h1">OOPS!</Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" href="./home">
              Back Home
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
