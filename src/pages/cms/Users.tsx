import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Loader2, Shield, ShieldOff, Users as UsersIcon, LogOut, Plus, Trash2 } from "lucide-react";
import { format } from "date-fns";
import logo from "@/assets/logo.png";

interface UserWithRole {
  id: string;
  user_id: string;
  email: string | null;
  full_name: string | null;
  created_at: string;
  is_admin: boolean;
}

const Users = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [togglingUser, setTogglingUser] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    full_name: "",
    make_admin: false,
  });

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/cms/login");
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchUsers();
    }
  }, [isAdmin]);

  const fetchUsers = async () => {
    try {
      const { data: profiles, error: profilesError } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false });

      if (profilesError) throw profilesError;

      const { data: adminRoles, error: rolesError } = await supabase
        .from("user_roles")
        .select("user_id")
        .eq("role", "admin");

      if (rolesError) throw rolesError;

      const adminUserIds = new Set(adminRoles?.map((r) => r.user_id) || []);

      const usersWithRoles: UserWithRole[] = (profiles || []).map((profile) => ({
        id: profile.id,
        user_id: profile.user_id,
        email: profile.email,
        full_name: profile.full_name,
        created_at: profile.created_at,
        is_admin: adminUserIds.has(profile.user_id),
      }));

      setUsers(usersWithRoles);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoadingUsers(false);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);

    try {
      const { data, error } = await supabase.functions.invoke("create-user", {
        body: formData,
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      toast({
        title: "User Created",
        description: `User ${formData.email} has been created successfully.`,
      });

      setDialogOpen(false);
      setFormData({ email: "", password: "", full_name: "", make_admin: false });
      fetchUsers();
    } catch (error: any) {
      toast({
        title: "Error Creating User",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setCreating(false);
    }
  };

  const toggleAdminRole = async (targetUser: UserWithRole) => {
    if (targetUser.user_id === user?.id) {
      toast({
        title: "Cannot Modify Own Role",
        description: "You cannot remove admin access from yourself.",
        variant: "destructive",
      });
      return;
    }

    setTogglingUser(targetUser.user_id);

    try {
      if (targetUser.is_admin) {
        const { error } = await supabase
          .from("user_roles")
          .delete()
          .eq("user_id", targetUser.user_id)
          .eq("role", "admin");

        if (error) throw error;
        toast({ title: "Admin Role Removed" });
      } else {
        const { error } = await supabase.from("user_roles").insert({
          user_id: targetUser.user_id,
          role: "admin",
        });

        if (error) throw error;
        toast({ title: "Admin Role Added" });
      }

      fetchUsers();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setTogglingUser(null);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/cms/login");
  };

  if (loading || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
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

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/cms">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
            </Button>
            <h1 className="text-2xl font-display font-bold">User Management</h1>
          </div>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create User
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New User</DialogTitle>
                <DialogDescription>
                  Add a new user to the CMS. They will be able to log in immediately.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleCreateUser} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <Input
                    value={formData.full_name}
                    onChange={(e) => setFormData((p) => ({ ...p, full_name: e.target.value }))}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    placeholder="user@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password *</label>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData((p) => ({ ...p, password: e.target.value }))}
                    placeholder="Min. 6 characters"
                    required
                    minLength={6}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="make_admin"
                    checked={formData.make_admin}
                    onCheckedChange={(checked) =>
                      setFormData((p) => ({ ...p, make_admin: checked === true }))
                    }
                  />
                  <label
                    htmlFor="make_admin"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Grant admin access
                  </label>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={creating}>
                    {creating ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      "Create User"
                    )}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardContent className="p-0">
            {loadingUsers ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : users.length === 0 ? (
              <div className="text-center py-12">
                <UsersIcon className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">No users found.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((u) => (
                    <TableRow key={u.id}>
                      <TableCell className="font-medium">{u.full_name || "—"}</TableCell>
                      <TableCell>{u.email}</TableCell>
                      <TableCell>
                        <Badge variant={u.is_admin ? "default" : "secondary"}>
                          {u.is_admin ? "Admin" : "User"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {format(new Date(u.created_at), "MMM d, yyyy")}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleAdminRole(u)}
                          disabled={togglingUser === u.user_id || u.user_id === user?.id}
                        >
                          {togglingUser === u.user_id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : u.is_admin ? (
                            <>
                              <ShieldOff className="h-4 w-4 mr-2" />
                              Remove Admin
                            </>
                          ) : (
                            <>
                              <Shield className="h-4 w-4 mr-2" />
                              Make Admin
                            </>
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Users;
