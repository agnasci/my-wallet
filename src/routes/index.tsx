import React from 'react'

import Layout from '../components/Layout'

import { useAuth } from '../hooks/auth'

import App from './app.routes'
import Auth from './auth.routes'

const Routes: React.FC = () => {
    const { logged } = useAuth()

    return (
        <>
            {logged ? (
                <Layout>
                    <App />
                </Layout>
            ) : (
                <Auth />
            )}
        </>
    )
}

export default Routes