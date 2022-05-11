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
          <span className='font'>
            ALL ABOUT WEATHER
          </span>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" >
          <span className='font'>   {'Copyright © '}
            {new Date().getFullYear()}
            {'.'} {' '}
            <Link href="https://sid-projects.netlify.app/" target="_blank">
              My Other Projects
            </Link>
          </span>
        </Typography>
      </Container>
    </div>
  )
}

export default Footer;
