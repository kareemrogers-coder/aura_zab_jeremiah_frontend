import { useAuth0 } from "@auth0/auth0-react";

const { isAuthenticated, getAccessTokenSilently } = useAuth0(); //loginWithRedirect, user,

const login = async () => {
    if (isAuthenticated) {
        try{
            const token = await getAccessTokenSilently();
            const response = await fetch ('https://aura-library.onrender.com/users/login', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ auth0_token: token }),
            });
            const data = await response.json();
            console.log(data);

        }  catch (error){
            console.error('Error during authentication:', error);
        }
    }
};

const LoginButton = () => {
    return (
        <button onClick = {login}>

        </button>
    );
};

export default LoginButton
