import { makeStyles } from '@mui/styles';

const lightColor = '#FCF6F5';
const darkColor = '#7b9acc';

const useStyles = makeStyles({
  body: {
    backgroundColor: lightColor,
    color: darkColor,
  },
  darkColor: {
    color: darkColor
  },
  lightColor: {
    color: lightColor
  },
  paper: {
    backgroundColor: darkColor,
  },
  card: {
    backgroundColor: lightColor,
    color: darkColor
  },
  footer: {
    backgroundColor: 'lightColor',
    color: darkColor,
    padding: "30px"
  }
});

export default useStyles;