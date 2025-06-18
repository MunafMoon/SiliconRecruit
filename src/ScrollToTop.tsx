import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner of the window
  }, [pathname]); // Re-run this effect whenever the pathname changes

  return null; // This component doesn't render anything itself
}

export default ScrollToTop;