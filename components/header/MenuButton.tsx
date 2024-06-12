import { BurgerMenu, ExitMenu } from "../icons/Icons";

const MenuButton = ({
  hide,
  setHide,
}: {
  hide: boolean;
  setHide: (hide: boolean) => void;
}) => {
  return (
    <button className="md:hidden" onClick={() => setHide(!hide)}>
      {hide ? <BurgerMenu /> : <ExitMenu />}
    </button>
  );
};

export default MenuButton;
