export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  role: string;
  duration: string;
  problem: string;
  solution: string;
  process: {
    title: string;
    description: string;
    image?: string;
  }[];
  results: string[];
  tags?: string[];
  prototypeUrl?: string;
  figmaUrl?: string;
  metrics?: {
    label: string;
    before: number;
    after: number;
  }[];
  comparison?: {
    before: string;
    after: string;
    description: string;
  };
  individualPosts?: string[];
  brainstormingImages?: string[];
  understandingUsersImages?: string[];
  learnings: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}
