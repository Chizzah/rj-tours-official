import React from "react";
import { useForm } from "react-hook-form";

type BookingFormType = {
  name: string;
  email: string;
  number: string;
  discover: string;
  date: string;
};

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="name"
        {...register("name", { required: true })}
      />
      <input
        type="text"
        placeholder="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="number"
        {...register("number", { required: true })}
      />
      <select {...register("discover", { required: true })}>
        <option value="Community Tours">Community Tours</option>
        <option value=" Heritage Walks"> Heritage Walks</option>
        <option value=" Bike Tours"> Bike Tours</option>
        <option value=" Bike Rentals"> Bike Rentals</option>
      </select>
      <input
        type="datetime-local"
        placeholder="date"
        {...register("date", { required: true })}
      />

      <input type="submit" />
    </form>
  );
}
