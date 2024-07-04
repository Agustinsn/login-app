interface IProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function RegisterUser({ onChange }: IProps) {
    return (
        <form id="userForm" className="w-full flex flex-col gap-4">
            <div className="w-full flex gap-2">
                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">
                        Nombre:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">
                        Apellido:
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        onChange={onChange}
                        required
                    />
                </div>
            </div>
            <div className="flex items-start flex-col justify-start">
                <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">
                    Usuario:
                </label>
                <input
                    type="text"
                    id="userName"
                    name="userName"
                    className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    onChange={onChange}
                    required
                />
            </div>
            <div className="flex items-start flex-col justify-start">
                <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">
                    Correo:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    onChange={onChange}
                    required
                />
            </div>
            <div className="flex items-start flex-col justify-start">
                <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">
                    Contraseña:
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    onChange={onChange}
                    required
                />
            </div>
        </form>
    )
}
