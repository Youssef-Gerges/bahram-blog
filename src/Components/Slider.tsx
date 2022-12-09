import React, { useEffect, useRef, useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import './Slider.scss';

export const Slider: React.FC<{ children: React.ReactNode[] }> = ({
  children,
}) => {
  const slides = useRef<HTMLUListElement>(null);
  const slide = useRef<HTMLLIElement>(null);
  const [previous, setPrevious] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(true);

  useEffect(() => {
    const element: any = slides.current;
    if (element.scrollWidth >= window.innerWidth) {
      setNext(false);
    }
  }, [window.innerWidth]);

  const slidePreviousHandler = (): void => {
    const element: any = slides.current;
    element.scrollLeft -= +(slide.current?.clientWidth + 100);
    if (element.scrollLeft - slide.current?.clientWidth <= 0) {
      setPrevious(false);
    }
    setNext(true);
  };

  const slideNextHandler = (): void => {
    const element: any = slides.current;
    element.scrollLeft += slide.current?.clientWidth + 100;
    setPrevious(true);
    if (
      element.scrollLeft + slide.current?.clientWidth >=
      element.offsetLeft + 220
    ) {
      setNext(false);
    }
    // console.log(element.scrollLeft + slide.current?.clientWidth);
    // console.log(element.offsetWidth);
  };

  return (
    <div className="slider">
      {previous && (
        <button className="slide-previous" onClick={slidePreviousHandler}>
          <AiFillCaretLeft />
        </button>
      )}
      <ul className="slides" ref={slides}>
        {children.map((element, index) => {
          return (
            <li key={index} ref={slide}>
              {element}
            </li>
          );
        })}
      </ul>
      {next && (
        <button className="slide-next" onClick={slideNextHandler}>
          <AiFillCaretRight />
        </button>
      )}
    </div>
  );
};
