import ContentLoader from "react-content-loader";


const Skeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={1000}
            height={550}
            viewBox="0 0 3000 2000"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"

        >
            <rect x="26" y="79" rx="10" ry="10" width="3000" height="2000" />
        </ContentLoader>
    );
};

export default Skeleton;