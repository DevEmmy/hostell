import React from "react";

const ButtonIcon = ({ icon, click }) => {
  return (
    <div type="button" className="cursor-pointer" onClick={click}>
      {icon}
    </div>
  );
};

export default ButtonIcon;
