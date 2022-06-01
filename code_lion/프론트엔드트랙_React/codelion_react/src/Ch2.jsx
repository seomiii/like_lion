import React from "react";
import './Ch2.css'
import styled from 'styled-components';

function Hello(){

    const PracticeStyle = {
        marginTop:"10px",
        backgroundColor:'blue',
    };

    const StyledButton=styled.button`
        color:red;
        backgroundColor:grey;
    `;
    
    return(
        <>
        <div style={{marginTop:"10px",backgroundColor:'red'}}>
            hello world!</div>

        <div style={PracticeStyle}>
            hello world!</div>

        <div className="red">
            hello world!</div>

        <StyledButton>나만의 버튼</StyledButton>
        </>
    );
}

export default Hello;