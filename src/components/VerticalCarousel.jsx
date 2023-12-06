import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { ReactComponent as Next } from "../images/icons/chevron-down-circle.svg";
import { ReactComponent as Prev } from "../images/icons/chevron-up-circle.svg";
import "tailwindcss/tailwind.css";

const VerticalCarousel = ({ data, leadingText }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 52;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
    <div className="flex justify-center">
      <section className="flex max-w-md mx-auto border border-gray-400 rounded shadow-lg overflow-hidden">
        <div className="flex flex-col bg-orange-500 flex-grow w-full">
          <button
            type="button"
            className="flex self-center p-2 mx-auto my-1 w-12 h-12 bg-orange-500 rounded-full border-2 border-white"
            onClick={() => handleClick("prev")}
          >
            <Prev className="w-6 h-6 text-white" />
          </button>

          <div className="flex flex-grow items-center text-white">
            <div className="flex items-center h-full mx-2">
              <p className="font-semibold text-lg">{leadingText}</p>
            </div>
            <div className="flex-grow flex-shrink overflow-hidden border-2">
              <div className="relative h-60">
                {data.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn("absolute bg-transparent border-none p-0 m-0 transition-all duration-400 ease-in-out", {
                      'opacity-0': Math.abs(determinePlacement(i)) > visibleStyleThreshold,
                      'opacity-100': Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                    })}
                    key={item.id}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`
                    }}
                  >
                    {item.introline}
                  </button>
                ))}
                {/* custom gradient effects */}
                <div className="absolute inset-x-0 top-0 h-28 z-10 pointer-events-none bg-gradient-to-b from-transparent to-orange-500"/>
                <div className="absolute inset-x-0 bottom-0 h-28 z-10 pointer-events-none bg-gradient-to-t from-orange-500 to-transparent"/>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="flex self-center p-2 mx-auto my-1 w-12 h-12 bg-orange-500 rounded-full border-2 border-white"
            onClick={() => handleClick("next")}
          >
            <Next className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="flex-grow p-5 bg-white">
          <img
            className="w-full"
            src={data[activeIndex].content.image}
            alt={data[activeIndex].content.introline}
          />
          <p>{data[activeIndex].content.copy}</p>
        </div>
      </section>
    </div>
  );
};

VerticalCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  leadingText: PropTypes.string.isRequired
};

export default VerticalCarousel;
