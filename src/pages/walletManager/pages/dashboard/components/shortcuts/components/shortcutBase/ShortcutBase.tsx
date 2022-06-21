
import s from './ShortcutBase.module.sass'

interface IProps {
  children: JSX.Element
  title: string
  onClick: () => void
}

const ShortcutBase = ({ children, title, onClick }: IProps) => {
  return (
    <div className={s.root}>
      <p className={s.title}>{title}</p>
      {children}
      <button className={s.button} onClick={onClick} type='button'>Send</button>
    </div>
  )
}

export default ShortcutBase
