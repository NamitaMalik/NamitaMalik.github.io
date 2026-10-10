import postMetaJson from "./postMeta.json";

export type PostMeta = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
};

export const postMeta: Record<string, PostMeta> = postMetaJson;

export const defaultMeta: PostMeta = {
  title: "Namita Malik - Developer Blog",
  description:
    "Learn. Think. Engineer. Share. - A technical blog covering Angular, JavaScript, RxJS and web development.",
};
