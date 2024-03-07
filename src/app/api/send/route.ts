import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    console.log("Sending email");
    console.log("Body: ");
    // const data = await resend.emails.send({
    //   from: "Acme <onboarding@resend.dev>",
    //   to: ["yousseferraki98@gmail.com"],
    //   subject: "Hello world",
    //   //   react: EmailTemplate({ firstName: "John" }),
    //   html: "<div> Test </div>",
    // });
    const data = "test";
    console.log("Email: ", data);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
