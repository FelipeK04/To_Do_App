import styled, {css} from "styled-components";
import {FaPlusSquare, FaCheck, FaTrash} from 'react-icons/fa'

export const Form = styled.form`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;

  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 60% 10%;
    grid-template-rows: 50% 30%;
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: .5rem;
  border: none;
  outline: none;
  width: 20%;
  height: 44px;

  &:focus {
    background: #ddd
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  font-size: 1.32rem;
  padding: 0 5px;
  cursor: pointer;
  color: #ff6f47;
  background: #f7fffe;
  transition: all 0.3s ease;
  height: 44px;


  border: none;
  outline: none;

  &:hover {
    background: #ff6f47;
    color: #fff;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.32rem;
    height: 44px;
  }

`;

export const Icon = styled(FaPlusSquare)`
  margin-top: 10px;
`;

export const Div = styled.div`
  margin: 1.5rem;
  width: 20%;
  position: relative;
  cursor: pointer;
  appearance: none;

  &::after {
    content: "\u25BC";
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    background: #ff6f47;
    pointer-events: none;
    width: 40px;
    height: 44px;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
    width: 100%;
    grid-column: 1 / 3;
    margin-top: 20px;

    &::after {
    content: "\u25BC";
    position: absolute;
    top: 0;
    right: 0;
    background: #ff6f47;
    pointer-events: none;
  }
}

`;

export const Select = styled.select`
  font-size: 1rem;
  padding: .5rem;
  border: none;
  outline: none;
  width: 100%;
  appearance: none;
  cursor: pointer;
  appearance: none;
  height: 44px;

  &:focus {
    background: #ddd
  }

`;  

export const Option = styled.option`

`;

/////

export const DivList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  
  @media screen and (max-width: 450px) {
    border-top: 2px groove #ff6f47;
    border-radius: 15px;
  }

  `;

export const Ul = styled.ul`
  min-width: 30%;
  list-style: none;
`;

export const PEmpty = styled.p`
  text-align: center;
  font-size: 24px;

  @media screen and (max-width: 450px) {
    margin-top: 30px;
    font-size: 18px;
  }
`;

///////

export const DivLi = styled.div`
  margin: 20px 0.5rem;
  background: white;
  font-size: 1.5rem;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease;
  width: 500px;
  height: 48px;

  ${(props) => props.delete && css`
    transform: translateY(10rem) rotateZ(20deg);
    opacity: 0;
  `}

  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
    width: 290px;
  }

`;

export const Li = styled.input`
  flex: 1;
  height: 48px;
  padding: .4rem .5rem;
  border: none;
  outline: none;
  color: #000;
  font-size: 16px;

  ${(props) => props.completed && css`
    text-decoration: line-through;
    opacity: .5;
  `}

  @media screen and (max-width: 800px) {
    overflow: hidden;
    height: 48px;
}
`;

export const BtnCheck = styled.button`
  background: rgb(11, 212, 162);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  height: 48px;

  @media screen and (max-width: 800px) {

}

`;

export const IconCheck = styled(FaCheck)`

`;

export const BtnTrash = styled.button`
  background: #ff6f47;
  color: #fff;
  border: none;
  padding: 1rem;
  cursor: pointer;
  height: 48px;
`;

export const IconTrash = styled(FaTrash)`

`;