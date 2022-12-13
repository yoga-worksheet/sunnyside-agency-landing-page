import image_transform_mobile from "../assets/images/mobile/image-transform.jpg";
import image_stand_out_mobile from "../assets/images/mobile/image-stand-out.jpg";

import image_transform_desktop from "../assets/images/desktop/image-transform.jpg";
import image_stand_out_desktop from "../assets/images/desktop/image-stand-out.jpg";

const featuresData = [
	{
		title: "Transform your brand",
		description: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compeling visuals that do most of the marketing for you.",
		image_mobile: image_transform_mobile,
		image_desktop: image_transform_desktop,
        bgcolor: "bg-theme-yellow",
	},
	{
		title: "Stand out to the right audience",
		description: `Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.`,
		image_mobile: image_stand_out_mobile,
		image_desktop: image_stand_out_desktop,
        bgcolor: "bg-soft-red",
	},
];

export default featuresData;