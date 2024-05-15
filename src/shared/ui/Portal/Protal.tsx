import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface IProtal {
  children?: ReactNode
  element?: HTMLElement
}

export const Protal: FC<IProtal> = (props) => {
  const { children, element = document.body } = props
  return createPortal(children, element)
}
