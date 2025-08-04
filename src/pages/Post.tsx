import { useParams } from "react-router-dom";
import type { ComponentType } from "react";

// Tell TS that each MDX module exports a React component as default
const posts = import.meta.glob("../posts/*.mdx", {
    eager: true,
}) as Record<string, { default: ComponentType }>;

export default function Post() {
    const { slug } = useParams();
    const path = `../posts/${slug}.mdx`;
    const post = posts[path];

    if (!post) {
        return <div>Post not found</div>;
    }

    const Component = post.default;
    return <Component />;
}
