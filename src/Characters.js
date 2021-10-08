import React from "react";
import styled from "styled-components";



const Char = styled.div`
    font-size: 1.5rem;
    display: grid;
    grid-template-columns: 3fr 1fr;

`
const CharInfo = styled.div`
    width:100%;
    display: none;
`
const ExpandButton = styled.div`
    width:100%;
    grid-column-start:2 span;
    grid-row-start:2;
    font-size: 1rem;
    font-family: Arial Black;
`

const Characters = (props) => {
const {name, birthYear} = props








    return (
            
        
            <div className='char-wrapper'>
                <Char>
                    <div className='name'>{name}</div>
                    <div className='year'>{birthYear}</div>
                    <ExpandButton>EXPAND</ExpandButton>
                </Char>
                <CharInfo>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </CharInfo>
            </div> 
            

      
    )
}

export default Characters