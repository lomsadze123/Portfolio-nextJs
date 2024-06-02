import { useEffect } from "react";
import { BurgerMenu, ExitMenu } from "../icons/Icons";

const MenuButton = ({
  hide,
  setHide,
}: {
  hide: boolean;
  setHide: (hide: boolean) => void;
}) => {
  useEffect(() => {
    if (window.innerWidth <= 768)
      document.body.classList.toggle("no-scroll", !hide);
  }, [hide]);

  return (
    <button className="md:hidden" onClick={() => setHide(!hide)}>
      {hide ? <BurgerMenu /> : <ExitMenu />}
    </button>
  );
};

export default MenuButton;
