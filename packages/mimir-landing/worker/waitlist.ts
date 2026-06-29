interface WaitlistStore {
  put(key: string, value: string): Promise<void>
}

interface WaitlistEnv {
  WAITLIST_KV?: WaitlistStore
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u

export default {
  async fetch(request: Request, env: WaitlistEnv): Promise<Response> {
    if (request.method !== "POST") {
      return new Response("Method not allowed.", { status: 405 })
    }

    const formData = await request.formData()
    const email = readFormValue(formData, "email").trim().toLowerCase()
    const website = readFormValue(formData, "website").trim()

    if (website) {
      return redirectToThanks()
    }

    if (!EMAIL_PATTERN.test(email)) {
      return new Response("Invalid email.", { status: 400 })
    }

    if (!env.WAITLIST_KV) {
      return new Response("Waitlist storage is not configured.", { status: 503 })
    }

    const payload = {
      email,
      context: readFormValue(formData, "context").trim(),
      source: readFormValue(formData, "source").trim() || "mimir-landing",
      createdAt: new Date().toISOString(),
    }

    await env.WAITLIST_KV.put(`waitlist:${email}`, JSON.stringify(payload))
    return redirectToThanks()
  },
}

function readFormValue(formData: FormData, key: string): string {
  const value = formData.get(key)
  return typeof value === "string" ? value : ""
}

function redirectToThanks(): Response {
  return Response.redirect("/?waitlist=thanks#waitlist", 303)
}
