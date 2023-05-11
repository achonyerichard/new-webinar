import { useState, useEffect } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2023-7-17"); // Replace with your target date
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-[#d7c7fd] py-8">
      <div className="main">
        <h3 className="leading-none font-black text-3xl text-center">
          Countdown
        </h3>
        <div className=" flex justify-center gap-4 items-center lg:mx-40 countdown">
          <div className="flex flex-row mt-10 bg-white shadow-sm justify-center items-center lg:p-8 p-6 flex-nowrap "> 
            <span className="number days "></span>
            <span>
              <h3 className="lg:text-5xl font-bold font-mono text-lg ">
                {countdown.days}
              </h3>{" "}
              <p className="lg:font-semibold  text-lg capitalize">days</p>
            </span>
          </div>
          <div className="flex flex-row mt-10 bg-white shadow-sm justify-center items-center lg:p-8 p-6 flex-nowrap "> 
            <span className="number hours"></span>
            <span>
              {" "}
              <h3 className="lg:text-5xl font-bold font-mono text-lg ">
                {countdown.hours}
              </h3>{" "}
              <p className="lg:font-semibold  text-lg capitalize">hours</p>
            </span>
          </div>
          <div className="flex flex-row mt-10 bg-white shadow-sm justify-center items-center lg:p-8 p-6 flex-nowrap "> 
            <span className="number minutes"></span>
            <span>
              <h3 className="lg:text-5xl font-bold font-mono text-lg ">
                {countdown.minutes}
              </h3>{" "}
              <p className="lg:font-semibold  text-lg capitalize">minutes</p>{" "}
            </span>
          </div>
          <div className="flex flex-row mt-10 bg-white shadow-sm justify-center items-center lg:p-8 p-6 flex-nowrap "> 
            <span className="number seconds"></span>
            <span>
              <h3 className="lg:text-5xl font-bold font-mono text-lg ">
                {countdown.seconds}
              </h3>{" "}
              <p className="lg:font-semibold  text-lg capitalize">seconds</p>
            </span>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-center items-center">
        <h3 className="leading-none font-black text-3xl text-center ">
          Importants Dates
        </h3>
        <p className="mt-4">
        Submission of Abstract Starts: April 10, 2023


        </p>
        <p>Submission of Abstract Ends: June 30, 2023</p>
      
        </div>
        <div className="mt-10 flex flex-col justify-center items-center">
        <h3 className="leading-none font-black text-3xl text-center ">
        Sponsorship Details
        </h3>
        <p className="mt-4">
        To be announced later


        </p>
       
      
        </div>
       </div>
    </div>
  );
};

export default Countdown;
