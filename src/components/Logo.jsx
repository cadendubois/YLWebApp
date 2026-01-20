
import logoImage from '../assets/logo.png';

function Logo({ size = "medium" }) {
  const sizes = {
    small: "3rem",      // ~48px at default font size
    medium: "6rem",     // ~96px
    large: "12rem"      // ~192px
  };

  return (
    <img 
      src={logoImage} 
      alt="The Spot Logo" 
      className={`logo logo-${size}`}
      style={{ width: sizes[size] }}
    />
  );
}

export default Logo;