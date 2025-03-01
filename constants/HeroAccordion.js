import imageTwo from "../public/hero-accordion-second-image.webp"
import imageThreeOne from "../public/erasebg-transformed.webp"
// import imageThreeTwo from "../public/erasebg-transformed-2.webp"
import imageFourOne from "../public/hero-accordion-fourth-mageOne.webp"
// import imageFourTwo from "../public/hero-accordion-fourth-mageTwo.webp"
// import imageFourThree from "../public/hero-accordion-fourth-mageThree.webp"
// import imageFour from "../public/hero-accordion-fourth-imageFour.webp"
import imageFiveOne from "../public/hero-accordion-fifth-imageOne.webp"
// import imageFiveTwo from "../public/hero-accordion-fifth-imageTwo.webp"

const heroAccordion = {
    categories: {
        "Code": {
            id: 1,
            video: "https://github.githubassets.com/assets/code-1_desktop-7ab52aea3358.mp4"
        },
        "Plan": {
            id: 2,
            firstImage: imageTwo
        },
        "Collaborate": {
            id: 3,
            firstImage: imageThreeOne,
            // secondImage: imageThreeTwo
        },
        "Automate": {
            id: 4,
            firstImage: imageFourOne,
            // fourthImage: imageFour,
            // thirdImage: imageFourThree,
            // secondImage: imageFourTwo
        },
        "Secure": {
            id: 5,
            firstImage: imageFiveOne,
            // secondImage: imageFiveTwo
        }
    }
};

export default heroAccordion;