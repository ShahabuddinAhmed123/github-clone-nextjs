import securityLogo from "../public/security-logo.webp"
import actionsLogo from "../public/actions.webp"
import copilotLogo from "../public/github-copilot.webp"
import codespacesLogo from "../public/codespaces.webp"
import issuesLogo from "../public/issues-logo.webp"
import codeReviewLogo from "../public/code-reviews.webp"
import discussionLogo from "../public/discussion-image.webp"
import codeSearchLogo from "../public/code-search.webp"


export const NAV_DATA = {
        categories: {
            "Product": [
                {
                    logo: copilotLogo,
                    title: "GitHub Copilot",
                    description: "Write better code with AI",
                    inverse: true,
                },
                {
                    logo: securityLogo,
                    title: "Security",
                    description: "Find and fix vulnerabilities",
                    inverse: true,
                },
                {
                    logo: actionsLogo,
                    title: "Actions",
                    description: "Automate any workflow",
                    inverse: true,
                },
                {
                    logo: codespacesLogo,
                    title: "Codespaces",
                    description: "Instant dev environments",
                    inverse: true,
                },
                {
                    logo: issuesLogo,
                    title: "Issues",
                    description: "Plan and track work",
                    inverse: true,
                },
                {
                    logo: codeReviewLogo,
                    title: "Code review",
                    description: "Manage code changes",
                    inverse: true,
                },
                {
                    logo: discussionLogo,
                    title: "Discussions",
                    description: "Collaborate outside of code",
                    inverse: true,
                },
                {
                    logo: codeSearchLogo,
                    title: "Code search",
                    description: "Find more, search less",
                    inverse: true,
                }, 
            ],
          
            "Enterprise": [
              {
                logo: actionsLogo,
                title: "Enterprise platform",
                description: "AI-powered developer platform",
                inverse: true,
              },
              {
                logo: securityLogo,
                title: "Advanced Security",
                description: "Enterprise-grade security features",
                inverse: false,
              },
              {
                logo: copilotLogo,
                title: "GitHub Copilot",
                description: "Enterprise-grade AI features",
                inverse: false,
              },
              {
                logo: discussionLogo,
                title: "Premium Support",
                description: "Enterprise-grade 24/7 support",
                inverse: false,
              }
            ],
        }
}