import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

//Components
import useStyles from '../styles/UseStyles';

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container
        maxWidth="md"
        component="footer"
      // sx={{
      //   // borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      //   mt: 2,
      //   py: [2, 2],
      // }}
      >
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          gutterBottom
        >
          ALL WEATHER
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" >
          {'Copyright © '}

          {new Date().getFullYear()}
          {'.'} {' '}
          <Link href="https://sid-projects.netlify.app/" target="_blank">
            My Other Projects
          </Link>
        </Typography>
      </Container>
    </div>
  )
}

export default Footer;
