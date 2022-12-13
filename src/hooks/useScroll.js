import { useState, useEffect } from "react";

const useScroll = () => {
	const [hideNavbar, setHideNavbar] = useState(false);

	useEffect(() => {
		let lastPosition = window.pageYOffset;
		window.onscroll = () => {
			let currentPosition = window.pageYOffset;
			if (lastPosition > currentPosition) {
				setHideNavbar(false);
			} else {
				setHideNavbar(true);
			}
			lastPosition = currentPosition;
		};
	}, []);

	return hideNavbar;
};

export default useScroll;