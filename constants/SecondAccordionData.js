import imageOne from "../public/second-accordion-image-one.webp"
import imageTwo from "../public/second-accordion-image-two.webp"
import imageThree from "../public/second-accordion-image-three.webp"
import imageFour from "../public/second-accordion-image-four.webp"


export const SECOND_ACCORDION_DATA = [
    {
        heading: "Keep track of your tasks",
        description: "Create issues and manage projects with tools that adapt to your code.",
        image: imageOne,
        anchorTag: "Explore GitHub Issues",
        inverse: "true",
    },
    {
        heading: "Share ideas and ask questions",
        description: "Create space for open-ended conversations alongside your project.",
        image: imageTwo,
        anchorTag: "Discover Github Discussions",
        inverse: "false",
    },
    {
        heading: "Review code changes together",
        description: "Create review processes that improve code quality and fit neatly into your workflow.",
        image: imageThree,
        anchorTag: "Learn about code review",
        inverse: "false",
    },
    {
        heading: "Fund open source projects",
        description: "Become an open source partner and support the tools and libraries that power your work.",
        image: imageFour,
        anchorTag: "Dive into GitHub Sponsors",
        inverse: "false",
    }
]