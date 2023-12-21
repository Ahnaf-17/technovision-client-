/* eslint-disable react/prop-types */

const UsersCard = ({users}) => {
    const {type,benefit} = users;
    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-32 card bg-base-100 text-center rounded-box items-center">
                    <div className="text-center">
                    <h2>{type}</h2>
                    <p>{benefit}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersCard;