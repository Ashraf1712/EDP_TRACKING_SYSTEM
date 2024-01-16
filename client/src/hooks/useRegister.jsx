import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useRegister = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState('')
    const {dispatch} = useAuthContext()
    const navigate = useNavigate()
    const register = async (email, password) => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const json = await response.json()
        
        if (!response.ok) {
            console.log(json.error)
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok){
            navigate('/login')
        }
        
    }
    return {register, isLoading, error}
}