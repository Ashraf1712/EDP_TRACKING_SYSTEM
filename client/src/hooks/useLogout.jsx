import { useAuthContext } from "./useAuthContext";
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const navigate = useNavigate();

    const logout = () => {
        //TODO : CONFIRMATION MESSAGE TO LOGOUT

        
        //remove user
        localStorage.removeItem('user')

        //dispatch logout
        dispatch({type: 'LOGOUT'})

        navigate('/login');
    }

    return {logout}
}