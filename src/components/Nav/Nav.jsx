import React, { useState } from "react";
import useScroll from "../../hooks/useScroll";

import logo from "../../assets/images/logo.svg";
import icon_menu from "../../assets/images/icon-hamburger.svg";

const MobileNav = ({ isActive }) => {
	return (
		<div
			className={`${
				isActive
					? "scale-100"
					: "scale-0 -translate-y-full translate-x-1/2"
			} transition-all duration-500 absolute top-[100%] grid place-items-center bg-white w-[90%] h-max py-8`}
		>
			<span className="absolute -top-[15px] right-0 transition-all duration-500 w-0 h-0 border-t-[40px] border-t-transparent border-r-[40px] border-r-white border-b-[40px] border-b-transparent"></span>
			<ul className="grid gap-5 mb-5 font-barlow text-dark-grayish-blue text-center">
				<li><a href="#">About</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Projects</a></li>
			</ul>
			<button className="block mx-auto bg-theme-yellow font-fraunces rounded-[2rem] py-3 px-7">
				Contact
			</button>
		</div>
	);
};

const DesktopNav = () => {
	return (
		<div className="flex items-center gap-5">
			<ul className="flex gap-5 font-barlow text-white text-center">
				<li><a href="#">About</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Projects</a></li>
			</ul>
			<button className="bg-white text-very-dark-desaturated-blue hover:bg-[#97dcff] hover:text-white font-fraunces rounded-[2rem] py-3 px-7 duration-200">
				Contact
			</button>
		</div>
	);
};

const Nav = () => {
	const SCREEN_WIDTH = window.innerWidth;
	const isMobile = SCREEN_WIDTH < 640;

	const isScrollingDown = useScroll();
	const [menuDisplayed, setMenuDisplayed] = useState(false);

	return (
		<nav className={`${isScrollingDown ? "-top-full" : "top-0 md:py-5"} w-full bg-[#3CBDFF] fixed flex justify-between md:items-center py-7 px-5 md:px-7 z-10 transition-all duration-300`}>
			<a href="#">
				<img src={logo} alt="logo" />
			</a>

			{isMobile ? (
				<>
					<button onClick={() => setMenuDisplayed((prev) => !prev)}>
						<img
							className="block w-full"
							src={icon_menu}
							alt="hamburger menu"
						/>
					</button>
					<MobileNav isActive={menuDisplayed} />
				</>
			) : <DesktopNav />}
		</nav>
	);
};

export default Nav;
