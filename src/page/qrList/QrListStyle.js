import styled, {css} from "styled-components";

export const ImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const QrImage = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
  ${props => props.clicked && css`
    border: 5px solid gray;
  `}
`;