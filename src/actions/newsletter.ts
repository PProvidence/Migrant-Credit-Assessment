'use server';

import { newsletterSchema, NewsletterState } from "@/lib/schemas";

/**
 * Server Action to handle newsletter subscriptions.
 * * ASSUMPTIONS:
 * 1. API Endpoint: Assumes a backend service exists at POST /api/subscribe.
 * 2. Latency: Simulates a 1500ms network delay to demonstrate loading states.
 * 3. Business Logic: Assumes the backend rejects duplicate emails.
 */
export async function subscribeToNewsletter(
  prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  // 1. Extract and Validate Data
  const rawFormData = {
    email: formData.get("email"),
  };
  //   Validate using Zod
  const validatedFields = newsletterSchema.safeParse(rawFormData);

  // 2. Handle Validation Errors Fast
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
    };
  }

  const email = validatedFields.data.email;

  // 3. =============== MOCKED FETCH / BACKEND LOGIC (To be replaced with real API call) ===============
  try {
    // TODO: [Integration] Remove this mock delay and logic
    console.log(`[Mock API] Processing subscription for: ${email}`);
    // Assumption: Simulate realistic network latency (1.5s)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Assumption: Simulate a "409 Conflict" (specific "Duplicate Email" error from the backend)
    // Use this specific email to test the Error UI
    if (email === "error@test.com") {
      throw new Error("This email is already subscribed.");
    }

    // Simulate "500 Server Error"
    if (email === "500@test.com") {
      throw new Error("Internal Service Error. Please try again later.");
    }

    // Success Path
    // In a real app: await db.subscribers.create({ email });
    console.log(`[Server Action] Successfully subscribed: ${email}`);

    return {
      success: true,
      message: "Success! You've been added to our list.",
    };

  } catch (error) {
    console.error("[Server Action] Error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
    };
  }
  // =============== END MOCKED LOGIC ===============


  // 4. =============== REAL API INTEGRATION PLACEHOLDER ===============
  /**
   *  REAL API ASSUMPTIONS:
   * 1. API Endpoint: Assumes backend service exists at POST `${process.env.API_BASE_URL}/newsletter/subscribe`.
   */

  // ----------------------------------------------
  /*  REAL API IMPLEMENTATION (Uncomment when ready)
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/newsletter/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
       const errorData = await response.json();
       throw new Error(errorData.message || "Failed to subscribe");
    }

    return { success: true, message: "Success! You've been added to our list." };
  } catch (error) {
     return { success: false, message: "Service unavailable. Please try again." };
  }
  */
}
  // =============== END REAL API INTEGRATION PLACEHOLDER ===============