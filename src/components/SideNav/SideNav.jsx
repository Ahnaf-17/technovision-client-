import { Link } from "react-router-dom";
import DashBoardPage from "../../Pages/Dashboard/DashBoardPage";
import { AiOutlineMenuUnfold } from "react-icons/ai";


const SideNav = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-ghost text-2xl drawer-button lg:hidden items-center text-left my-4"><AiOutlineMenuUnfold></AiOutlineMenuUnfold></label>
                <DashBoardPage></DashBoardPage>
                

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-cyan-800 text-base-content">
                    {/* Sidebar content here */}
                    <Link to='/'>
                    <li><a className="text-white font-bold text-xl">Home</a></li>
                    </Link>
                    {/* <li><a>Sidebar Item 2</a></li> */}
                </ul>

            </div>
        </div>
    );
};

export default SideNav;