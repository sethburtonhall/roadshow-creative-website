import type { APIRoute } from "astro";
import { sendContactMessage } from "@/lib/contact";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  console.log("[API Contact] POST request received");

  try {
    // Check content type
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.log("[API Contact] Invalid content type:", contentType);
      return new Response(
        JSON.stringify({ error: "Content-Type must be application/json" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Parse JSON body with error handling
    let body;
    try {
      body = await request.json();
    } catch (jsonError) {
      console.error("[API Contact] JSON parsing error:", jsonError);
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const name = body.name as string;
    const email = body.email as string;
    const company = body.company || "";
    const message = body.message as string;

    console.log("[API Contact] Request body parsed:", {
      name,
      email,
      company,
      messageLength: message?.length,
    });

    if (!name || !email || !message) {
      console.log("[API Contact] Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    console.log("[API Contact] Calling sendContactMessage");
    await sendContactMessage({ name, email, company, message });
    console.log("[API Contact] sendContactMessage completed successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(
      "[API Contact] Error:",
      error instanceof Error ? error.message : String(error),
    );
    return new Response(
      JSON.stringify({
        error: "Failed to send message",
        details: error instanceof Error ? error.message : String(error),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
