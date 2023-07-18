import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/', { replace: true })
        }, 3000)
    }, []);

    return <div>
        This page not found!
    </div>

}

export default NotFoundPage;