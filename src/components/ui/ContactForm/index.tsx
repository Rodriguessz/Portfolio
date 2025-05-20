"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../Label"
import { Input } from "../Input";
import { cn } from "@/lib/utils";

import { Textarea } from "../Textarea";
import { useTranslations } from "next-intl";
import { toast, ToastContainer } from 'react-toastify';


export function ContactForm() {

  const t = useTranslations("Contact")

  const [name, setName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false);




  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    console.log(name, lastname, email, message)

    if(!name || !lastname || !email || !message) {
      setLoading(false)
      return toast.error(t("fieldError"));
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, lastname, email, message }),
    });

    if (res.ok) {
      setName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setLoading(false)
      toast.success(t("successMessage"))
    } else {
      setLoading(false)
      toast.error(t("errorMessage"))
    }


  };

  return (
    <div className="shadow-input max-w-2xl m-auto">

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="name">{t("inputName")}</Label>
            <Input id="name" placeholder="Enzo" type="text" onChange={(e) => setName(e.target.value)} value={name} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="sobrenome">{t("inputLastName")}</Label>
            <Input id="sobrenome" placeholder="Rodrigues" type="text" onChange={(e) => setLastName(e.target.value)} value={lastname} />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">{t("inputEmail")}</Label>
          <Input id="email" placeholder="email@email.com" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">{t("inputMessage")}</Label>
          <Textarea id="message" rows={5} onChange={(e) => setMessage(e.target.value)} value={message} />
        </LabelInputContainer>


        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-zinc-200 border-t-transparent rounded-full animate-spin absolute inset-0 m-auto" />
          ) : (
            <>
              {t("sendButton")} &rarr;
            </>
          )}
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <ToastContainer autoClose={2500} limit={1} theme="dark" toastClassName="text-sm"/>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
