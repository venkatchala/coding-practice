const HocWithAuthentication = (WrappedComponent) => {
    return function EnhancedComponent (props) {
        const isAuthenticated = true;

        if (!isAuthenticated) {
            return (
                <div><p>Please Login!!</p></div>
            )
        }
        return <WrappedComponent {...props}/>

    };
};

export default HocWithAuthentication;