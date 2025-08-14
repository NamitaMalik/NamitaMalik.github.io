import { BlogHero } from "@/components/BlogHero";
import { BlogCard } from "@/components/BlogCard";
import { Code2, Zap, Database, Globe, Layers, Settings } from "lucide-react";

const Index = () => {
  const blogData = [
    {
      category: "Angular(2+)",
      icon: <Layers className="h-6 w-6" />,
      description: "Modern Angular development patterns, best practices, and advanced techniques.",
      posts: [
        { title: "Conditionally Loading modules in Angular", url: "/loading-modules-conditionally-in-angular/", category: "Angular(2+)" },
        { title: "Lazy Loading with Angular2 Routing", url: "https://namitamalik.github.io/Lazy-Loading-with-Angular2-Routing/", category: "Angular(2+)" },
        { title: "Realtime Update in Angular2", url: "https://namitamalik.github.io/Realtime-Update-in-Angular2/", category: "Angular(2+)" },
        { title: "Fetching Data in Angular2", url: "https://namitamalik.github.io/Fetching-Data-in-Angular2/", category: "Angular(2+)" },
        { title: "ViewChild in Angular2", url: "https://namitamalik.github.io/ViewChild-in-Angular2/", category: "Angular(2+)" },
        { title: "Services In Angular2", url: "https://namitamalik.github.io/Services-in-Angular2/", category: "Angular(2+)" },
        { title: "NgRepeat vs ngFor", url: "https://namitamalik.github.io/NgRepeat-vs-ngFor/", category: "Angular(2+)" }
      ]
    },
    {
      category: "RxJS",
      icon: <Zap className="h-6 w-6" />,
      description: "Reactive programming with RxJS - operators, patterns, and real-world applications.",
      posts: [
        { title: "skipWhile vs filter in RxJS", url: "https://namitamalik.github.io/skipWhile-vs-filter-in-RxJS/", category: "RxJS" },
        { title: "throttleTime vs debounceTime", url: "https://namitamalik.github.io/throttleTime-vs-debounceTime-in-RxJS/", category: "RxJS" },
        { title: "Map vs FlatMap", url: "https://namitamalik.github.io/Map-vs-FlatMap/", category: "RxJS" }
      ]
    },
    {
      category: "JavaScript (ES6+)",
      icon: <Globe className="h-6 w-6" />,
      description: "Modern JavaScript features, ES6+ syntax, and functional programming concepts.",
      posts: [
        { title: "Spread & Rest Operator in ES6", url: "https://namitamalik.github.io/Spread-and-Rest-Operator-in-ES6/", category: "ECMA6" },
        { title: "for..of loop in ES6", url: "https://namitamalik.github.io/for..of-in-ECMA6/", category: "ECMA6" }
      ]
    },
    {
      category: "JavaScript Fundamentals",
      icon: <Code2 className="h-6 w-6" />,
      description: "Core JavaScript concepts, prototypes, inheritance, and fundamental patterns.",
      posts: [
        { title: "Prototype in Javascript", url: "https://namitamalik.github.io/Prototype-in-JavaScript/", category: "JavaScript" },
        { title: "Inheritance in JavaScript", url: "https://namitamalik.github.io/Inheritance-in-JavaScript/", category: "JavaScript" },
        { title: "JavaScript Inheritance Revisited", url: "https://namitamalik.github.io/JavaScript-Inheritance-Revisited/", category: "JavaScript" },
        { title: "2 Way Data Binding in Plain Vanilla JavaScript", url: "https://namitamalik.github.io/2-way-data-binding-in-Plain-Vanilla-JavaScript/", category: "JavaScript" },
        { title: "Hoisting in JavaScript", url: "https://namitamalik.github.io/Hoisting/", category: "JavaScript" }
      ]
    },
    {
      category: "Data Structures",
      icon: <Database className="h-6 w-6" />,
      description: "Implementation of fundamental data structures and algorithms in JavaScript.",
      posts: [
        { title: "Linked List in Javascript", url: "https://namitamalik.github.io/Linked-list-in-Javascript/", category: "Data Structures" }
      ]
    },
    {
      category: "AngularJS (Legacy)",
      icon: <Settings className="h-6 w-6" />,
      description: "AngularJS 1.x patterns, testing strategies, and migration insights.",
      posts: [
        { title: "Editing JavaScript Object using AngularJS", url: "https://namitamalik.github.io/Editing-JavaScript-Object-using-AngularJS/", category: "AngularJS" },
        { title: "E2E Testing with Protractor", url: "https://namitamalik.github.io/E2E-testing-with-Protractor/", category: "AngularJS" },
        { title: "$routeParams in AngularJS", url: "https://namitamalik.github.io/routeParams-in-AngularJS/", category: "AngularJS" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHero />
      
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
            Blog Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore articles organized by technology and topic. Click on any post to read more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {blogData.map((category, index) => (
            <div
              key={category.category}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-slide-up"
            >
              <BlogCard
                category={category.category}
                posts={category.posts}
                icon={category.icon}
                description={category.description}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
