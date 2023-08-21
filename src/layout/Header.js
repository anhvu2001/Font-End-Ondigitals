import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };
  const toggleClass = isActive ? "toogle active" : "toogle";
  return (
    <header>
      <div className={toggleClass} onClick={toggleActive}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
