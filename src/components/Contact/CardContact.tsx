"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import profile from "../../../public/Profile/youssef.png";
import { useFormState, useFormStatus } from "react-dom";
import { sendMessageSchema } from "@/lib/validation/sendMessageSchema";
import { toast } from "sonner";

type TFormState = {
  error: string | null;
  success: boolean;
};

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
      toast.error(parsedForm.error.errors[0].message);
      return {
        error: parsedForm.error.errors[0].message,
        success: false,
      };
    }
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(parsedForm.data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to send the message");
    }

    toast.success("Message sent successfully");
    return {
      error: null,
      success: true,
    };
  } catch (error) {
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};

const ContactCard = () => {
  // const { pending } = useFormStatus();
  const [sendMessageStatus, sendMessageAction] = useFormState(
    handleSendMessage,
    {
      error: null,
      success: false,
    }
  );
  return (
    <form
      action={sendMessageAction}
      className="flex items-center justify-center lg:justify-between gap-[5rem] md:px-[5rem]"
    >
      <div className="hidden lg:block w-1/2">
        <Image
          src={profile}
          alt="Profile"
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-full object-cover"
          priority={true}
        />
      </div>
      <Card className="rounded-none md:rounded-md bg-secondary-foreground w-full lg:w-1/2">
        <CardHeader>
          <h2 className="text-2xl font-bold text-primary">
            Feel free to contact me
          </h2>
        </CardHeader>
        <CardContent className="text-black">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  name="first-name"
                  className="placeholder:text-primary placeholder:dark:text-primary-foreground"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  className="placeholder:text-primary placeholder:dark:text-primary-foreground"
                  id="last-name"
                  name="last-name"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="placeholder:text-primary placeholder:dark:text-primary-foreground"
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px] placeholder:text-primary placeholder:dark:text-primary-foreground"
                id="message"
                name="message"
                placeholder="Enter your message"
              />
            </div>
            {/* <Button type="submit" disabled={pending}> */}
            <Button type="submit">
              Send message
              {/* {pending ? "Sending..." : "Send message"} */}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};
export default ContactCard;
