import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { ThemeProvider, createTheme } from "@mui/system";
import { useCourseContext } from "../contexts/CourseContext";

export default function Footer() {
  const { getCourses, courses } = useCourseContext();
  useEffect(() => {
    getCourses();
  }, []);
  const theme = createTheme({
    typography: {
      fontFamily: '"Play", sans-serif',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <hr />
      <Box
        component="footer"
        sx={{
          backgroundColor: "inherit",
          color: "white",
          p: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "18px" }}>
                О нас
              </Typography>
              <Typography variant="body2">
                VanillaCode - это душевная онлайн-школа IT-профессий с
                интенсивными курсами.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "18px" }}>
                Курсы
              </Typography>
              {courses.map((item) => (
                <Typography variant="body2">{item.title}</Typography>
              ))}

              {/* <Typography variant="body2">Email: info@example.com</Typography>
              <Typography variant="body2">Phone: +1 234 567 8901</Typography> */}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "18px" }}>
                Поддержка
              </Typography>
              <Link
                href="https://web.telegram.org/k/#@Vanilla_code_bot"
                color="inherit"
                target="_blank"
              >
                <TelegramIcon />
              </Link>
              <Link
                href="https://github.com/Sejimu/FULLSTACK-PROJECT-HACKATON"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
                target="_blank"
              >
                <GitHubIcon />
              </Link>
              <Link href="#" color="inherit" target="_blank">
                <LocalPhoneIcon />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" align="center" className="footer">
              © 2023:
              <Link
                color="inherit"
                href="https://your-website.com/"
                target="_blank"
              >
                VanillaCode
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
