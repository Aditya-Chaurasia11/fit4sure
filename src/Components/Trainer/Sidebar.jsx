import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import sidebarimg from "../../images/Frame 12.png";

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: (
      <svg
        width="18"
        height="19"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0L20 7.27273V21.8182H13.75V13.3333H6.25V21.8182H0V7.27273L10 0Z"
          fill="white"
        />
      </svg>
    ),
    to: "/trainer/dashboard",
    section: "dashboard",
  },
  {
    display: "Clients",
    icon: (
      <svg
        width="18"
        height="19"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C12.9283 0 13.8185 0.488275 14.4749 1.35741C15.1313 2.22654 15.5 3.40534 15.5 4.63448C15.5 5.86362 15.1313 7.04242 14.4749 7.91156C13.8185 8.78069 12.9283 9.26897 12 9.26897C11.0717 9.26897 10.1815 8.78069 9.52513 7.91156C8.86875 7.04242 8.5 5.86362 8.5 4.63448C8.5 3.40534 8.86875 2.22654 9.52513 1.35741C10.1815 0.488275 11.0717 0 12 0ZM5 3.31034C5.56 3.31034 6.08 3.50897 6.53 3.86648C6.38 5.76 6.8 7.64028 7.66 9.11007C7.16 10.3812 6.16 11.2552 5 11.2552C4.20435 11.2552 3.44129 10.8367 2.87868 10.0917C2.31607 9.34671 2 8.33631 2 7.28276C2 6.22921 2.31607 5.21881 2.87868 4.47384C3.44129 3.72887 4.20435 3.31034 5 3.31034ZM19 3.31034C19.7956 3.31034 20.5587 3.72887 21.1213 4.47384C21.6839 5.21881 22 6.22921 22 7.28276C22 8.33631 21.6839 9.34671 21.1213 10.0917C20.5587 10.8367 19.7956 11.2552 19 11.2552C17.84 11.2552 16.84 10.3812 16.34 9.11007C17.2 7.64028 17.62 5.76 17.47 3.86648C17.92 3.50897 18.44 3.31034 19 3.31034ZM5.5 16.8828C5.5 14.1418 8.41 11.9172 12 11.9172C15.59 11.9172 18.5 14.1418 18.5 16.8828V19.2H5.5V16.8828ZM0 19.2V17.2138C0 15.3732 1.89 13.824 4.45 13.3738C3.86 14.2742 3.5 15.5189 3.5 16.8828V19.2H0ZM24 19.2H20.5V16.8828C20.5 15.5189 20.14 14.2742 19.55 13.3738C22.11 13.824 24 15.3732 24 17.2138V19.2Z"
          fill="white"
        />
      </svg>
    ),
    to: "/trainer/client",
    section: "client",
  },
  {
    display: "Community",
    icon: (
      <svg
        width="18"
        height="19"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.19 12.19L4 16L7.81 7.81L16 4M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 8.9C9.70826 8.9 9.42847 9.01589 9.22218 9.22218C9.01589 9.42847 8.9 9.70826 8.9 10C8.9 10.2917 9.01589 10.5715 9.22218 10.7778C9.42847 10.9841 9.70826 11.1 10 11.1C10.2917 11.1 10.5715 10.9841 10.7778 10.7778C10.9841 10.5715 11.1 10.2917 11.1 10C11.1 9.70826 10.9841 9.42847 10.7778 9.22218C10.5715 9.01589 10.2917 8.9 10 8.9Z"
          fill="white"
        />
      </svg>
    ),
    to: "/trainer/community",
    section: "community",
  },
  {
    display: "Reviews",
    icon: (
      <svg
        width="18"
        height="19"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.7778 0H2.22222C1 0 0 1 0 2.22222V17.7778C0 19 1 20 2.22222 20H17.7778C19 20 20 19 20 17.7778V2.22222C20 1 19 0 17.7778 0ZM6.66667 15.5556H4.44444V7.77778H6.66667V15.5556ZM11.1111 15.5556H8.88889V4.44444H11.1111V15.5556ZM15.5556 15.5556H13.3333V11.1111H15.5556V15.5556Z"
          fill="white"
        />
      </svg>
    ),
    to: "/trainer/reviews",
    section: "reviews",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[2];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    console.log(activeItem);
    setActiveIndex(curPath.length === 0 ? -1 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/trainer/home">
          <div
            className={`sidebar__logo_div ${
              activeIndex === -1 ? "activeOfSidebarLago" : ""
            }`}
          >
            <img src={sidebarimg}></img>
            <p>Elvish Bhai</p>
          </div>
        </Link>
      </div>
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          //   style={{
          //     transform: `translateX(-50%) translateY(${
          //       activeIndex * stepHeight
          //     }px)`,
          //   }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "sidebar_active" : ""
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
