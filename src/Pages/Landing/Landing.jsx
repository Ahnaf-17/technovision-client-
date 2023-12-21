import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import UsersCard from "./Users/UsersCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Landing = () => {
    const user = useLoaderData();
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <section>
                <h3 className="text-center items-center text-white text-3xl font-bold my-20" data-aos="fade-up"
     data-aos-duration="2000">People Who Use</h3>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 my-10 lg:mx-0 mx-4" data-aos="fade-up"
     data-aos-duration="2000">
            {
                user.map(aUser => <UsersCard key={user.id} users={aUser}></UsersCard>)
            }
            </div>
            </section>
        </div>
    );
};

export default Landing;