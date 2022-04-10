import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: var(--White);
  width: 770px;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(2, 375px);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 30px 0px 10px 30px;
  margin-top: -20px;

  .second > .inside-div {
    background-color: var(--Very-dark-cyan);
    border-radius: 20px;
    padding: 20px 20px 5px 30px;
    color: var(--White);
    font-size: 15px;

    .tip-amount, .total {
      display: flex;
      padding-bottom: 1px;
      height: 80px;
      align-items: center;
      h6 {
        color: var(--Strong-cyan);
      }
    }

    .percents {
      flex: 2;
      direction: rtl;
      font-size: 33px;
      color: var(--Strong-cyan);
  }
  }

  .custom {
    background-color: var(--Light-grayish-cyan);
    color: var(--Dark-grayish-cyan);
    border: none;
    border-radius: 5px;
    padding-right: 8px;
    font-size: 20px;
    font-weight: 700;
    color: var(--Very-dark-cyan);
    font-family: 'Space Mono', monospace;
  }

  h6 {
    margin-top: -15px;
  }
  input:hover, input:focus {
    outline: none;
    cursor: pointer;
    border: 2px solid var(--cyan) ;
  }

  input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
 .button-percent {
      margin-top: -17px;
      margin-bottom: 35px;
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: 40px 40px;
      grid-gap: 10px;
    }

    .tip {
      font-size: 17px;
      color: var(--Dark-grayish-cyan);
    }

    .btn {
      background-color: var(--Very-dark-cyan);
      border: none;
      border-radius: 5px;
      color: var(--White);
      font-size: 18px;
      font-family: 'Space Mono', monospace;
      cursor: pointer;
    }

    .active  {
     background-color: hsl(183, 100%, 30%);
    }

    .zero {
      border-color: red;
    }

    .reset {
      margin-top: 85px;
      background-color: var(--Strong-cyan);
      height: 40px;
      border: none;
      width: 300px;
      border-radius: 5px;
      color: var(--Very-dark-cyan);
      text-transform: uppercase;
      font-weight: 700;
      font-size: 16px;
    }

    .reset:hover {
      cursor: pointer;
      background-color: hsl(172, 67%, 60%);
    }

    .reset:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

  .Bill, .person-div {
    display: grid;
    grid-template-rows: repeat(2);
    height: 60px;
    width: 300px;
    position: relative;
    label {
      font-size: 17px;
      color: var(--Dark-grayish-cyan);
      letter-spacing: 1px;
    }

    input > .zero {
      border: 1px solid red;
    }
    input {
      height: 27px;
      width: 320px;
      border: none;
      background-color: var(--Light-grayish-cyan);
      border-radius: 5px;
      font-size: 20px;
      color: var(--Very-dark-cyan);
      font-weight: 700;
      font-family: 'Space Mono', monospace;
    }
    input:hover, input:focus {
    outline: none;
    cursor: pointer;
    border: 2px solid var(--cyan) ;
  }
    .person {
      position: absolute; 
      top: 60%;
      left: 3%;
    }
    .dollar {
      position: absolute; 
      top: 50%;
      left: 3%;
    }
    
  }
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 350px;
    width: 360px;
    height: 580px;
    top: 60%;


    .reset {
      margin-top: 0px;
    }
    .second {
      padding: 10px 10px 0px 0px;
    }
    .second > .inside-div {
      padding-left: 20px;
    }

  }

`;
