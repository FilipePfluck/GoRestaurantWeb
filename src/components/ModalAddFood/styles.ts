import styled, { css } from 'styled-components';
import { Form as Unform } from '@unform/web';
import Input from '../../components/Input'

interface FormProps {
  type: string
}

export const Form = styled(Unform)<FormProps>`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 30px;
    margin-bottom: 20px;
  }

  span{
    color: #ccc;
    margin-top: 8px;
  }
  
  div{
    margin-top: 8px;
  }

  .horizontal{
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
    
    justify-content: space-between;

    Input {
      max-width: 250px;
    }
  }

  .categories{
    margin-top: 16px;
    max-width: 200px;
  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    width: 100%;

    & div {
      display: flex;
      justify-content: center;

      color: #fff;
      border-radius: 8px;
      padding: 15px 80px;
      background-color: #454545;
      max-width: 200px;

    }

    #massas {
      ${
        (props)=> props.type === 'massas' 
        && css `
          background-color: #C72828;

          img {
            filter: brightness(800%);
          }
        
        ` 
      }
    }

    #carnes {
      ${
        (props)=> props.type === 'carnes' 
        && css `
          background-color: #C72828;

          img {
            filter: brightness(800%);
          }
        
        ` 
      }
    }

    #pizzas {
      ${
        (props)=> props.type === 'pizzas' 
        && css `
          background-color: #C72828;

          img {
            filter: brightness(800%);
          }
        
        ` 
      }
    }

  }

  button {
    margin-top: 24px;
    align-self: flex-end;
  }

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      padding: 16px 16px;
      background: #41c900;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }
`;
