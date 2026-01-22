import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Download, Calendar, Loader2 } from "lucide-react";
import { format } from "date-fns";
import SocialShare from "@/components/SocialShare";
interface Report {
  id: string;
  title: string;
  description: string | null;
  file_url: string;
  file_name: string;
  category: string | null;
  published_at: string | null;
  created_at: string;
}

const Insights = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const { data, error } = await supabase
        .from("insights_reports")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (error) throw error;
      setReports(data || []);
    } catch (error) {
      console.error("Error fetching reports:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [...new Set(reports.map((r) => r.category).filter(Boolean))];
  
  const filteredReports = selectedCategory
    ? reports.filter((r) => r.category === selectedCategory)
    : reports;

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getReportShareUrl = (report: Report) => `${window.location.origin}/insights#${report.id}`;
  return (
    <Layout>
      <PageHeader
        label="Knowledge Hub"
        title="Insights & Reports"
        description="Access our research publications, policy briefs, and analytical reports on African markets, governance, and development."
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
                All Reports
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
          ) : filteredReports.length === 0 ? (
            <div className="text-center py-20">
              <FileText className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Reports Available</h3>
              <p className="text-muted-foreground">
                Check back soon for our latest research and insights.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReports.map((report) => (
                <Card key={report.id} className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-burgundy flex items-center justify-center shadow-md">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      {report.category && (
                        <Badge variant="secondary">{report.category}</Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg font-display group-hover:text-primary transition-colors">
                      {report.title}
                    </CardTitle>
                    {report.description && (
                      <CardDescription className="line-clamp-3">
                        {report.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        {format(new Date(report.published_at || report.created_at), "MMM d, yyyy")}
                      </div>
                      <div className="flex items-center justify-between">
                        <SocialShare 
                          title={report.title} 
                          url={getReportShareUrl(report)} 
                          description={report.description || undefined}
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDownload(report.file_url, report.file_name)}
                          className="text-primary hover:text-primary/80"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
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
            Need Custom Research?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our team can produce tailored research and analysis for your specific needs.
            Contact us to discuss how we can support your organization.
          </p>
          <Button variant="heroOutline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-navy">
            <a href="/contact">Request Custom Research</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
