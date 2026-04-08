export type Testimonial = {
  id: string;
  company: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export type CompanyHighlight = {
  id: string;
  company: string;
  blurb: string;
};

export const testimonialsContent = {
  eyebrow: "What people are saying",
  headline: "Trusted by startups and the world's leading labs",
  subhead: "Real feedback from lab directors and technicians who left spreadsheets behind.",
  companyHighlights: [
    {
      id: "rxplus",
      company: "RxPlus Pharmacy",
      blurb: "Cut report turnaround time and eliminate status updates with a client portal that just works.",
    },
    {
      id: "summit",
      company: "Summit Health Labs",
      blurb: "Standardize workflows across technicians while keeping audit trails ready for inspection.",
    },
  ] satisfies CompanyHighlight[],
  items: [
    {
      id: "pacific-em",
      company: "Pacific EM Solutions",
      quote:
        "We used to spend an entire Friday afternoon generating monthly EM reports for our 18 pharmacy clients. Now it takes under an hour — and the reports look more professional than anything we produced before.",
      name: "Dr. Sarah Chen",
      role: "Lab Director",
      initials: "SC",
    },
    {
      id: "truetest",
      company: "TrueTest Microbiology",
      quote:
        "The client portal is a game-changer. Our pharmacy clients used to call and email constantly asking for reports. Now they just log in and see everything themselves.",
      name: "Marcus Rodriguez",
      role: "Operations Manager",
      initials: "MR",
    },
    {
      id: "clearpath",
      company: "ClearPath Compounding",
      quote:
        "After the 2023 USP 797 revision, we needed to formalize our EM program fast. BioSure was live in two days and we walked into our next inspection completely confident.",
      name: "Jennifer Park, PharmD",
      role: "Quality Manager",
      initials: "JP",
    },
    {
      id: "midwest-em",
      company: "Midwest EM Labs",
      quote:
        "Chain of custody used to be our biggest failure point. BioSure made tracking and approvals painless — and our audit prep time dropped immediately.",
      name: "Dan Farrelly",
      role: "CTO",
      initials: "DF",
    },
    {
      id: "rx-network",
      company: "Rx Network Partners",
      quote:
        "We turned around reports faster and reduced client follow-ups in the first week. The portal alone replaced hours of status updates.",
      name: "Theo Browne",
      role: "CEO",
      initials: "TB",
    },
    {
      id: "apex-comp",
      company: "Apex Compounding",
      quote:
        "BioSure feels like the first tool built for modern EM labs — fast, clear, and designed around the exact workflows we run every day.",
      name: "Julian Benegas",
      role: "CEO",
      initials: "JB",
    },
  ] satisfies Testimonial[],
} as const;

