export type Partner = {
  id: string;
  name: string;
};

export const partners = {
  trustedByHeadline: "Trusted by independent labs and compounding pharmacies",
  list: [
    { id: "rxplus-pharmacy", name: "RxPlus Pharmacy" },
    { id: "clearmed-compounding", name: "ClearMed Compounding" },
    { id: "summit-health-labs", name: "Summit Health Labs" },
    { id: "purelife-analytics", name: "PureLife Analytics" },
    { id: "novabio-testing", name: "NovaBio Testing" },
    { id: "crestpath-labs", name: "CrestPath Labs" },
  ] satisfies Partner[],
} as const;

