/* eslint-disable react/prop-types */
import img1 from '../../../assets/banner.jpg'
const UsersCard = ({ users }) => {
    const { type, benefit } = users;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl relative">
                <img src={img1} alt="Shoes" className='w-full h-[124px] absolute opacity-30  rounded-2xl' />
                <div className="card-body z-10">
                    <h2 className="card-title text-2xl font-bold">{type}</h2>
                    <p>{benefit}</p>
                </div>
            </div>
        </div>
    );
};

export default UsersCard;