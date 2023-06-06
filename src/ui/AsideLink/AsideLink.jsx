import s from "./AsideLink.module.css";
import classNames from "classnames";

export const AsideLink = ({ el }) => {
  return (
    <nav className={el.id === "calls" ? classNames(s.aside_link, s.active) : s.aside_link}>
      <img src={el.icon} alt="icon" />
      {el.name}
    </nav>
  );
};
