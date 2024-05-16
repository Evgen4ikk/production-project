import { FC, lazy } from 'react'
import { ILoginForm } from './LoginForm'

export const LoginFormAsync = lazy<FC<ILoginForm>>(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => resolve(import('./LoginForm')), 1500)
    })
)
