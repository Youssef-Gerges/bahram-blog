import React, { useEffect, useRef, useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import './Slider.scss';

export const Slider: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {
    const slides = useRef<HTMLUListElement>(null);
    const [previous, setPrevious] = useState<boolean>(false);
    const [next, setNext] = useState<boolean>(true);


    useEffect(() => {
        const element: any = slides.current;
        if (element.offsetWidth >= element.scrollWidth) {
            setNext(false);
        }
    }, [slides])

    const slidePreviousHandler = (): void => {
        const element: any = slides.current;
        element.scrollLeft -= 250;
        if (element.scrollLeft - 250 <= 0) {
            setPrevious(false)
        }
        setNext(true)
    }

    const slideNextHandler = (): void => {
        const element: any = slides.current;
        element.scrollLeft += 250;
        setPrevious(true);
        if (element.scrollLeft + 500 >= element.offsetWidth) {
            setNext(false)
        }
    }

    return (
        <div className='slider'>
            {previous ? (<button className="slide-previous" onClick={slidePreviousHandler}>
                <AiFillCaretLeft />
            </button>) : null}
            <ul className="slides" ref={slides}>
                {children.map((element, index) => {
                    return (
                        <li key={index}>
                            {element}
                        </li>
                    )
                })}
            </ul>
            {
                next ? (<button className="slide-next" onClick={slideNextHandler}>
                    <AiFillCaretRight />
                </button>) : null
            }
        </div>

    )
}
