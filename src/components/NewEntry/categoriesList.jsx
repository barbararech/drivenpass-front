import styled from "styled-components";
import { useState, useContext, useEffect } from "react";

export default function RenderCategory() {
  const [activeListItem, setActiveListItem] = useState("");

  const categoriesList = [
    "Credenciais",
    "Notas Seguras",
    "Cartões",
    "Senhas de Wi-fi",
  ];

  function handleClick(index) {
    // setCategory(category);
    activeListItem === index ? setActiveListItem("") : setActiveListItem(index);
  }

  return (
    <CategoryContainer>
      {categoriesList.map((el, index) => (
        <CategoryButton
          item={index}
          // key={el}
          handleClick={handleClick}
          isActive={activeListItem}
          onClick={() => handleClick(index)}
        >
          {el}
        </CategoryButton>
      ))}
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
`;

const CategoryButton = styled.button`
  width: 156px;
  height: 44px;
  margin-right: 10px;
  margin-top: 20px;
  border-radius: 10px;
  /* color: #5e25da; */
  font-size: 15px;
  /* font-weight: 700; */
  border: 1px solid #ddd;
  background-color: ${(props) =>
    props.isActive === props.item ? "#ddd" : "#fff"};
  pointer-events: ${(props) =>
    props.isActive === props.item ? "none" : "auto"};
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;
