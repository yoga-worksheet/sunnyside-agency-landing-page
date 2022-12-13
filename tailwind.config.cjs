/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				barlow: "Barlow, sans-serif",
				fraunces: "Fraunces, serif",
			},
			colors: {
				// Primary
				"soft-red": "hsl(7, 99%, 70%)",
				"theme-yellow": "hsl(51, 100%, 49%)",
				"graphic-design-text": "hsl(167, 40%, 24%)",
				"photography-text": "hsl(198, 62%, 26%)",
				'footer-text': "hsl(168, 34%, 30%)",
				'footer': "hsl(168, 34%, 70%)",
				// Neutral
				"very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
				"very-dark-grayish-blue": "hsl(213, 9%, 39%)",
				"dark-grayish-blue": "hsl(232, 10%, 55%)",
				"grayish-blue": "hsl(210, 4%, 67%)",
			},
			backgroundImage: {
				// Mobile Background
				"mobile-header": "url(/mobile/image-header.jpg)",
				"mobile-photography": "url(/mobile/image-photography.jpg)",
				"mobile-graphic-design":"url(/mobile/image-graphic-design.jpg)",
				// Desktop Background
				"desktop-header": "url(/desktop/image-header.jpg)",
				"desktop-photography": "url(/desktop/image-photography.jpg)",
				"desktop-graphic-design": "url(/desktop/image-graphic-design.jpg)",
			},
		},
	},
	plugins: [],
};
