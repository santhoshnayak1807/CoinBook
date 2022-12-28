import{ ChartsDisplay }from 'components'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderButton, SliderWrapper } from './ChartSlider.css'

const ChartSlider = (props) => {
    const sliderRef = useRef(null)
    // console.log(sliderRef.current)
    console.log(props, "slider")
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <SliderWrapper>
        <SliderButton left="10px" onClick={() => sliderRef?.current?.slickPrev()} >
            &#60;
        </SliderButton>
        <SliderButton right="10px" onClick={() => sliderRef?.current?.slickNext()}>
            &#62;
        </SliderButton>
        <Slider ref={sliderRef} {...settings} >
            <div>
                <ChartsDisplay
                  data={props.data}
                  dataLabels={props.dataLabels}
                  dataPoints={props.priceDataPoints}
                  isLoading={props.isLoading}
                  label="Price"
                  legendTitle="Price"
                  type="Line"
                  width="100%"
                />
            </div>
            <div>
                <ChartsDisplay
                  data={props.data}
                  dataLabels={props.dataLabels}
                  dataPoints={props.volumeDataPoints}
                  isLoading={props.isLoading}
                  label="Volume"
                  legendTitle="Volume 24h"
                  type="Bar"
                  width="100%"
                />
            </div>
        </Slider>
    </SliderWrapper>
  )
}

export default ChartSlider