import { useState, useRef } from "react";
import NavBarStyles from "./NavBar.module.css";

export default function NavBar() {
  const [showButton, setShowButton] = useState(false);
  const buttonRef = useRef(null);
  function handleSignOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
        // For example, redirect to login
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }

  return (
    <div className={NavBarStyles.container}>
      <h4>NeuroDocs</h4>
      <button ref={buttonRef} onClick={() => setShowButton((prev) => !prev)}></button>
      {showButton && (
        <div className={NavBarStyles.dropdown}>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
}
