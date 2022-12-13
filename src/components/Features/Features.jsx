import React from "react";
import featuresData from "../../constants/features";

const SCREEN_WIDTH = window.innerWidth;
const isMobile = SCREEN_WIDTH < 640;

const Feature = ({ feature, isReversed }) => {

	return (
		<div className={`md:flex ${isReversed && "md:flex-row-reverse"}`}>
			<div className="md:basis-1/2">
				<img src={isMobile ? feature.image_mobile : feature.image_desktop} alt="feature image" />
			</div>
			<div className="md:basis-1/2 flex flex-col md:justify-center gap-7 py-16 px-6 md:px-24 text-center md:text-left">
				<h2 className="text-3xl md:text-[2.5rem] md:leading-snug md:pr-24 font-fraunces font-[900] text-very-dark-desaturated-blue">
					{feature.title}
				</h2>
				<p className="font-barlow text-very-dark-grayish-blue text-[18px] md:pr-20">
					{feature.description}
				</p>
				<a 
					className={`self-center md:self-start w-max font-fraunces font-[700] hover:font[900] tracking-widest relative z-[1] group`}
					href="#"
				>
					<span className={`${feature.bgcolor} opacity-30 group-hover:opacity-100 absolute w-[110%] h-[10px] rounded-lg bottom-0 left-1/2 -translate-x-1/2 transition-opacity`}></span>
					<span className="relative">LEARN MORE</span>
				</a>
			</div>
		</div>
	);
};

const Features = ({refValue}) => {
	return (
		<section ref={refValue}>
			{featuresData.map((feature, index) => (
				<Feature 
					key={index} 
					feature={feature} 
					isReversed={!isMobile && index === 0}
				/>
			))}
		</section>
	);
};

export default Features;
