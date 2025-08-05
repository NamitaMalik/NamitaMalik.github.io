import { useParams, Link } from "react-router-dom";
import type { ComponentType } from "react";
import { ArrowLeft, Github, Twitter, Linkedin, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Tell TS that each MDX module exports a React component as default
const posts = import.meta.glob("../posts/*.mdx", {
    eager: true,
}) as Record<string, { default: ComponentType }>;

export default function Post() {
    const { slug } = useParams();
    const path = `../posts/${slug}.mdx`;
    const post = posts[path];

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
                
                {/* Blog Header */}
                <div className="text-center mb-12 pb-8 border-b border-border/20">
                    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Namita Malik
                    </h1>
                    <p className="text-muted-foreground text-lg mb-6">
                        Web Developer • Angular • JavaScript • RxJS
                    </p>
                    
                    {/* Social Media Icons */}
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
                            href="https://twitter.com/namitamalik" 
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
                
                <article className="prose prose-lg max-w-none 
                    prose-headings:text-foreground prose-headings:font-playfair
                    prose-p:text-foreground prose-p:leading-relaxed
                    prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent
                    prose-code:text-accent prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-muted prose-pre:border prose-pre:border-border
                    prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
                    prose-strong:text-foreground prose-em:text-foreground">
                    <Component />
                </article>
            </div>
        </div>
    );
}
