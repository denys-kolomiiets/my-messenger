import { User } from "@prisma/client";
import React from "react";

interface AvatarGroupProps {
  users: User[];
}
const AvatarGroup: React.FC<AvatarGroupProps> = ({ users }) => {
  return <div>AvatarGroup</div>;
};

export default AvatarGroup;
