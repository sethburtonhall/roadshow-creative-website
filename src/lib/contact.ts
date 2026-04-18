const LOOPS_API_KEY = import.meta.env.LOOPS_API_KEY;
const LOOPS_TEMPLATE_ID = "cmo3e2t8a038z0i0b00pu36av";

export async function sendContactMessage(data: {
  email: string;
  name: string;
  message: string;
  company?: string;
}): Promise<void> {
  if (!LOOPS_API_KEY) {
    throw new Error("API configuration error");
  }

  if (!LOOPS_TEMPLATE_ID) {
    throw new Error("Template configuration error");
  }

  const firstName = data.name.split(" ")[0];
  const lastName = data.name.split(" ").slice(1).join(" ");

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

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Loops API error: ${response.status} - ${errorText}`);
    }
  } catch (err) {
    throw err;
  }
}
