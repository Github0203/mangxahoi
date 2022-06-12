import styled from "styled-components";
export const Tabs = styled.div`
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: auto;
  position: relative;

  border-bottom: ${props => (props.active ? "1px solid #333" : "")};
 
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.3s ease-in-out;

  :hover {
    color: blue;
  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;
// background-color: ${props => (props.active ? "white" : "lightgray")};