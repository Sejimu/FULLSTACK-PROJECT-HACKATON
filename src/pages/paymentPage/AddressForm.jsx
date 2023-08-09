import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddressForm() {
  React.useEffect(() => {
    document.body.classList.add("addLessonPage");
    return () => {
      document.body.classList.remove("addLessonPage");
    };
  }, []);
  return (
    <React.Fragment>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "white",
          background: "transparent",
          "& label": {
            color: "white",
          },
        }}
        inputProps={{
          style: {
            color: "white",
          },
        }}
      >
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            sx={{
              color: "white",
              background: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              "& label": {
                color: "white",
              },
            }}
            inputProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            sx={{
              color: "white",
              background: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              "& label": {
                color: "white",
              },
            }}
            inputProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            sx={{
              color: "white",
              background: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              "& label": {
                color: "white",
              },
            }}
            inputProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            sx={{
              color: "white",
              background: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              "& label": {
                color: "white",
              },
            }}
            inputProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            sx={{
              color: "white",
              background: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              "& label": {
                color: "white",
              },
            }}
            inputProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            sx={{
              color: "white",
              background: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              "& label": {
                color: "white",
              },
            }}
            inputProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            sx={{
              color: "white",
              background: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              "& label": {
                color: "white",
              },
            }}
            inputProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            sx={{
              color: "white",
              background: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              "& label": {
                color: "white",
              },
            }}
            inputProps={{
              style: {
                color: "white",
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            sx={{
              color: "white",
              background: "transparent",
              border: "1px solid white",
              borderRadius: "5px",
              "& label": {
                color: "white",
              },
            }}
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                value="yes"
                sx={{
                  color: "white",
                  background: "transparent",
                  "& label": {
                    color: "white",
                  },
                }}
              />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
