import { useFormStatus } from "react-dom";
import { Button } from "./button";



const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send message"}
    </Button>
  );
};

export default SubmitButton;
