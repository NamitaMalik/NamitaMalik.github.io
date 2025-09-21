import { BlogHero } from "@/components/BlogHero";
import { BlogCard } from "@/components/BlogCard";
import { Code2, Zap, Database, Globe, Layers, Settings } from "lucide-react";

const Index = () => {
  const blogData = [
    {
      category: "Angular",
      icon: <Layers className="h-6 w-6" />,
      description: "Modern Angular development patterns, best practices, and advanced techniques.",
      posts: [
        { title: "Conditionally Loading modules in Angular", url: "/loading-modules-conditionally-in-angular/", category: "Angular(2+)" },
        { title: "Lazy Loading with Angular2 Routing", url: "/lazy-loading-with-angular2-routing/", category: "Angular(2+)" },
        { title: "Realtime Update in Angular2", url: "/realtime-update-in-angular2/", category: "Angular(2+)" },
        { title: "Fetching Data in Angular2", url: "/fetching-data-in-angular2/", category: "Angular(2+)" },
        { title: "ViewChild in Angular2", url: "/viewchild-in-angular2/", category: "Angular(2+)" },
        { title: "Services In Angular2", url: "/services-in-angular2/", category: "Angular(2+)" },
        { title: "NgRepeat vs ngFor", url: "/ngrepeat-vs-ngfor/", category: "Angular(2+)" }
      ]
    },
    {
      category: "RxJS",
      icon: <Zap className="h-6 w-6" />,
      description: "Reactive programming with RxJS - operators, patterns, and real-world applications.",
      posts: [
        { title: "skipWhile vs filter in RxJS", url: "/skipwhile-vs-filter-in-rxjs/", category: "RxJS" },
        { title: "throttleTime vs debounceTime", url: "/throttletime-vs-debouncetime-in-rxjs/", category: "RxJS" },
        { title: "Map vs FlatMap", url: "/map-vs-flatmap/", category: "RxJS" }
      ]
    },
    {
      category: "JavaScript (ES6+)",
      icon: <Globe className="h-6 w-6" />,
      description: "Modern JavaScript features, ES6+ syntax, and functional programming concepts.",
      posts: [
        { title: "Spread & Rest Operator in ES6", url: "/spread-and-rest-operator-in-es6/", category: "ECMA6" },
        { title: "for..of loop in ES6", url: "/for-of-in-ecma6/", category: "ECMA6" }
      ]
    },
    {
      category: "JavaScript Fundamentals",
      icon: <Code2 className="h-6 w-6" />,
      description: "Core JavaScript concepts, prototypes, inheritance, and fundamental patterns.",
      posts: [
        { title: "Prototype in Javascript", url: "/prototype-in-javascript/", category: "JavaScript" },
        { title: "Inheritance in JavaScript", url: "/inheritance-in-javascript/", category: "JavaScript" },
        { title: "JavaScript Inheritance Revisited", url: "/javascript-inheritance-revisited/", category: "JavaScript" },
        { title: "2 Way Data Binding in Plain Vanilla JavaScript", url: "/2-way-data-binding-in-plain-vanilla-javascript/", category: "JavaScript" },
        { title: "Hoisting in JavaScript", url: "/hoisting/", category: "JavaScript" }
      ]
    },
    {
      category: "Data Structures",
      icon: <Database className="h-6 w-6" />,
      description: "Implementation of fundamental data structures and algorithms in JavaScript.",
      posts: [
        { title: "Linked List in Javascript", url: "/linked-list-in-javascript/", category: "Data Structures" }
      ]
    },
    {
      category: "AngularJS (Legacy)",
      icon: <Settings className="h-6 w-6" />,
      description: "AngularJS 1.x patterns, testing strategies, and migration insights.",
      posts: [
        { title: "Editing JavaScript Object using AngularJS", url: "/editing-javascript-object-using-angularjs/", category: "AngularJS" },
        { title: "E2E Testing with Protractor", url: "/e2e-testing-with-protractor/", category: "AngularJS" },
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
