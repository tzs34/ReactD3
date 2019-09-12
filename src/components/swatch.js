import React from 'react'
import styled from 'styled-components'

const Swatch =  styled.rect` 
    width:${props => props.width};
    height:${props => props.height};
    x:${props => props.x};
    y:${props => props.y};
    fill:${props => props.color};
    `


export default Swatch