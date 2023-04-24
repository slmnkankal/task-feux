import React, { useEffect } from "react";

const DropdownMenu = () => {
  useEffect(() => {
    window.onclick = function (event: any) {
      if (!event?.target?.matches?.(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList?.contains("show")) {
            openDropdown.classList?.remove("show");
          }
        }
      }
    };
  }, []);

  const handleClick = (event: any) => {
    document?.getElementById("myDropdown")?.classList.toggle("show");
  };
  return (
    <div className="dropdown">
      <button onClick={handleClick} className="dropbtn">
        Dropdown
      </button>
      <div id="myDropdown" className="dropdown-content">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default DropdownMenu;
