import './index.css';
import {ReactComponent as Dollar} from './images/icon-dollar.svg';
import {ReactComponent as Person} from './images/icon-person.svg';
import {ReactComponent as Header} from './images/logo.svg';
import { useState } from 'react';
import { AppContainer } from './AppContainer';

const Button = ({tip, handleClickTip, custom, handleCustomTip}) => {
  return (
    <>
    <Btn idBtn='5%' targetValue='5' tip={tip} handleClickTip={handleClickTip}/>
    <Btn idBtn='10%' targetValue='10' tip={tip} handleClickTip={handleClickTip}/>
    <Btn idBtn='15%' targetValue='15' tip={tip} handleClickTip={handleClickTip}/>
    <Btn idBtn='25%' targetValue='25' tip={tip} handleClickTip={handleClickTip}/>
    <Btn idBtn='50%' targetValue='50' tip={tip} handleClickTip={handleClickTip}/>
    <input className='custom' type='number' name='number' placeholder='Custom' dir='rtl' value={custom} onChange={handleCustomTip}/>
 </>
  )
}

const Btn = ({idBtn, targetValue, handleClickTip, tip}) => {
  return (
    <button className={`btn ${targetValue === tip ? "active" : "" }`} type='button' value={targetValue} onClick={handleClickTip}>{idBtn}</button>
  )
}

function App() {
  const [bill, setBill] = useState("");
  const [person, setPerson] = useState("");
  const [tip, setTip] = useState("");
  const [custom, setCustom] = useState("");

  const handleChangeBill = (event) => {
    setBill(event.target.value);
  }

  const handleChangePerson = (event) => {
    setPerson(event.target.value);
  }

  const handleClicktip = (event) => {
    setCustom("");
    setTip(event.target.value);
  }

  const handleCustomTip = (event) => {
    setTip("");
    setCustom(event.target.value)
  }

  const handleClickReset = () => {
    setBill("");
    setPerson("");
    setTip("");
    setCustom("");
  }

  let tipHolder = (tip !== "") ? tip : (custom !== "") ? custom : "0";

  let tipAmount = (parseInt(
                   ((parseFloat(bill) * (parseFloat(tipHolder) / 100))
                         / parseInt(person)) * 100 ) / 100);

  let totalAmount  = ((parseFloat(bill) * (parseFloat(tipHolder) / 100)) /
                      parseInt(person) +
                        parseFloat(bill) / parseInt(person)).toFixed(2); 

  return (
    <div className="App">
        <header>
          <Header/>
        </header>
        <div className="main">
          <AppContainer>
      <div className='first'>
        <div className='Bill'>
        <label htmlFor='number'>
          Bill
        <Dollar className='dollar'/>
        <input className={`input-dollar`}
         type='number' 
         name='number' 
         dir='rtl' 
         onChange={handleChangeBill}
         value={bill}
         placeholder='0'/>
        </label>
        </div>
        <h5 className='tip'>Select Tip %</h5>
        <div className='button-percent'>
          <Button tip={tip} handleClickTip={handleClicktip} custom={custom} handleCustomTip={handleCustomTip}/>
        </div>
        <div className='person-div'>
        <label htmlFor='number'>Number Of People</label>
          <Person className='person'/>
          <input 
           type='number'
           name='number' 
           dir='rtl' 
           onChange={handleChangePerson} 
           value={person}
           placeholder='0'
            />
       </div>
      </div>
      <div className='second'>
        <div className='inside-div'>
        <div className='tip-amount'>
          <div>
          <h5>Tip Amount</h5>
          <h6>/ person</h6>
        </div>
        <p className='percents'>$
          {bill !== "" && person !== "" ? tipAmount : "0.00"}
        </p>
        </div>
        <div className='total'>
          <div>
          <h5>Total</h5>
          <h6>/ person</h6>
        </div>
        <p className='percents'>$
        {bill !== "" && person !== "" ? totalAmount : "0.00"}</p> </div>
      <div>
        <button className='reset' type='button' onClick={handleClickReset} disabled={
          bill !== "" || tip !== "" || custom !== "" || person !== ""
          ? false
          : true
        }>Reset</button>
      </div>
        </div>
      </div>
      </AppContainer>
        </div>
      
    </div>
  );
}

export default App;
