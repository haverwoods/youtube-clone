import React from "react";
import { FaRegLightbulb, FaRegNewspaper } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";
import { IoMdHome, IoMdMusicalNotes, IoMdTrendingUp } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

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
      icon: <IoMdHome className="h-5 w-4" />,
      group: "quick-links",
    },
    {
      route: "/Repairrequest",
      name: "shorts",
      icon: <SiYoutubeshorts className="h-5 w-4" />,
      group: "quick-links",
    },
    {
      route: "/Order",
      name: "subscription",
      icon: <MdSubscriptions className="h-5 w-4" />,
      group: "quick-links",
    },
    {
      route: "/home",
      name: "trending",
      icon: <IoMdTrendingUp className="h-5 w-4" />,
      group: "topics",
    },
    {
      route: "/Repairrequest",
      name: "music",
      icon: <IoMdMusicalNotes className="h-5 w-4" />,
      group: "topics",
    },
    {
      route: "/Order",
      name: "sports",
      icon: <GiTrophy className="h-5 w-4" />,
      group: "topics",
    },
    {
      route: "/home",
      name: "gaming",
      icon: <IoGameController className="h-5 w-4" />,
      group: "topics",
    },
    {
      route: "/Repairrequest",
      name: "learning",
      icon: <FaRegLightbulb className="h-5 w-4" />,
      group: "topics",
    },
    {
      route: "/Order",
      name: "news",
      icon: <FaRegNewspaper className="h-5 w-4" />,
      group: "topics",
    },
  ];

  return (
    <div className="fixed h-screen w-48  pb-10 mt-7 color: bg-stone-950">
      <div className=" mt-7 ml-3 left-0 m-0 flex flex-col gap-5 rounded-lg ">
        {nav
          ?.filter((nv) => nv.group === "quick-links")
          .map((nv) => (
            <span
              onClick={() => navigateRoute(nv.route)}
              className="item-center  gap-1 flex  hover:bg-gray-700  text-white  rounded-lg px-2 cursor-pointer"
            >
              {nv.icon}
              {nv.name}
            </span>
          ))}
      </div>
      <div className=" mt-12 ml-3 left-0 m-0 flex flex-col gap-5 rounded-lg ">
        <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700"/>
        {nav
        ?.filter((nv) => nv.group === 'topics')
        .map((nv)=> (
          <span
           onClick={()=> navigateRoute(nv.route)}
            className="item-center  gap-1 flex  hover:bg-gray-700  text-white  rounded-lg px-2 cursor-pointer"
           >
              {nv.icon}
              {nv.name}
           </span>
        ) )
        }
      </div>
    </div>
  );
};
export default Sidebar;
