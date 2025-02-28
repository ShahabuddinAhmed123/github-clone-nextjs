import imageOne from "../public/figma-image.svg"
import imageTwo from "../public/mercedes-image.svg"
import imageThree from "../public/mercado-image.svg"
import imageFour from "../public/accenture-image.svg"
import imageFive from "../public/philips-image.svg"
import imageSix from "../public/buffer-image.svg"
import imageSeven from "../public/telus-image.svg"
import imageEight from "../public/fullstory-image.svg"
import imageNine from "../public/ey-image.svg"
import backgroundOne from "../public/sectionFive-backgroundOne.webp"
import backgroundTwo from "../public/sectionFive-backgroundTwo.webp"
import backgroundThree from "../public/sectionFive-backgroundThree.webp"
import backgroundFour from "../public/sectionFive-backgroundFour.webp"
import backgroundFive from "../public/sectionFive-backgroundFive.webp"
import backgroundSix from "../public/sectionFive-backgroundSix.webp"
import backgroundSeven from "../public/sectionFive-backgroundSeven.webp"
import backgroundEight from "../public/sectionFive-backgroundNine.webp"
import backgroundNine from "../public/sectionFive-backgroundTen.webp"

const accordionData = {
    categories: {
      "By industry": [
        {
          title: "Figma",
          logo: imageOne,
          category: "Technology",
          description: "Figma streamlines development and strengthens security",
          anchorTag: "Read customer story",
          width : 95,
          height: 35,
          backImage: backgroundOne,
        },
        {
          title: "Mercedes-Benz",
          logo: imageTwo,
          category: "Automotive",
          description: "Mercedes-Benz standardizes source code and automates onboarding",
          anchorTag: "Read customer story",
          width : 181,
          height: 48,
          backImage: backgroundTwo,
        },
        {
          title: "Mercado Libre",
          logo: imageThree,
          category: "Financial services",
          description: "Mercado Libre cuts coding time by 50%",
          anchorTag: "Read customer story",
          width : 155,
          height: 40,
          backImage: backgroundThree,
        }
      ],
      "By size": [
        {
          title: "Accenture",
          logo: imageFour,
          category: "Enterprise",
          description: "Accenture customizes GitHub Copilot for its 12,000 developers",
          anchorTag: "Read customer story",
          width : 137,
          height: 36,
          backImage: backgroundFour,
        },
        {
          title: "Phillips",
          logo: imageFive,
          category: "Enterprise",
          description: "Phillips reduces infrastructure costs by 80%",
          anchorTag: "Read customer story",
          width : 140,
          height: 34,
          backImage: backgroundFive,
        },
        {
          title: "Buffer",
          logo: imageSix,
          category: "Teams",
          description: "Buffer enhances collaboration and control with GitHub Team",
          anchorTag: "Read customer story",
          width : 127,
          height: 32,
          backImage: backgroundSix,
        }
      ],
      "By use Case": [
        {
          title: "Telus",
          logo: imageSeven,
          category: "DevSecOps",
          description: "TELUS saves $16.9M with GitHub",
          anchorTag: "Read customer story",
          width : 183,
          height: 36,
          backImage: backgroundSeven,
        },
        {
          title: "FullStory",
          logo: imageEight,
          category: "Automation",
          description: "Fullstory automates DevSecOps at scale with GitHub",
          anchorTag: "Read customer story",
          width : 187,
          height: 36,
          backImage: backgroundEight,
        },
        {
          title: "Ey",
          logo: imageNine,
          category: "DevOps",
          description: "EY leverages GitHub and Microsoft Azure DevOps to outspace the competetion",
          anchorTag: "Read customer story",
          width : 51,
          height: 52,
          backImage: backgroundNine,
        }
      ]
    }
  };
  
  export default accordionData;
  