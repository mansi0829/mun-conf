import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Link as Take} from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
// import FooterIcon from './lgo_mun_2.png'
import { CardMedia, Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        sx={{ backgroundColor: "#062a73" }}
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4}>
              <Box>
                {/* <CardMedia 
                  sx={{backgroundSize:"cover",backgroundRepeat:"no-repeat"}}
                  component="img"
                  height="auto"
                  image={FooterIcon}
                /> */}
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} sx={{ m: 1 }}>Links</Box>
              <Box sx={{ m: 1 }}>
                <Take to='/ourteam' color="inherit">
                  <li style={{textDecoration: 'none',color:'white'}}>Our Team</li>
                </Take>
              </Box>
              <Box sx={{ m: 1 }}>
                <Take to="/resources" color="inherit">
                  <li style={{textDecoration: 'none',color:'white'}}>Resources</li>
                </Take>
              </Box>
              <Box sx={{ m: 1 }}>
                <Take to="/committees" color="inherit">
                  <li style={{textDecoration: 'none',color:'white'}}>Committees</li>
                </Take>
              </Box>
            </Grid>

            <Grid
              item
              xs
              container
              direction="column"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={4}>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Connect with Us!
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sm={4}
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Box>
                  <Link
                    sx={{ color: "white" }}
                    href="https://www.instagram.com/pictmun/"
                  >
                    <InstagramIcon fontSize="large" />
                  </Link>
                </Box>
                <Box>
                  <Link
                    sx={{ color: "white" }}
                    href="https://www.facebook.com/pictmun"
                  >
                    <FacebookIcon fontSize="large" />
                  </Link>
                </Box>
                <Box>
                  <Link
                    sx={{ color: "white" }}
                    href="https://www.linkedin.com/company/pict-mun-club/"
                  >
                    <LinkedInIcon fontSize="large" />
                  </Link>
                </Box>
                <Box>
                  <Link
                    sx={{ color: "white" }}
                    href="https://twitter.com/pictmun?t=G9UUXlAFZRCoP7soIYidhQ&s=09"
                  >
                    <TwitterIcon fontSize="large" />
                  </Link>
                </Box>
                <Box>
                  <Link
                    sx={{ color: "white" }}
                    href="mailto:pictmun@gmail.com"
                  >
                    <MailIcon fontSize="large" />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            PICT MUN &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
