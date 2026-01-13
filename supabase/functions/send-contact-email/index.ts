import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  organization: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, organization, email, message }: ContactRequest = await req.json();

    // Validate inputs
    if (!name || !organization || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to PSC
    const notificationResponse = await resend.emails.send({
      from: "Path Strategy Consulting <onboarding@resend.dev>",
      to: ["info@pathstrategyconsulting.com.ng"],
      subject: `New Inquiry from ${name} - ${organization}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #a53a3a;">New Contact Form Submission</h2>
          <div style="background: #f9f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          <div style="background: #fff; padding: 20px; border-left: 4px solid #a53a3a;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">
            This message was sent via the Path Strategy Consulting website contact form.
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationResponse);

    // Send confirmation email to the user
    const confirmationResponse = await resend.emails.send({
      from: "Path Strategy Consulting <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Path Strategy Consulting",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #a53a3a;">Thank You for Your Inquiry</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to Path Strategy Consulting. We have received your message and a member of our team will respond within 24-48 hours.</p>
          <div style="background: #f9f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #666;"><strong>Your message:</strong></p>
            <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
          </div>
          <p>Best regards,</p>
          <p><strong>The Path Strategy Consulting Team</strong></p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">
            Path Strategy Consulting | Insight. Strategy. Impact.<br/>
            <a href="https://pathstrategyconsulting.com.ng" style="color: #a53a3a;">www.pathstrategyconsulting.com.ng</a>
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
