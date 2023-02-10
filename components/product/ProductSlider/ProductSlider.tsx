import React, { FC, Children, isValidElement, useState, ReactNode } from 'react'
import s from "./ProductSlider.module.css"
import { useKeenSlider } from "keen-slider/react"
import cn from "classnames"

interface Props {
    children: ReactNode
}

const ProductSlider: FC<Props> = ({children}) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded ] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        }
    })

    return (
        <div className={s.root}>
            <div 
                ref={sliderRef as unknown as React.RefObject<HTMLDivElement>} 
                className="keen-slider h-full transition-opacity duration-150"
            >
                <button 
                    onClick={ (e: any) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled = { currentSlide === 0}
                    className={cn(s.leftControl, s.control)}
                />

                <button 
                    onClick={ (e: any) =>
                        e.stopPropagation() || instanceRef.current?.next()
                    }
                    //disabled = {currentSlide === instanceRef.current.track.details.slides.length - 1}
                    className={cn(s.rightControl, s.control)}
                />

                { Children.map(children, (child) => {


                    if (isValidElement(child)) {

                        return {
                            ...child,
                            props: {
                                ...child.props,
                                className: `${
                                    child.props.className ? `${child.props.className}` : ""
                                } keen-slider__slide`
                            }
                        }

                        /*return React.cloneElement(child, { 
                            className: `${child.props.className ? `${child.props.className}` : ""} keen-slider__slide`
                        })*/
                    }

                    return child;
                }
                )}  
            </div>
        </div>
    )   

}

export default ProductSlider;