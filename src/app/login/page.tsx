'use client'
import { useState } from 'react'
import RegisterUser from './components/RegisterUser'
import { registerUser } from './services/registerUser'
import { isFormComplete } from './utils/isFormComplete'
import { LoginUser } from './components/LoginUser'

const initialState = {
    register: false,
    name: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
}

export default function Login() {
    const [state, setState] = useState(initialState)
    const { register } = state
    const title = register ? 'Registrarse' : 'Ingresar'
    const footerText = register
        ? '¿Ya tiene una cuenta?'
        : '¿No tiene una cuenta?'

    const toggleBtn: () => void = () => {
        setState({ ...state, register: !register })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = () => {
        if (!isFormComplete({ ...state })) return
        registerUser({ ...state })
    }

    return (
        <div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
            <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
                Bienvenido
            </h1>
            {register ? (
                <RegisterUser onChange={onChange} />
            ) : (
                <LoginUser onChange={onChange} />
            )}
            <button
                form="userForm"
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
                onClick={onSubmit}
            >
                {title}
            </button>

            <div className="mt-4 text-center">
                <span className="text-sm text-gray-500 dark:text-gray-300">
                    {footerText}{' '}
                </span>
                <a
                    className="text-blue-500 hover:text-blue-600"
                    onClick={toggleBtn}
                >
                    Ingresar
                </a>
            </div>
        </div>
    )
}
