import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Loader2, User, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import SocialShare from "@/components/SocialShare";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  featured_image_url: string | null;
  category: string | null;
  author_name: string | null;
  published_at: string | null;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, featured_image_url, category, author_name, published_at, created_at")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [...new Set(posts.map((p) => p.category).filter(Boolean))];
  
  const filteredPosts = selectedCategory
    ? posts.filter((p) => p.category === selectedCategory)
    : posts;

  const getPostUrl = (slug: string) => `${window.location.origin}/blog/${slug}`;

  return (
    <Layout>
      <PageHeader
        label="Our Blog"
        title="Insights & Perspectives"
        description="Stay informed with our latest articles on African markets, governance, policy analysis, and development trends."
      />

      <section className="section-padding bg-gradient-to-b from-burgundy-light/30 to-background">
        <div className="container-wide">
          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Posts
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category as string)}
                >
                  {category}
                </Button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-foreground mb-2">No Blog Posts Yet</h3>
              <p className="text-muted-foreground">
                Check back soon for our latest articles and insights.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20 overflow-hidden flex flex-col">
                  {post.featured_image_url && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.featured_image_url} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      {post.category && (
                        <Badge variant="secondary">{post.category}</Badge>
                      )}
                      <SocialShare 
                        title={post.title} 
                        url={getPostUrl(post.slug)} 
                        description={post.excerpt || undefined}
                      />
                    </div>
                    <CardTitle className="text-lg font-display group-hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    {post.excerpt && (
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        {post.author_name && (
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author_name}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {format(new Date(post.published_at || post.created_at), "MMM d, yyyy")}
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild className="text-primary p-0 h-auto hover:bg-transparent">
                      <Link to={`/blog/${post.slug}`} className="flex items-center gap-1">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent to-navy">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Have Questions About Our Insights?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can support your organization with tailored research and advisory.
          </p>
          <Button variant="heroOutline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-navy">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
