import { Badge } from "@/components/ui/badge";
import { Code2, BookOpen, Lightbulb, Share2, Github, Twitter, Linkedin } from "lucide-react";

export const BlogHero = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            Developer Blog
          </Badge>
        </div>
        
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Namita Malik
        </h1>
        
        <div className="flex items-center justify-center gap-6 text-xl text-muted-foreground mb-8 font-medium">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span>LEARN</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <span>THINK</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            <span>CODE</span>
          </div>
          <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
          <div className="flex items-center gap-2">
            <Share2 className="h-5 w-5 text-primary" />
            <span>SHARE</span>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          Exploring the world of web development through Angular, JavaScript, RxJS, and modern web technologies. 
          Join me on this journey of continuous learning and knowledge sharing.
        </p>
        
        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://github.com/namitamalik" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
          </a>
          <a 
            href="https://twitter.com/namitamalik" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group"
            aria-label="Twitter Profile"
          >
            <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
          </a>
          <a 
            href="https://linkedin.com/in/namitamalik" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-accent/10 transition-smooth group"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
          </a>
        </div>
      </div>
    </section>
  );
};