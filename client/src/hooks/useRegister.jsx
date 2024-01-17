import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useRegister = () => {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState('')
    const {dispatch} = useAuthContext()
    const navigate = useNavigate()
    const register = async (user) => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                staff:
                {
                    staffID : user.staffID,
                    staffEmail : user.staffEmail,
                    staffPassword : user.staffPassword,
                    staffName : user.staffName,
                    staffDepartment : user.staffDepartment,
                    staffCategory: user.staffCategory,
                    staffSection: user.staffSection,
                }
            })
        })
        const json = await response.json()
        
        if (!response.ok) {
            console.log(user);
            console.log(json.error)
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok){
            console.log(json);
            navigate('/login')
            dispatch({type: 'LOGIN',payload: json})
            setIsLoading(false)
        }
        
    }
    return {register, isLoading, error}
}