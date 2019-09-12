import React from 'react'
import styled from 'styled-components'


export const FlexRow = styled.div`
    display: flex;
    align-items: ${props => props.alignItem};
    justify-content: ${props => props.justifyContent}; 
    padding: 1em;
    width: 100%;

`