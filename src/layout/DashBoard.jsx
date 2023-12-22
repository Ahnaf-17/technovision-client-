import SideNav from "../components/SideNav/SideNav";

const DashBoard = () => {
    return (
        <div className="container mx-auto ">
      <div className="lg:flex">
        <SideNav></SideNav>
        {/* Add your main content here */}
        <div className="flex-1 px-3 py-2">
          {/* Your main content goes here */}
          {/* <DashboardContent/> */}
        </div>
      </div>
    </div>
    );
};

export default DashBoard;