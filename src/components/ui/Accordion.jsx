export default function Accordion(props) {
  const { text } = props;

  return (
    <div>
      <div className="relative flex items-center justify-between p-3 ">
        <div className="absolute sm:w-16 sm:left-5 sm:h-16 w-8 h-8 bg-[#222] z[-10] rounded-full"></div>
        <svg
          className="z-10 mx-2 sm:mx-8 fill-neutral-400 shrink-0"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transition duration-300 ease-out origin-center transform ${
              props.isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transition duration-300 ease-out origin-center transform rotate-90 ${
              props.isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </svg>
        <button
          className="w-full px-4 font-bold text-left text-white transition duration-300 sm:pl-10 sm:text-2xl sm:p-6 font-Montserrat hover:text-red-700"
          onClick={props.toggleAccordion}
        >
          {props.title}
        </button>
      </div>
      <div
        aria-labelledby={`accordion-title-01`}
        className={`grid text-sm overflow-hidden transition-all duration-300 ease-in-out ${
          props.isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {text.map((paragraph, i) => (
            <p
              key={i}
              className="pb-4 pl-16 pr-6 leading-loose text-left sm:pl-[136px] font-Montserrat text-neutral-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
