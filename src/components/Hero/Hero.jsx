import React from "react";
import icon_arrow_down from "../../assets/images/icon-arrow-down.svg";

const Hero = ({goToRef}) => {
	const SCREEN_WIDTH = window.innerWidth;
	const isMobile = SCREEN_WIDTH < 640;

	return (
		<section className={`${isMobile ? "bg-mobile-header" : "bg-desktop-header"} bg-cover bg-bottom bg-no-repeat w-full h-[525px] md:h-screen md:max-h-[768px] pt-18 md:pt-0 md:pb-28 grid place-items-center`}>
			<div className="flex flex-col gap-10 md:gap-14 items-center">
				<h1 className="text-[2.5rem] md:text-[3rem] text-white tracking-widest font-fraunces font-[900] text-center">
					WE ARE CREATIVES
				</h1>
				<button onClick={() => goToRef()}>
					<img src={icon_arrow_down} alt="arrow down button" />
				</button>
			</div>
		</section>
	);
};

export default Hero;
