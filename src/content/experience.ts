export type ExperienceItem = {
  company: string;
  companyUrl?: string;
  title: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  skills: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Angel One",
    companyUrl: "https://www.linkedin.com/company/angel-broking/",
    title: "Software Development Engineer (SDE-1)",
    location: "Bengaluru, India",
    start: "Jun 2025",
    end: "Present",
    highlights: [
      "Building backend services and workflow automation across high-volume user journeys, with an emphasis on correctness, latency, and operational clarity.",
    ],
    skills: ["Go", "APIs", "Reliability", "Observability"],
  },
  {
    company: "Angel One",
    companyUrl: "https://www.linkedin.com/company/angel-broking/",
    title: "Software Development Engineer Intern",
    location: "Bengaluru, India",
    start: "Dec 2024",
    end: "Jun 2025",
    highlights: [
      "Built a Golang Lead Management API to identify KYC drop-offs by matching user attributes with DS datasets, flagging ~39% of leads for targeted follow-ups.",
      "Contributed to selfie validation using object detection and computer vision, integrated into the KYC flow via Camunda workflows to improve verification accuracy.",
      "Built an e-sign service from scratch and integrated it with HyperVerge for document generation and digital signing—the final step in the KYC process.",
      "Designed a template-ID based communications system to send 100+ email/SMS notification types, replacing the legacy template engine via CNS integration.",
    ],
    skills: ["Go", "Gin", "Computer Vision", "System Design"],
  },
];

