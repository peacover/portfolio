import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import profile from "../../../public/Profile/youssef.png";

const ContactCard = () => {
  return (
    <div className="flex items-center justify-center lg:justify-between gap-[5rem] px-[5rem]">
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
      <Card className="bg-secondary-foreground w-full lg:w-1/2">
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
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <Button>Send message</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default ContactCard;
