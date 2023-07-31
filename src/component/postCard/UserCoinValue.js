import React from "react";
import CoinLabel from "../../assets/coinlabel.png"
import styled from "styled-components";
import Profile from "./Profile";
import TextBox from "./TextBox";
import ImgBox from "./ImgBox";

const Button = styled.button`

  width: 100px;
  height: 40px;
  margin: 10px;
  margin-left: 20%;
  border-radius: 50px;
  color: black;
  font-size: 15px;
  border-color: black;
  letter-spacing: 2px;
  display: inline-flex;
  justify-content: center;
  align-items:center;
  background-color: white;
  

`

const Img = styled.img`
  width: 30px;
  height: 30px;
  
`

const UserCoinValue = ({value}) => {
    return (
        <Button>
            <Img src={CoinLabel}/>
            {value}
        </Button>

    )
}
export default UserCoinValue;