import React, {useRef, useEffect } from 'react'
import * as d3 from 'd3';

const useD3Color = (width, Component) => {
    const colors =  useRef(d3.schemeTableau10)
    const compWidth = useRef(d3.scaleBand().domain(d3.range(10)))
  
    useEffect(() => {
        compWidth.current.range([0,width]);
      }, [width])

    const colouredComponent = () => {
     
      return (
        <svg width="600" height="200" id="svg">
          <g>
            {d3.range(10).map(i => {
              let x = Math.floor(compWidth.current(i) * 50)
              return(
              <Component color={colors.current[i]} width="10" height="10" x={x} y={"0" } key={i}/>
            )})}
          </g>
        </svg>
      )

    }
    

    return [colouredComponent]
}

export default useD3Color