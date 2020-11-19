import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${(props) => (props.secondery ? '#E6E6E6' : '#FFD82B')};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
`;

export default Button;
