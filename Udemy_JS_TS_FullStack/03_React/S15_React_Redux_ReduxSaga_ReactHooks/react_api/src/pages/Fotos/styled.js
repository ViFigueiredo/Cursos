import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 180px;
    background-color: #eee;
    border: 5px dashed ${colors.primaryColor};
    border-radius: 50%;
    margin: 30px auto;
    cursor: pointer;
    overflow: hidden;

    img {
      width: 180px;
      height: 180px;
    }
  }

  input {
    display: none;
  }
`;
