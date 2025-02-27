import imageOne from "../public/figma-image.svg"
import imageTwo from "../public/mercedes-image.svg"
import imageThree from "../public/mercado-image.svg"
import imageFour from "../public/accenture-image.svg"
import imageFive from "../public/philips-image.svg"
import imageSix from "../public/buffer-image.svg"
import imageSeven from "../public/telus-image.svg"
import imageEight from "../public/fullstory-image.svg"
import imageNine from "../public/ey-image.svg"

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
          height: 35
        },
        {
          title: "Mercedes-Benz",
          logo: imageTwo,
          category: "Automotive",
          description: "Mercedes-Benz standardizes source code and automates onboarding",
          anchorTag: "Read customer story",
          width : 181,
          height: 48
        },
        {
          title: "Mercado Libre",
          logo: imageThree,
          category: "Financial services",
          description: "Mercado Libre cuts coding time by 50%",
          anchorTag: "Read customer story",
          width : 155,
          height: 40
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
          height: 36
        },
        {
          title: "Phillips",
          logo: imageFive,
          category: "Enterprise",
          description: "Phillips reduces infrastructure costs by 80%",
          anchorTag: "Read customer story",
          width : 140,
          height: 34
        },
        {
          title: "Buffer",
          logo: imageSix,
          category: "Teams",
          description: "Buffer enhances collaboration and control with GitHub Team",
          anchorTag: "Read customer story",
          width : 127,
          height: 32
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
          height: 36
        },
        {
          title: "FullStory",
          logo: imageEight,
          category: "Automation",
          description: "Fullstory automates DevSecOps at scale with GitHub",
          anchorTag: "Read customer story",
          width : 187,
          height: 36
        },
        {
          title: "Ey",
          logo: imageNine,
          category: "DevOps",
          description: "EY leverages GitHub and Microsoft Azure DevOps to outspace the competetion",
          anchorTag: "Read customer story",
          width : 51,
          height: 52
        }
      ]
    }
  };
  
  export default accordionData;
  