import s from "./Aside.module.css";
import { dataAside } from "./data";
import { AsideLink } from "../../ui/AsideLink/AsideLink";
import skilla_logo from "./assets/skilla_logo.svg";

export const Aside = () => {
  return (
    <aside className={s.aside}>
      <div className={s.aside_logo}>
        <img src={skilla_logo} alt="logo" />
      </div>
      {dataAside.map((el) => (
        <AsideLink el={el} />
      ))}
    </aside>
  );
};
