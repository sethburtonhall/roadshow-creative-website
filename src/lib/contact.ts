const LOOPS_API_KEY = import.meta.env.LOOPS_API_KEY;
const LOOPS_TEMPLATE_ID = "cmo3e2t8a038z0i0b00pu36av";

export async function sendContactMessage(data: {
  email: string;
  name: string;
  message: string;
  company?: string;
}): Promise<void> {
  console.log("[sendContactMessage] Starting with data:", {
    email: data.email,
    name: data.name,
  });

  if (!LOOPS_API_KEY) {
    console.error("[sendContactMessage] LOOPS_API_KEY not set");
    throw new Error("API configuration error");
  }

  if (!LOOPS_TEMPLATE_ID) {
    console.error("[sendContactMessage] LOOPS_TEMPLATE_ID not set");
    throw new Error("Template configuration error");
  }

  const firstName = data.name.split(" ")[0];
  const lastName = data.name.split(" ").slice(1).join(" ");

  console.log("[sendContactMessage] Prepared data for Loops:", {
    templateId: LOOPS_TEMPLATE_ID,
    email: data.email,
    firstName,
    lastName,
    company: data.company || "",
    messageLength: data.message.length,
  });

  try {
    const response = await fetch("https://app.loops.so/api/v1/transactional", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOOPS_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        transactionalId: LOOPS_TEMPLATE_ID,
        email: data.email,
        dataVariables: {
          firstName,
          lastName,
          email: data.email,
          company: data.company || "",
          message: data.message,
        },
      }),
    });

    console.log(
      "[sendContactMessage] Loops API response status:",
      response.status,
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "[sendContactMessage] Loops API error:",
        response.status,
        errorText,
      );
      throw new Error(`Loops API error: ${response.status} - ${errorText}`);
    }

    const responseData = await response.json();
    console.log("[sendContactMessage] Loops API success:", responseData);
  } catch (err) {
    console.error("[sendContactMessage] Error details:", err);
    throw err;
  }
}
