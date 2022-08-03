import React, { useState } from "react";
import { useStateContext } from '../context/ContextProvider'

const Countdown = () => {
  const { weddingDate } = useStateContext()
  const [days, setdays] = useState(0)
  const [hours, sethours] = useState(0)
  const [mins, setmins] = useState(0)
  const [secs, setsecs] = useState(0)

  setInterval(() => {
    const futureDate = new Date(weddingDate.date).getTime();
    const now = new Date().getTime();
    const distance = futureDate - now

    setdays(Math.floor(distance / (1000 * 60 * 60 * 24)))
    sethours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setmins(Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60)))
    setsecs(Math.floor((distance % (1000 * 60) / 1000)))
  }, 1000);
  return (
    <div className="w-full md:w-3/4">
      <div className="flex justify-center h-full flex-col text-primary">
        <p className="text-center font-extrabold text-6xl sm:text-8xl text-primary">
          {days}Days <br /> {hours}:{mins}:{secs}
        </p>
        <p className="font-cursive text-center text-3xl md:text-5xl mb-10">
          To forever
        </p>
      </div>
    </div>
  );
};

export default Countdown;
