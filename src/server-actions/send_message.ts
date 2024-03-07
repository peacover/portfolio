"use server";

import { sendMessageSchema } from "@/lib/validation/sendMessageSchema";
import { Resend } from "resend";

interface TFormState {
  error: boolean;
  message: string;
}
const handleSendMessage = async (prevState: TFormState, formData: FormData) => {
  const firstName = formData.get("first-name") as string;
  const lastName = formData.get("last-name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const parsedForm = sendMessageSchema.safeParse({
      firstName,
      lastName,
      email,
      message,
    });
    if (!parsedForm.success) {
      return {
        error: true,
        message: parsedForm.error.errors[0].message,
      };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    // const response = await resend.emails.send({
    //   from: "Peacover <noreply@peacover.com>",
    //   to: ["yousseferraki98@gmail.com"],
    //   subject: "Hello world",
    //   //   react: EmailTemplate({ firstName: "John" }),
    //   html: "<div> Test </div>",
    // });
    // if (response.error) {
    //   console.log("Resend response: ", response);
    //   return {
    //     error: true,
    //     message: "An error occurred while sending the message",
    //   };
    // }

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return {
      error: false,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.log("Error catch: ", error);
    return {
      error: true,
      message: "An error occurred while sending the message",
    };
  }
};

export default handleSendMessage;