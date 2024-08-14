import styled from "styled-components";
import { DetailContent, DetailItem } from "./Products/DetailPage";

export const CompareModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 15vh;
  background-color: #fff;
  @media (max-width: 768px) {
    height: 40vh;
  }
  @media (max-width: 576px) {
    height: 50vh;
  }
`;

export const CompareModalContent = styled.div`
content: "";
position: absolute;
width: 100%;
height: 90%;

`;

export const CompareItem = styled.div`
border-radius: .625rem;
border: 1px solid #e5e5e5;
padding: 1rem;
position: relative;
`;

export const CompareDetail = styled(DetailContent)`

`;

export const CompareDetailItem = styled(DetailItem)`
width: 100%;
&::after {
  display: none;
}
`;