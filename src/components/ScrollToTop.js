import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import IconButton from '@mui/material/IconButton';

//Components
import { useGlobalContext } from './Context';

function ScrollToTop() {
  const { showButton } = useGlobalContext();

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <div >
      {showButton && (
        <div className='scrollToTop'>
          <IconButton onClick={scrollToTop}>
            <KeyboardDoubleArrowUpIcon className='icon' fontSize="medium" />
          </IconButton>
        </div>
      )}
    </div>
  )
}

export default ScrollToTop;
