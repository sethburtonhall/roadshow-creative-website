import type { APIRoute } from "astro";
import { sendContactMessage } from "@/lib/contact";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Check content type
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
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
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const name = body.name as string;
    const email = body.email as string;
    const company = body.company || "";
    const message = body.message as string;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    await sendContactMessage({ name, email, company, message });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to send message",
        details: error instanceof Error ? error.message : String(error),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
