export default function Register() {
    return (
        <>
            <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-sm space-y-10">
                    <div>

                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Opret din konto
                        </h2>
                    </div>
                    <form className="space-y-6" action="#" method="POST">
                        <div className="relative -space-y-px rounded-md shadow-sm">
                            <div
                                className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300"/>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Adgangskode
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Adgangskode"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Gentag adgangskode
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Gentag adgangskode"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Opret konto
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm leading-6 text-gray-500">
                        Har du allerede en konto?{' '}
                        <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Log ind
                        </a>
                    </p>
                    <img
                        className="mx-auto h-100 w-auto"
                        src="https://amero.dk/wp-content/uploads/amero-logo-boks-moerkeblaa-4.png"
                        alt="Your Company"
                    />
                </div>
            </div>
        </>
    )
}
