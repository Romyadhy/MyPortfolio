export interface Certification {
    name: string;
    issuer: string;
    date: string;
    credentialUrl?: string;
    description?: string;
}

export const certifications: Certification[] = [
    {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "Jan 2025",
        credentialUrl: "https://aws.amazon.com/certification/",
        description:
            "Foundational understanding of AWS Cloud concepts, services, and terminology.",
    },
    {
        name: "Google IT Support Professional",
        issuer: "Google via Coursera",
        date: "Mar 2024",
        credentialUrl: "https://coursera.org/",
        description:
            "Comprehensive IT support skills including troubleshooting, customer service, and security.",
    },
    {
        name: "Meta Front-End Developer",
        issuer: "Meta via Coursera",
        date: "Jun 2024",
        credentialUrl: "https://coursera.org/",
        description:
            "Professional certificate covering React, JavaScript, HTML, CSS, and front-end development best practices.",
    },
];
