import React, { useEffect, useRef } from "react";
import { useForm, useWatch } from "react-hook-form";

const BookingDetails = ({ numPlayers, gameTitle, cost, date }) => {
  const confirmRef = useRef(null);

  const {
    register,
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm();

  const watchName = useWatch({ control, name: "name" });
  const watchEmail = useWatch({ control, name: "email" });
  const watchPlayers = useWatch({ control, name: "players" });
  const watchTel = useWatch({ control, name: "tel" });
  const watchComments = useWatch({ control, name: "comments" });

  const onSubmit = async (data) => {
    const fields = { fields: data };
    console.log("fields: ", fields);
  };

  useEffect(() => {
    if (isValid) {
      console.log("ref: ", confirmRef);
      confirmRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [isValid]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <div className="items-center gap-6 my-6 sm:grid sm:grid-cols-2">
          <div className="relative mb-10 border-b-2 border-transparent sm:mb-6 focus-within:border-red-700">
            <input
              className="webkitAutoFillOverride block w-full p-2 px-3 border-0 rounded-md bg-neutral-800 leading-[1.6]  focus-within:border-red-700 shadow-none focus:outline-none focus:text-white "
              type="name"
              name="name"
              placeholder=""
              autoComplete="name"
              id="name"
              {...register("name", { required: true, maxLength: 100 })}
            />
            <label
              className="absolute top-0 z-[1] p-2 text-neutral-400 transition-all duration-200 ease-linear origin-left"
              htmlFor="name"
            >
              Full name
            </label>
          </div>
          <div className="relative mb-10 border-b-2 border-transparent sm:mb-6">
            <select
              className="webkitAutoFillOverride block py-3 w-full p-2 px-3 border-0 rounded-md bg-neutral-800 leading-[1.6]  focus-within:border-red-700 shadow-none focus:outline-none focus:text-white "
              placeholder=""
              id="players"
              name="players"
              {...register("players", { required: true })}
            >
              <option value=""></option>
              {numPlayers.map((option, index) => (
                <option className="bg-neutral-800" key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label
              className="absolute top-0 z-[1] p-2 text-neutral-400 transition-all duration-200 ease-linear origin-left"
              htmlFor="players"
            >
              Number of Players
            </label>
          </div>
        </div>
        <div className="gap-6 my-6 sm:grid sm:grid-cols-2 ">
          <div className="relative mb-10 border-b-2 border-transparent sm:mb-6 focus-within:border-red-700">
            <input
              className="block w-full p-2 px-3 leading-6 border-0 rounded-md shadow-none webkitAutoFillOverride bg-neutral-800 focus-within:border-red-700 focus:outline-none focus:text-white "
              type="email"
              name="email"
              placeholder=""
              autoComplete="email"
              id="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <label
              className="absolute top-0 z-[1] p-2 text-neutral-400 transition-all duration-200 ease-linear origin-left"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="relative mb-10 border-b-2 border-transparent sm:mb-6 focus-within:border-red-700">
            <input
              className="block w-full p-2 px-3 leading-6 border-0 rounded-md shadow-none webkitAutoFillOverride bg-neutral-800 focus-within:border-red-700 focus:outline-none focus:text-white"
              type="tel"
              name="tel"
              autoComplete="tel"
              id="tel"
              placeholder=""
              {...register("tel", {
                required: true,
                minLength: 10,
                maxLength: 15,
              })}
            />
            <label
              className="absolute top-0 z-[1] p-2 text-neutral-400 transition-all duration-200 ease-linear origin-left"
              htmlFor="tel"
            >
              Telephone
            </label>
          </div>
        </div>
        <div className="relative my-6 border-b-2 border-transparent focus-within:border-red-700">
          <textarea
            className="block w-full p-2 px-3 leading-6 border-0 rounded-md shadow-none webkitAutoFillOverride sm:min-w-96 bg-neutral-800 focus-within:border-red-700 focus:outline-none focus:text-white "
            id="comments"
            type="text"
            name="comments"
            rows="4"
            placeholder=""
            {...register("comments", {})}
          />
          <label
            htmlFor="comments"
            className="absolute top-0 z-[1] p-2 text-neutral-400 transition-all duration-200 ease-linear origin-left"
          >
            Additional Comments
          </label>
        </div>

        <div ref={confirmRef} className="flex flex-col justify-center py-6">
          {isValid && (
            <div className="animate-txtBlur">
              <h1 className="text-5xl font-bold font-Montserrat">
                Order Preview
              </h1>

              {/* Selected Game */}
              <div className="grid grid-cols-3 py-6 gap-y-2 ">
                <div className="flex items-center p-4 ">Selected Game:</div>
                <div className="flex flex-col items-center col-span-2 p-4 text-white sm:flex-row">
                  {gameTitle}{" "}
                  <span className="ml-3 text-neutral-600">
                    ({cost} € per player)
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center p-4 ">Preferred Date</div>
                <div className="flex flex-col items-center col-span-2 p-4 sm:flex-row ">
                  {date}
                </div>

                {/* Players*/}
                <div className="flex items-center p-4 ">Number of Players</div>
                <div className="flex flex-col items-center col-span-2 p-4 sm:flex-row ">
                  {watchPlayers} Players
                  <span className="ml-3 text-neutral-600">
                    ({cost} € per player)
                  </span>
                </div>

                {/* Deposit */}
                <div className="flex items-center p-4 ">Minimum Deposit</div>
                <div className="flex flex-col items-center col-span-2 p-4 sm:flex-row ">
                  {cost * watchPlayers * 0.2} €
                  <span className="ml-3 text-neutral-600">(20% deposit)</span>
                </div>

                {/* Balance */}
                <div className="flex items-center p-4 ">
                  Balance paid on the day
                </div>
                <div className="flex flex-col items-center col-span-2 p-4 sm:flex-row ">
                  {cost * watchPlayers - cost * watchPlayers * 0.2} €
                  <span className="ml-3 text-neutral-600">(inc taxes)</span>
                </div>
              </div>
            </div>
          )}

          {isValid && (
            <div className="flex flex-col items-center py-6 animate-txtBlur">
              <button
                type="submit"
                className="relative w-full py-3 overflow-hidden text-sm font-medium text-center text-white transition-all bg-red-700 border border-red-300 rounded-lg shadow-2xl cursor-pointer max-w-96 sm:rounded-xl hover:before:bg-white hover:border-white before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-200 hover:text-red-700 hover:before:left-0 hover:before:w-full animate-txtBlur"
              >
                <span className="relative z-10">Send</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default BookingDetails;
