import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

//CardList
export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 10px;
  width: 100%;
  height: auto;
`;

// Card
export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: black;
  overflow: hidden;
  width: 300px;
  height: 300px;
  margin: 10px;
  padding: 10px;
  color: white;
`;

export const NavLinks = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

export const CardImg = styled.img`
  border-radius: 20px;
  witdh: auto;
  height: 200px;
`;

export const CardTitle = styled.h3`
  fontheight: 1.8rem;
`;

export const CardPrice = styled.h4`
  fontheight: 1.2rem;
`;

// Details
export const DetailsImg = styled.img`
  witdh: auto;
  height: 500px;
`;
