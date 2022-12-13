import React from "react";
import testimonialsData from "../../constants/testimonials";

const Testimonial = ({ testimonial }) => {
	return (
		<div className="grid gap-6 text-center">
			<div className="w-[64px] h-[64px] justify-self-center">
				<img
					className="block w-full rounded-full"
					src={testimonial.picture}
					alt={testimonial.name}
				/>
			</div>
			<p className="leading-relaxed font-barlow text-[16px] text-very-dark-grayish-blue">{testimonial.testimony}</p>
			<div className="identity">
				<h3 className="font-fraunces font-[900] text-very-dark-desaturated-blue text-lg">{testimonial.name}</h3>
				<span className="font-barlow text-xs text-grayish-blue">{testimonial.position}</span>
			</div>
		</div>
	);
};

const Testimonials = () => {
	return (
		<section className="px-8 py-12 md:my-20">
			<h2 className="text-md tracking-[4px] font-fraunces font-[900] text-dark-grayish-blue text-center">CLIENT TESTIMONIALS</h2>
			<div className="my-12 md:my-16 grid md:grid-cols-3 md:px-32 gap-20 md:gap-14">
				{testimonialsData.map((testimonial, index) => (
					<Testimonial key={index} testimonial={testimonial} />
				))}
			</div>
		</section>
	);
};

export default Testimonials;
