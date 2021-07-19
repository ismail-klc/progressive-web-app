import { useRecoilState } from "recoil";
import { authState } from "../states/auth";
import Loading from "../components/loading";

const withLoaded = Component => {
    const Loaded = (props) => {
        const [auth] = useRecoilState(authState);

        if (auth.loaded) {
            return (
                <Component {...props} />
            );
        }
        return <Loading />;
    };

    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Loaded;
};

export default withLoaded;