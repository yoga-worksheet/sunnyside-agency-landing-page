import React, { useRef } from "react";
import {
	Nav,
	Hero,
	Features,
	Services,
	Testimonials,
	Gallery,
	Footer,
} from "./components";

const App = () => {

  const ref = useRef(null);

  const goToRef = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

	return (
		<>
			<Nav />
			<main className="w-full">
				<Hero goToRef={goToRef} />
				<Features refValue={ref} />
				<Services />
				<Testimonials />
				<Gallery />
			</main>
			<Footer />
		</>
	);
};

export default App;
