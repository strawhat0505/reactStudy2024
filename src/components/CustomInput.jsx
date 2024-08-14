import styled from "styled-components";
import { useState } from "react";

const Input = styled.input`
    background-color: coral;
    margin: 10px;
    padding: 10px;
`

const CustomInput = (props) => {
return(
    <div>
        <Input type="text" onClick={()=>props.setColor}></Input>
    </div>
);
};

export default CustomInput;