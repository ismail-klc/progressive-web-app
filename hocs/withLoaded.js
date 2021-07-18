import { useRecoilState } from "recoil";
import Login from "../pages/login";
import { authState } from "../states/auth";
import Router from 'next/router'

const withLoaded = Component => {
    const Loaded = (props) => {
        const [auth] = useRecoilState(authState);

        if (auth.loaded) {
            return (
                <Component {...props} />
            );
        }
        return null;
    };

    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Loaded;
};

export default withLoaded;