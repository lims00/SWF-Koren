import React from "react";
import context from "react-bootstrap/esm/AccordionContext";

import styled from "styled-components";
import { DeleteContext } from "../../page/ApprovalADPage";
import { useContext } from "react";

const Button = styled.button`

  width: 95px;
  height: 40px;
  margin:10px;
  margin-left:20%;
  background-color: #C85858;
  border-radius: 50px;
  color: white;
  font-size: 20px;
  border: none;
  letter-spacing: 2px;
  
`



const RejectButton=(props)=>{

  const deleteContext = useContext(DeleteContext);


  const handleClick = () => {
    deleteContext.deleteHandler(props.postId);
  }

    return(
        <Button onClick={handleClick}>거절</Button>

    )
}
export default RejectButton;