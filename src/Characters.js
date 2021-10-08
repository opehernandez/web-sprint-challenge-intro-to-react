import React from "react";
import styled from "styled-components";



const Character = styled.div`
    background:red;

`


const Characters = (props) => {
const {name, birthYear} = props








    return (
            
        
            <div className='test'>
                <Character>{name}{birthYear}</Character>
            </div> 
            

      
    )
}

export default Characters