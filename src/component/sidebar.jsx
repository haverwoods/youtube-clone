import React from "react";
import { FaBook, FaShoppingCart } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import { IoIosSettings, IoMdHome } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdHomeRepairService } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const navigateRoute = (route) => {
    navigate(route);
  };

  const nav = [
    {
      route: "/home",
      name: "home",
      icon:<IoMdHome className="h-5 w-4" />,
        group:"quick-links",
    },
    {
      route: "/Repairrequest",
      name: "shorts",
      icon:<MdHomeRepairService className="h-5 w-4" />
    },
    {
      route: "/Order",
      name: "subscription",
      icon:<FaShoppingCart  className="h-5 w-4" />
    },
    {
        route: "/home",
        name: "trending",
        icon:<IoMdHome className="h-5 w-4" />
  
      },
      {
        route: "/Repairrequest",
        name: "music",
        icon:<MdHomeRepairService className="h-5 w-4" />
      },
      {
        route: "/Order",
        name: "sports",
        icon:<FaShoppingCart  className="h-5 w-4" />
      },
      {
        route: "/home",
        name: "gaming",
        icon:<IoMdHome className="h-5 w-4" />
  
      },
      {
        route: "/Repairrequest",
        name: "learning",
        icon:<MdHomeRepairService className="h-5 w-4" />
      },
      {
        route: "/Order",
        name: "news",
        icon:<FaShoppingCart  className="h-5 w-4" />
      },

  ];

  return (
    <div className="fixed h-screen w-48  pb-10 color: bg-stone-950">
      
        <div className=" mt-7 ml-3 left-0 m-0 flex flex-col gap-5 rounded-lg ">
          {nav?.map(
            (nv) => (
              <span
                onClick={() => navigateRoute(nv.route)}
                className="item-center  gap-1 flex  hover:bg-gray-700  text-white  rounded-lg px-2 cursor-pointer"
              >
                {nv.icon}
                {nv.name}
              </span>
            )
           
          )}
        </div>
    </div>
  );
};
export default Sidebar;
