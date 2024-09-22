import HocWithAuthentication from "./HocWithAuthentication";

const HocDashboard = () => {
    return (
        <div><p>Hai Welcome to your Dashboard</p></div>
    );
};

export default HocWithAuthentication(HocDashboard);