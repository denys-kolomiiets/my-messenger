"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  required?: boolean;
  id: string;
  type?: string;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}
const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  register,
  required,
  id,
  type,
  errors,
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
          text-black
          font-light
          py-2
          px-4
          bg-neutral-100 
          w-full 
          rounded-full
          focus:outline-none
        "
      />
    </div>
  );
};

export default MessageInput;
