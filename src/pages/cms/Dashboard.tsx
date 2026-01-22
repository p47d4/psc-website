import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Mail, Users, LogOut, Loader2, AlertTriangle, BookOpen } from "lucide-react";
import logo from "@/assets/logo.png";

const Dashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    reports: 0,
    blogPosts: 0,
    submissions: 0,
    unreadSubmissions: 0,
    users: 0,
  });
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/cms/login");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchStats();
    }
  }, [isAdmin]);

  const fetchStats = async () => {
    try {
      const [reportsRes, blogRes, submissionsRes, usersRes] = await Promise.all([
        supabase.from("insights_reports").select("id", { count: "exact", head: true }),
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
        supabase.from("contact_submissions").select("id, is_read", { count: "exact" }),
        supabase.from("profiles").select("id", { count: "exact", head: true }),
      ]);

      const unread = submissionsRes.data?.filter((s) => !s.is_read).length || 0;

      setStats({
        reports: reportsRes.count || 0,
        blogPosts: blogRes.count || 0,
        submissions: submissionsRes.count || 0,
        unreadSubmissions: unread,
        users: usersRes.count || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoadingStats(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/cms/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You don't have admin privileges to access this area.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Contact an administrator to request access.
            </p>
            <div className="flex gap-2 justify-center">
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
              <Button asChild>
                <Link to="/">Go Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src={logo} alt="PSC" className="h-10 w-auto" />
            </Link>
            <span className="text-xl font-display font-semibold">CMS</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-display font-bold mb-8">Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Published Reports</CardDescription>
              <CardTitle className="text-3xl font-display">
                {loadingStats ? <Loader2 className="h-6 w-6 animate-spin" /> : stats.reports}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FileText className="h-8 w-8 text-primary/50" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Blog Posts</CardDescription>
              <CardTitle className="text-3xl font-display">
                {loadingStats ? <Loader2 className="h-6 w-6 animate-spin" /> : stats.blogPosts}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BookOpen className="h-8 w-8 text-accent/50" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Contact Submissions</CardDescription>
              <CardTitle className="text-3xl font-display">
                {loadingStats ? (
                  <Loader2 className="h-6 w-6 animate-spin" />
                ) : (
                  <>
                    {stats.submissions}
                    {stats.unreadSubmissions > 0 && (
                      <span className="ml-2 text-sm bg-primary text-primary-foreground px-2 py-1 rounded-full">
                        {stats.unreadSubmissions} new
                      </span>
                    )}
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Mail className="h-8 w-8 text-gold/50" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Users</CardDescription>
              <CardTitle className="text-3xl font-display">
                {loadingStats ? <Loader2 className="h-6 w-6 animate-spin" /> : stats.users}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Users className="h-8 w-8 text-navy/50" />
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <h2 className="text-xl font-display font-semibold mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/cms/reports">
            <Card className="hover:border-primary transition-colors cursor-pointer h-full">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Manage Reports</CardTitle>
                <CardDescription>
                  Upload, edit, and publish research reports
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/cms/blog">
            <Card className="hover:border-primary transition-colors cursor-pointer h-full">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-accent mb-2" />
                <CardTitle className="text-lg">Blog Posts</CardTitle>
                <CardDescription>
                  Create and manage blog articles
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/cms/submissions">
            <Card className="hover:border-primary transition-colors cursor-pointer h-full">
              <CardHeader>
                <Mail className="h-8 w-8 text-gold mb-2" />
                <CardTitle className="text-lg">Contact Submissions</CardTitle>
                <CardDescription>
                  View and manage contact form submissions
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/cms/users">
            <Card className="hover:border-primary transition-colors cursor-pointer h-full">
              <CardHeader>
                <Users className="h-8 w-8 text-navy mb-2" />
                <CardTitle className="text-lg">User Management</CardTitle>
                <CardDescription>
                  Manage users and admin access
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
