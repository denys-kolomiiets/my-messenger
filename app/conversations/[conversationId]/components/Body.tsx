import { Message } from "@prisma/client";
import React from "react";

interface BodyProps {
  initialMessages: Message[];
}
const Body: React.FC<BodyProps> = ({ initialMessages }) => {
  return <div className="flex-1 overflow-y-auto">Body</div>;
};

export default Body;
