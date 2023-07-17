import { useSelector } from "react-redux";

import {
    selectContact,
    selectIsLoggedIn
} from '../redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectContact);
    return {
        isLoggedIn,
        user
    }
}