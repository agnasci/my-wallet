import React, { createContext, useState, useContext } from 'react'

type TAuthContext = {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

type Props = {
    children: React.ReactNode;
}

const AuthContext = createContext<TAuthContext>({} as TAuthContext)

const AuthProvider: React.FC<Props> = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@my-wallet:logged')

        return !!isLogged
    })

    const signIn = (email: string, password: string) => {
        if(email === 'teste@email.com' && password === '123') {
            localStorage.setItem('@my-wallet:logged', 'true')
            setLogged(true)
        } else {
            alert('Senha ou usuário inválido!')
        }
    }

    const signOut = () => {
        localStorage.removeItem('@my-wallet:logged')
        setLogged(false)
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): TAuthContext {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }