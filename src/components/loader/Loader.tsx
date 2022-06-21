import cn from 'classnames'

import LoaderIcon from './loader.svg'

import s from './Loader.module.sass'

interface IProps {
  className?: string
}

const Loader = (props: IProps) => {
  const { className } = props

  const classes = cn(s.regular, className)

  return <LoaderIcon className={classes} />
}

export default Loader
