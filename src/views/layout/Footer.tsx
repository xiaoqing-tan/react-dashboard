
import {
  Box,
  Typography,
  Link,
} from "@mui/material";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box sx={{paddingTop: 4}}>
      <Copyright />
    </Box>
  )
}

export default Footer;