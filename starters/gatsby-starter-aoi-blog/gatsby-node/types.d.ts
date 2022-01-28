export type Author = {
  name: string;
  description: string;
  website?: string;
  socials: Array<{
    type: string;
    value: string;
  }>;
};
