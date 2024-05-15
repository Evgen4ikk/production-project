import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface ILoginModal {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<ILoginModal> = (props) => {
  const { className, isOpen, onClose } = props
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('', {}, [className])}
      lazy
    >
      <LoginForm />
    </Modal>
  )
}
