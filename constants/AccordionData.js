import imageOne from "../public/accordion-imae-one.webp"
import imageTwo from "../public/accordion-imae-two.webp"
import imageThree from "../public/accordion-imae-three.webp"
import imageFour from "../public/accordion-imae-four.webp"


export const ACCORDION_DATA = [
    {
        heading: "Automate any workflow",
        description: "Optimize your process with simple and secured CI/CD.",
        image: imageOne,
        anchorTag: "Discover GitHub Actions",
        inverse: "true",
    },
    {
        heading: "Get up and running in seconds",
        description: "Start building instantly with a comprehensive dev environment in the cloud.",
        image: imageTwo,
        anchorTag: "Check out Github Codespaces",
        inverse: "false",
    },
    {
        heading: "Build on the go",
        description: "Manage projects and chat with GitHub Copilot from anywhere.",
        image: imageThree,
        anchorTag: "Download GitHub Mobile",
        inverse: "false",
    },
    {
        heading: "Integrate the tools you love",
        description: "Sync with 17,000+ integrations and a growing library of Copilot Extensions.",
        image: imageFour,
        anchorTag: "Visit GitHub Marketplace",
        inverse: "false",
    }
]