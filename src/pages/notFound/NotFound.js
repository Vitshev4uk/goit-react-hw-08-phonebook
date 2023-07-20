import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from './NotFound.module.css'

function NotFoundPage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/login', { replace: true })
        }, 1000)
    }, [navigate]);

    return <div className={css.TextContainer}>
        <div className={css.Text}>This page not found!</div>
    </div>

}

export default NotFoundPage;