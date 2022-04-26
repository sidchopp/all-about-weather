import { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import IconButton from '@mui/material/IconButton';

function ScrollToTop() {

  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

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
