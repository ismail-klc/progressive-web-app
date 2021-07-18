import { useRecoilState } from "recoil";
import Login from "../pages/login";
import { authState } from "../states/auth";
import Router from 'next/router'

const withAuth = Component => {
    const Auth = (props) => {
        const [auth] = useRecoilState(authState);

        if (auth.loaded) {
            if (!auth.user) {
                return (
                    <Login />
                );
            }
            return (
                <Component {...props} />
            );
        }
        return null;
    };

    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
};

export default withAuth;