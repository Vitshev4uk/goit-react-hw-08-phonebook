import { useSelector } from "react-redux";

import {
    selectContact,
    selectIsLoggedIn,
    selectIsAuthError
} from '../redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectContact);
    const isAuthError = useSelector(selectIsAuthError);
    return {
        isLoggedIn,
        user,
        isAuthError
    }
}