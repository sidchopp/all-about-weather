import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

function Footer() {
  return (
    <div className='footer' >
      <Container maxWidth="md" component="footer">
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
