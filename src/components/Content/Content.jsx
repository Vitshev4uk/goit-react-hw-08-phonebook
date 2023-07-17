import { useAuth } from "hooks";

function Content() {
        
    const {
        user: { name, email },
     } = useAuth();

        return (
            <div>
                <div>your name: {name}</div> <br />
                <div>your email: {email}</div>
            </div>
        )
}

export default Content;