import React, { useEffect } from "react";
import { Script } from "gatsby";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

import Button from "../UI/Button";
import MyModal from "../UI/FormModal";

const formId = process.env.GATSBY_PAGECLIP_API_KEY;

type FormValues = {
  name: string;
  email: string;
  number: string;
  reason: string;
  message: string;
};

type FromSumissionTypes = {
  message?: string;
  isOpen?: boolean;
};

export default function ContactForm() {
  const [formSubmission, setFormSubmission] = useState<FromSumissionTypes>({
    message: "",
    isOpen: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      number: "",
      reason: "",
      message: "",
    },
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const reasonParam = urlParams.get("reason");

    if (reasonParam) {
      setValue("reason", reasonParam);
    }
  }, [setValue]);

  const onSubmit = async (data: FormValues) => {
    const { name, email, number, reason, message } = data;

    try {
      const response = await fetch(`https://send.pageclip.co/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, number, reason, message }),
      });

      if (response.ok) {
        console.log(response);
        setFormSubmission({
          isOpen: true,
          message: "Thank you for reaching out. We'll be in contact soon.",
        });
        reset();
      } else {
        console.error("Error submitting form:", response.statusText);
        setFormSubmission({ isOpen: true, message: response.statusText });
      }
    } catch (error: any) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className="relative flex flex-col w-full h-full p-4 mx-auto bg-white shadow">
      <h2 className="mb-4 text-xl font-semibold text-center uppercase lg:text-3xl lg:mb-8 text-stone-400">
        Get in touch
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 lg:flex-row lg:flex-wrap"
      >
        <div className="flex flex-col gap-1">
          <input
            className="bg-white text-stone-400 focus:ring-stone-400 focus:border-stone-400 border-stone-200 placeholder:text-stone-400 lg:w-[412px]"
            type="text"
            placeholder="Name"
            {...register("name", { required: "This is a required field." })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => (
              <p className="text-xs font-thin text-red-600">{message}</p>
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <input
            className="bg-white text-stone-400 focus:ring-stone-400 focus:border-stone-400 border-stone-200 placeholder:text-stone-400 lg:w-[412px]"
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "This is a required field.",
              pattern: /^\S+@\S+$/i,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => (
              <p className="text-xs font-thin text-red-600">{message}</p>
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <input
            className="bg-white text-stone-400 focus:ring-stone-400 focus:border-stone-400 border-stone-200 placeholder:text-stone-400 lg:w-[412px]"
            type="tel"
            placeholder="Number"
            {...register("number", { required: "This is a required field." })}
          />
          <ErrorMessage
            errors={errors}
            name="number"
            render={({ message }) => (
              <p className="text-xs font-thin text-red-600">{message}</p>
            )}
          />
        </div>
        <div className="flex flex-col gap-1">
          <select
            className="bg-white text-stone-400 focus:ring-stone-400 focus:border-stone-400 border-stone-200 placeholder:text-stone-400 lg:w-[412px]"
            {...register("reason", { required: "This is a required field." })}
          >
            <option value="" disabled>
              Reason for message
            </option>
            <option value="general-enquiry">General Enquiry</option>
            <option value="community-tour">Community Tour</option>
            <option value="heritage-walk">Heritage Walk</option>
            <option value="bike-tour-or-rental">Bike Tour Or Rental</option>
          </select>
          <ErrorMessage
            errors={errors}
            name="reason"
            render={({ message }) => (
              <p className="text-xs font-thin text-red-600">{message}</p>
            )}
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <textarea
            rows={8}
            className="bg-white text-stone-400 focus:ring-stone-400 focus:border-stone-400 border-stone-200 placeholder:text-stone-400 lg:col-span-3 lg:w-full"
            placeholder="Message"
            {...register("message", {
              required: "This is a required field.",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="message"
            render={({ message }) => (
              <p className="text-xs font-thin text-red-600">{message}</p>
            )}
          />
        </div>
        <div className="w-full">
          <Button type="submit" text="Send Message" />
        </div>
      </form>
      {/* <TailSpin
          visible={isSubmitting}
          height="80"
          width="80"
          color="#a8a29e"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-25"
        /> */}
      {/* add react confetti */}
      <Script src="https://s.pageclip.co/v1/pageclip.js" />
      <MyModal
        formSubmission={formSubmission}
        setFormSubmission={setFormSubmission}
      />
    </div>
  );
}
