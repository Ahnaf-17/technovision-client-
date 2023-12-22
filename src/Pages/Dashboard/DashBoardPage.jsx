import useAuth from "../../Hooks/useAuth";

const DashBoard = () => {
    const {user} = useAuth()
    return (
        <div className="bg-base-100">
            this is dashboard of {user.displayName}
        </div>
    );
};

export default DashBoard;