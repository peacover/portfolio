"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import profile from "../../../public/Profile/youssef.png";
import { useFormState, useFormStatus } from "react-dom";

import handleSendMessage from "@/server-actions/send_message";
import { useEffect } from "react";
import { toast } from "sonner";
import SubmitButton from "../ui/SubmitButton";

const ContactCard = () => {
  const [sendMessageState, sendMessageAction] = useFormState(
    handleSendMessage,
    {
      error: false,
      message: "",
    }
  );

  useEffect(() => {
    if (sendMessageState.error) {
      toast.error(sendMessageState.message);
    } else if (sendMessageState.message) {
      toast.success(sendMessageState.message);
    }
  }
  , [sendMessageState.message]);


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
        <CardContent className="text-black dark:text-white">
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
            {/* <Button type="submit" disabled={pending}>
              {pending ? "Sending..." : "Send message"}
            </Button> */}
            <SubmitButton />
          </div>
        </CardContent>
      </Card>
    </form>
  );
};
export default ContactCard;
