import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface BlogPost {
  title: string;
  url: string;
  category: string;
}

interface BlogCardProps {
  category: string;
  posts: BlogPost[];
  icon?: React.ReactNode;
  description?: string;
}

export const BlogCard = ({ category, posts, icon, description }: BlogCardProps) => {
  return (
    <Card className="gradient-card shadow-card transition-smooth hover:shadow-elegant hover:scale-[1.02] group">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          {icon && <div className="text-primary">{icon}</div>}
          <CardTitle className="font-playfair text-xl text-primary group-hover:text-accent transition-smooth">
            {category}
          </CardTitle>
        </div>
        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        )}
        <Badge variant="secondary" className="w-fit">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/10 transition-smooth group/link"
          >
            <div className="flex-1">
              <h4 className="font-medium text-sm leading-snug text-foreground group-hover/link:text-primary transition-smooth">
                {post.title}
              </h4>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover/link:text-primary transition-smooth" />
          </a>
        ))}
      </CardContent>
    </Card>
  );
};