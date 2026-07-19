export type PostMeta = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
};

export const postMeta: Record<string, PostMeta> = {
  "kindness-firmness-and-the-leaders-we-remember": {
    title: "Kindness, Firmness, and the Leaders We Remember",
    description:
      "Reflections on leadership: how kindness paired with firmness, presence, and accountability shapes teams, careers, and the leaders we never forget.",
    keywords:
      "leadership, kindness, firmness, mentorship, accountability, psychological safety, engineering management",
    image: "https://namitamalik.github.io/kindness-firmness-leadership.png",
  },
  "ai-solved-execution-coordination-is-the-next-bottleneck": {
    title: "AI Solved Execution. Coordination Is the Next Bottleneck.",
    description:
      "AI is rapidly solving software execution, but coordination — the real bottleneck in enterprise engineering — still runs on meetings, Jira, and human memory. Why the next frontier is AI orchestration.",
    keywords:
      "AI orchestration, software delivery, coordination, enterprise engineering, execution, agentic AI, developer productivity",
  },
  "ai-killed-coding-not-software-engineering": {
    title: "AI Killed Coding, Not Software Engineering",
    description:
      "Why AI-generated code raises the bar for software engineering — judgment, architecture, and ownership matter more than ever.",
    keywords: "AI, software engineering, coding, architecture, developer productivity",
  },
  "understand-the-layers-before-you-add-them": {
    title: "Understand the Layers Before You Add Them",
    description:
      "A practical take on software architecture: understand existing layers and their purpose before introducing new abstractions.",
    keywords: "software architecture, layers, abstraction, design",
  },
};

export const defaultMeta: PostMeta = {
  title: "Namita Malik - Developer Blog",
  description:
    "Learn. Think. Code. Share. - A technical blog covering Angular, JavaScript, RxJS and web development.",
};
