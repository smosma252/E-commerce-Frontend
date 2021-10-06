import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: lightpink;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 800;
`;

const Announcement = () => {
  return <Container>Free Shipping on Orders Over $99</Container>;
};

export default Announcement;
