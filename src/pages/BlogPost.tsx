import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Loader2, User, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import SocialShare from "@/components/SocialShare";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image_url: string | null;
  category: string | null;
  author_name: string | null;
  published_at: string | null;
  created_at: string;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  const fetchPost = async (postSlug: string) => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", postSlug)
        .eq("published", true)
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          setNotFound(true);
        } else {
          throw error;
        }
      } else {
        setPost(data);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPostUrl = () => `${window.location.origin}/blog/${slug}`;

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (notFound || !post) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl font-display font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-burgundy-light via-burgundy-light/50 to-background pt-32 pb-16">
        <div className="container-wide">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              {post.category && (
                <Badge variant="secondary" className="text-sm">{post.category}</Badge>
              )}
              <SocialShare 
                title={post.title} 
                url={getPostUrl()} 
                description={post.excerpt || undefined}
              />
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
            )}
            
            <div className="flex items-center gap-6 text-muted-foreground">
              {post.author_name && (
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author_name}
                </span>
              )}
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {format(new Date(post.published_at || post.created_at), "MMMM d, yyyy")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featured_image_url && (
        <section className="container-wide -mt-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <img 
              src={post.featured_image_url} 
              alt={post.title}
              className="w-full rounded-lg shadow-lg aspect-video object-cover"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <article className="max-w-4xl mx-auto prose prose-lg prose-headings:font-display prose-headings:font-bold prose-a:text-primary">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }} 
              className="whitespace-pre-wrap"
            />
          </article>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12 border-t">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <p className="text-muted-foreground">Share this article:</p>
            <SocialShare 
              title={post.title} 
              url={getPostUrl()} 
              description={post.excerpt || undefined}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-accent to-navy">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Explore More Insights
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Discover more articles and analysis from our team of experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroOutline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-navy">
              <Link to="/blog">View All Posts</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-navy">
              <Link to="/insights">View Reports</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPostPage;
