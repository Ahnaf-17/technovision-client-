import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import UsersCard from "./Users/UsersCard";

const Landing = () => {
    const user = useLoaderData();
    console.log(user.length);
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <section>
                <h3 className="text-center items-center text-white text-3xl font-bold">People Who Use</h3>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 my-10 lg:mx-0 mx-4">
            {
                user.map(aUser => <UsersCard key={user.id} users={aUser}></UsersCard>)
            }
            </div>
            </section>
        </div>
    );
};

export default Landing;