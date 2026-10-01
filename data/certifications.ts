// ponytail: simple typed schema storing credential details, badge assets, and skills; zero external DB or API overhead
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  image: string;
  credentialUrl?: string;
  skills: string[];
  description: string;
  featured?: boolean;
}

export const certifications: Certification[] = [
  {
    id: "postman-api-student-expert",
    name: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    issueDate: "2025",
    image: "/postman-certification.png",
    credentialUrl: "https://badgr.com/",
    skills: ["REST APIs", "API Testing", "HTTP Requests", "Test Automation"],
    description:
      "Demonstrated proficiency in foundational API concepts, sending HTTP requests, scripting automated tests, passing variables between requests, and consuming RESTful services with Postman.",
    featured: true,
  },
];
