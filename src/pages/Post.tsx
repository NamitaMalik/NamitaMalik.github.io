import { useParams, Link } from "react-router-dom";
import { useEffect, type ComponentType } from "react";
import { ArrowLeft, Github, Twitter, Linkedin, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { postMeta, defaultMeta } from "@/lib/postMeta";

// Tell TS that each MDX module exports a React component as default
const posts = import.meta.glob("../posts/*.mdx", {
    eager: true,
}) as Record<string, { default: ComponentType }>;

function setMetaTag(attr: "name" | "property", key: string, value: string) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute("content", value);
}

function setCanonical(href: string) {
    let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
}

export default function Post() {
    const { slug } = useParams();
    const path = `../posts/${slug}.mdx`;
    const post = posts[path];

    useEffect(() => {
        const meta = (slug && postMeta[slug]) || defaultMeta;
        const fullTitle = meta.title.includes("Namita Malik")
            ? meta.title
            : `${meta.title} | Namita Malik`;
        document.title = fullTitle;
        setMetaTag("name", "description", meta.description);
        if (meta.keywords) setMetaTag("name", "keywords", meta.keywords);
        setMetaTag("property", "og:title", fullTitle);
        setMetaTag("property", "og:description", meta.description);
        setMetaTag("property", "og:type", "article");
        setMetaTag("property", "og:url", window.location.href);
        if (meta.image) {
            setMetaTag("property", "og:image", meta.image);
            setMetaTag("name", "twitter:image", meta.image);
        }
        setMetaTag("name", "twitter:card", "summary_large_image");
        setMetaTag("name", "twitter:title", fullTitle);
        setMetaTag("name", "twitter:description", meta.description);
        setCanonical(window.location.href);
        return () => {
            document.title = defaultMeta.title;
            setMetaTag("name", "description", defaultMeta.description);
        };
    }, [slug]);


    if (!post) {
        return (
            <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
                    <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
                    <Link to="/">
                        <Button variant="default">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const Component = post.default;
    return (
        <div className="min-h-screen bg-gradient-subtle">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <Link to="/" className="inline-flex items-center text-primary hover:text-accent transition-smooth mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>

                {/* Minimal Author Header */}
                <div className="text-center mb-8 pb-4 border-b border-border/10">
                    <p className="text-muted-foreground text-sm">
                        by <span className="font-medium text-foreground">Namita Malik</span>
                    </p>
                </div>


                <article className="prose prose-lg max-w-none mb-16
  prose-headings:text-foreground prose-headings:font-playfair
  prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:font-bold prose-h1:mb-8 prose-h1:pb-6 prose-h1:border-b prose-h1:border-border/30 prose-h1:text-center
  prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4
  prose-h3:text-xl prose-h3:md:text-2xl prose-h3:font-medium prose-h3:mt-6 prose-h3:mb-3
  prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
  prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent
  prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
  prose-strong:text-foreground prose-em:text-foreground
  prose-ul:my-4 prose-ol:my-4 prose-li:my-1 prose-code:before:content-none prose-code:after:content-none">
                    <Component />
                </article>

                {/* Social Media Icons at Bottom */}
                <div className="text-center pt-8 border-t border-border/20">
                    <p className="text-muted-foreground text-sm mb-4">
                        Connect with me
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <a
                            href="https://github.com/namitamalik"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-accent/10 transition-smooth group"
                            aria-label="GitHub Profile"
                        >
                            <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                        </a>
                        <a
                            href="https://x.com/nm_1304"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-accent/10 transition-smooth group"
                            aria-label="Twitter Profile"
                        >
                            <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                        </a>
                        <a
                            href="https://linkedin.com/in/namitamalik"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-accent/10 transition-smooth group"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                        </a>
                        <button
                            onClick={() => navigator.share?.({ url: window.location.href, title: document.title })}
                            className="p-2 rounded-full hover:bg-accent/10 transition-smooth group"
                            aria-label="Share this post"
                        >
                            <Share2 className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
