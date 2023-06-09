import List from "../List/List"
import s from "./ListWrapper.module.css"

export const ListWrapper = ({children }) => {
  return (
    <div className={s.container}>
      <div className={s.list_nav}></div>
      <List/>
    </div>
  )
}
