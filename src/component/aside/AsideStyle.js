import styled, {css} from "styled-components";

export const Aside = styled.aside`
  width: 200px;
  height: 100%;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  margin-top: 31px;
`;

export const CategoryList = styled.ul`
  margin-right: 20px;
  list-style-type: none;
`;

const CategoryFontColor = css`
  color: #929292;
`;

export const ListTitle = styled.h2`
  font-size: 15px;
  margin-left: 20px;
  ${CategoryFontColor}
`;

export const ListElement = styled.li`
  width: 200px;
  margin-left: 40px;
  ${CategoryFontColor}
`;

export const ElementLink = styled.a`
  ${CategoryFontColor}
`;
