import React, { useEffect, useState, useRef } from "react";
import { useForm, useWatch } from "react-hook-form";
import dayjs from "dayjs";

const BookingDetails = ({ numPlayers, gameTitle, cost, date, bookingText }) => {
  const confirmRef = useRef(null);

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    control,
    formState: { isValid, errors, isSubmitSuccessful, isSubmitting },
  } = useForm({ mode: "onChange" });
  const watchPlayers = useWatch({ control, name: "players" });

  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const today = dayjs(new Date()).toDate().toDateString();
  const dateIsSet = date !== today;

  const onSubmit = async (data, e) => {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
      });
  };

  useEffect(() => {
    if (isValid) {
      confirmRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
    if (dateIsSet) {
      setValue("date", date, { shouldValidate: true, shouldDirty: true });
    }
  }, [isValid, dateIsSet]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <div className="items-center gap-6 my-6 sm:grid sm:grid-cols-5">
          {/* web3Forms data */}
          <input
            type="hidden"
            value={import.meta.env.VITE_WEB3_PUB_ACCESS_KEY}
            {...register("access_key")}
          />
          <input
            type="hidden"
            value="Booking request from Hammer"
            {...register("subject")}
          />
          <input
            type="hidden"
            value="Hammer3 Booking"
            {...register("from_name")}
          />
          <input
            type="hidden"
            value={`${cost} € per player`}
            {...register("cost_per_player")}
          />
          <input
            type="hidden"
            value={`Minimum Deposit: ${cost * watchPlayers * 0.2} €`}
            {...register("minimum_deposit")}
          />

          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          ></input>
          <div className="relative col-span-3 mb-10 border-b-2 border-transparent sm:mb-6 focus-within:border-red-700">
            <input
              className="webkitAutoFillOverride block w-full p-2 px-3  border-0 rounded-md bg-neutral-800 leading-[1.6]  focus-within:border-red-700 shadow-none focus:outline-none focus:text-white "
              type="name"
              name="name"
              placeholder=""
              autoComplete="name"
              id="name"
              {...register("name", { required: true, maxLength: 100 })}
            />
            <label
              className="absolute top-0 z-[1] p-2 text-red-600 transition-all duration-200 ease-linear origin-left"
              htmlFor="name"
            >
              {bookingText.fullName}
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
              className="absolute top-0 z-[1] p-2 text-red-600 transition-all duration-200 ease-linear origin-left"
              htmlFor="players"
            >
              {bookingText.numPlayers}
            </label>
          </div>
          <div className="relative mb-10 border-b-2 border-transparent sm:mb-6 focus-within:border-red-700">
            <input
              className="webkitAutoFillOverride block w-full p-2 px-3 border-0 rounded-md bg-neutral-800 leading-[1.6]  focus-within:border-red-700 shadow-none focus:outline-none focus:text-white "
              type="text"
              name="date"
              placeholder=""
              disabled={true}
              id="date"
              value={dateIsSet ? date : ""}
              {...register("date", { required: true, dateIsSet: true })}
            />
            <label
              className="absolute top-0 z-[1] p-2 text-red-600 transition-all duration-200 ease-linear origin-left"
              htmlFor="date"
            >
              {bookingText.selDate}
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
              className="absolute top-0 z-[1] p-2 text-red-600 transition-all duration-200 ease-linear origin-left"
              htmlFor="email"
            >
              {bookingText.email}
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
              className="absolute top-0 z-[1] p-2 text-red-600 transition-all duration-200 ease-linear origin-left"
              htmlFor="tel"
            >
              {bookingText.phone}
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
            {bookingText.comments}
          </label>
        </div>

        <div ref={confirmRef} className="flex flex-col justify-center py-6">
          {isValid && (
            <div className="animate-txtBlur">
              <h1 className="text-5xl font-bold font-Montserrat">
                {bookingText.preivew}
              </h1>

              {/* Selected Game */}
              <div className="grid grid-cols-3 py-6 gap-y-2 ">
                <div className="flex items-center p-4 ">
                  {bookingText.selGame}
                </div>
                <div className="flex flex-col items-center col-span-2 p-4 text-white sm:flex-row">
                  {gameTitle}{" "}
                  <span className="ml-3 text-neutral-600">({date})</span>
                </div>

                {/* Date */}
                <div className="flex items-center p-4 ">
                  {bookingText.prefDate}
                </div>
                <div className="flex flex-col items-center col-span-2 p-4 sm:flex-row ">
                  {date}
                </div>

                {/* Players*/}
                <div className="flex items-center p-4 ">
                  {bookingText.numPlayers}
                </div>
                <div className="flex flex-col items-center col-span-2 p-4 sm:flex-row ">
                  {watchPlayers} {bookingText.players}
                  <span className="ml-3 text-neutral-600">
                    ({cost} € {bookingText.perPlayer})
                  </span>
                </div>

                {/* Deposit */}
                <div className="flex items-center p-4 ">
                  {bookingText.minDeposit}
                </div>
                <div className="flex flex-col items-center col-span-2 p-4 sm:flex-row ">
                  {cost * watchPlayers * 0.2} €
                  <span className="ml-3 text-neutral-600">
                    (20% {bookingText.deposit})
                  </span>
                </div>

                {/* Balance */}
                <div className="flex items-center p-4 ">
                  {bookingText.balance}
                </div>
                <div className="flex flex-col items-center col-span-2 p-4 sm:flex-row ">
                  {cost * watchPlayers - cost * watchPlayers * 0.2} €
                  <span className="ml-3 text-neutral-600">
                    ({bookingText.incTaxes})
                  </span>
                </div>
              </div>
            </div>
          )}

          {isValid && (
            <div className="flex flex-col items-center py-6 animate-txtBlur">
              <button
                type="submit"
                className="relative w-full py-3 overflow-hidden text-sm font-medium text-center text-white transition-all bg-red-700 border border-red-300 rounded-lg shadow-2xl cursor-pointer max-w-96 sm:rounded-xl hover:before:bg-white hover:border-white before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-200 hover:text-red-700 hover:before:left-0 hover:before:w-full animate-txtBlur"
                disabled={isSubmitting}
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <svg
                      className="w-6 h-5 mx-auto animate-spin "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    `${bookingText.sendBtn}`
                  )}
                </span>
              </button>
            </div>
          )}
          {isSubmitSuccessful && isSuccess && (
            <>
              <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
                <svg
                  width="100"
                  height="100"
                  className="text-green-700"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
                <h3 className="py-5 text-2xl text-green-500">Success</h3>
                <p className="text-gray-700 md:px-3">{Message}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default BookingDetails;
