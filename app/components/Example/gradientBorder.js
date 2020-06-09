/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';
import ic from '../../images/icon-512x512.png';

const Content = styled.div`
  /* display: flex;
  flex-direction: row;
  width: 90vw;
  height: 90vh; */
  /* background-color: blue; */
  width: 50vw;
  z-index: 10;
  position: relative;
  margin: 10vw;
`;

const BgGradient = styled.div`
  display: flex;
  padding: 0.5vw;
  background: linear-gradient(to right, red, orange);
  border-radius: 10pt;
  height: 15vh;
`;

const Card = styled.div`
  margin: 1vw;
  width: 25vw;
  display: block;
  align-items: center;
  justify-content: center;
  /* width: 25vw; */
  height: 15vh;
  position: relative;
  /* background-color: blue; */
  background-image: url(${ic});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 10pt;
  ${props =>
    props.select &&
    css`
      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -5px;
        border-radius: inherit;
        background: linear-gradient(to bottom, purple, magenta, blue);
      }
    `} /* &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -5px;
    border-radius: inherit;
    background: linear-gradient(to bottom,  purple, magenta, blue);
  } */
`;

const GradientCard = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
  max-width: 22em;
  position: relative;
  padding: 30% 2em;
  box-sizing: border-box;
  color: #fff;
  background: #000;
  background-color: #000;
  background-clip: padding-box;
  border: solid 5px transparent;
  border-radius: 1em;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -5px;
    border-radius: inherit;
    background: linear-gradient(to right, red, orange);
  }
`;

const Text = styled.p`
  color: red;
  background-color: yellow;
`;

function GradientBorder() {
  return (
    <Content>
      {/* <BgGradient> */}
      <Card>
        {/* <GradientCard> */}
        <Text>Card</Text>
        {/* </GradientCard> */}
      </Card>
      <Card select={true}>
        {/* <GradientCard> */}
        <Text>Card</Text>
        {/* </GradientCard> */}
      </Card>
      <Card>
        {/* <GradientCard> */}
        <Text>Card</Text>
        {/* </GradientCard> */}
      </Card>
      {/* </BgGradient> */}
      <Card select={true}>
        {/* <GradientCard> */}
        <Text>Card</Text>
        {/* </GradientCard> */}
      </Card>
    </Content>
  );
}

export default GradientBorder;
