export type SocialLink = {
  label: string;
  href: string;
};

export const links = {
  email: "grr2908@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/Rakesh2908" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rakesh-garlapati-155904232/" },
    { label: "LeetCode", href: "https://leetcode.com/Usurper_29/" },
    { label: "Codeforces", href: "https://codeforces.com/profile/grrsm2908" },
  ] satisfies SocialLink[],
};

