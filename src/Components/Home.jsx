import React, { useEffect } from 'react'
import "../Components/HomeStyle.css"
import {


  Select,
  MenuItem,

  Button,
} from "@mui/material";
import Logo from "../assets/Frame.svg"
import useMediaQuery from '@mui/material/useMediaQuery';
import DoneIcon from '@mui/icons-material/Done';


function Home() {
  const isPhone = useMediaQuery('(max-width:500px)');
  const [term, setTerm] = React.useState("");
  const [income, setIncome] = React.useState(1);
  const [tax, setTax] = React.useState(0);
  const [displayTax, setDisplayTax] = React.useState(0)
  const [taxPrice, SetTaxPrice] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [netCapitalGain, setNetCapitalGain] = React.useState(0);
  const [gainValue, setGainValue] = React.useState(0);

  const [age, setAge] = React.useState(10)
  const [purchasePrice, setPurchasePrice] = React.useState(0);
  const [salePrice, setSalePrice] = React.useState(0);
  const [expense, setExpense] = React.useState(0);

  const calculateGain = () => {
    let gain = salePrice - purchasePrice - expense;
    setGainValue(gain);
  }
  const calculateTax = () => {
    if (income === 1) {
      SetTaxPrice("0")
      setTax("0");
    }
    else if (income === 2) {
      SetTaxPrice("18201");
      setTax("0 + 19");
      setDisplayTax(0.19 * netCapitalGain)
    }
    else if (income === 3) {
      SetTaxPrice("45001");
      setTax("5092 + 32.5");
      setDisplayTax(0.32 * netCapitalGain)

    }
    else if (income === 4) {
      SetTaxPrice("120001");
      setTax("29467 + 37")
      setDisplayTax(0.37 * netCapitalGain)

    }
    else if (income === 5) {
      SetTaxPrice("180001");
      setTax("51667 + 45")
      setDisplayTax(0.45 * netCapitalGain)

    }
    if (term === "long" && gainValue > 0) {
      const discountAccqired = (0.5) * gainValue;
      setDiscount(discountAccqired);

      const netGain = gainValue - discountAccqired;
      setNetCapitalGain(netGain);
    }
    else {
      setDiscount(0);
      const netGain = gainValue;
      setNetCapitalGain(netGain);
    }

  }
  useEffect(() => {
    calculateGain();
    calculateTax();
  }, [purchasePrice, salePrice, expense, income, term, gainValue])


  return (
    <div className='parent'>
      <div className='home-div'>

        <div className='home-child'>
          <h1>Free Crypto Tax Calculator Australia</h1>
          <form action="">
            <div className='input-field'>
              <div className='inp1'>
              <span className='head'>Financial Year</span>
              <Select
              className='select'
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                sx={{
                  width: "200px",
                  height: "45px",
                  borderRadius: "5px",
                  background: "#EFF2F5",
                  fontSize: (isPhone) ? "0.8rem" : "1rem",
                }}
              >
                <MenuItem   value={10}>FY 2023-24</MenuItem>
              </Select>
              </div>
              <div className='inp1'>

             
              <span className='head'>Country</span>
              <Select
              className='select'

                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                sx={{
                  width: "200px",
                  height: "45px",
                  borderRadius: "5px",
                  background: "#EFF2F5",
                  fontSize: (isPhone) ? "0.8rem" : "1rem",
                }}
              >
                <MenuItem className='menu' value={10}>FY 2023-24</MenuItem>
              </Select>
              </div>
            </div>
            <div className='hr'></div>

            <div className='inputs1'>
              <div className='input-child'>
                <span className='title'>Enter purchase price of Crypto</span>
                <div className='type-input'>
                  <span>$</span>
                  <input type="text" onChange={(e) => setPurchasePrice(e.target.value)} name="" id="" />
                </div>
              </div>
              <div className='input-child'>
                <span className='title'>Enter sale price of Crypto</span>
                <div className='type-input'>
                  <span>$</span>
                  <input type="text" name="" onChange={(e) => setSalePrice(e.target.value)} id="" />
                </div>
              </div>
            </div>

            <div className='inputs1'>
              <div className='input-child'>
                <span className='title'>Enter Your Expenses</span>
                <div className='type-input'>
                  <span>$</span>
                  <input type="text" onChange={(e) => setExpense(e.target.value)} name="" id="" />
                </div>
              </div>
              <div className='input-child'>
                <span className='title'>Investment Type</span>
                <div className='select-btn'>
                  <div className='click-btn'>


                    <Button
                   
                      variant="outlined"
                      className={`${term === "short" ? "selected-button" : ""} invest-btn `}
                      onClick={() => setTerm("short")}
                      sx={{
                        padding: "10px",
                        textTransform: "capitalize",
                        borderRadius: "6px",
                        paddingRight: "50px",
                        color: "#0F1629",
                        height: "50px",
                      }}
                      style={{
                        border: "1px solid #0F1629",
                      }}
                    >
                      Short Term
                      {
                        (term === "short") && <DoneIcon sx={{ position: 'absolute', right: '15px' }} />
                      }
                    </Button>
                    <span className='head'>{"< 12 months"}</span>
                  </div>
                  <div className='click-btn'>

                    <Button
                      className={`${term === "long" ? "selected-button" : ""} invest-btn`}
                      variant="outlined"
                      onClick={() => setTerm("long")}
                      sx={{
                        padding: "10px",
                        textTransform: "capitalize",
                        borderRadius: "6px",
                        paddingRight: "50px",
                        color: "#0F1629",
                        height: "50px",
                      }}
                      style={{
                        border: "1px solid #0F1629",
                      }}
                    >
                      Long Term
                      {
                        (term === "long") && <DoneIcon sx={{ position: 'absolute', right: '15px' }} />
                      }
                    </Button>
                    <span className='head'>{"> 12 months"}</span>
                  </div>

                </div>
              </div>
            </div>

            <div className='inputs1'>
              <div className='input-child'>
                <span className='title'>Select Your Annual Income</span>
                <Select
                className='select head annual'
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  sx={{
                    width: "335px",
                    height: "56px",
                    padding: '17px 16px',
                    borderRadius: "5px",
                    background: "#EFF2F5",
                    fontSize: (isPhone) ? "0.8rem" : "1rem",
                  }}
                >
                  <MenuItem className='menu' value={1}>$0 - $18,200</MenuItem>
                  <MenuItem className='menu' value={2}>$18,201 - $45,000</MenuItem>
                  <MenuItem className='menu' value={3}>$45,001 - $120,000</MenuItem>
                  <MenuItem className='menu' value={4}>$120,001 - $180,000</MenuItem>
                  <MenuItem className='menu' value={5}>$180,001+</MenuItem>
                </Select>
              </div>
              <div className='input-child'>
                <div className='rate'>
                  <span className='title'>Tax Rate</span>
                  <span className='heads'>$ {tax}% of excess over ${taxPrice}</span>
                </div>
              </div>
            </div>
             {
              term === "long" && gainValue > 0 ? 

                <div className='inputs1 capital'>
                  <div className='input-child'>
                    <span className='title'>Capital gain amount</span>
                    <div className='type-input'>
                      <span>$</span>
                      <input type="text" value={gainValue ? gainValue : '0.00'} name="" id="" />
                    </div>
                  </div>
                  <div className='input-child'>
                    <span className='title'>Discount for long term gains</span>
                    <div className='type-input'>
                      <span>$</span>
                      <input type="text" name="" value={discount ? discount : '0.00'} id="" />
                    </div>
                  </div>
                </div>
                 :
                <></>
            }


            <div className='final-res'>
              <div className='res1'>
                <span>Net Capital gain tax amount</span>
                <p>{netCapitalGain ? netCapitalGain : '$0.00'}</p>
              </div>
              <div className='res2'>
                <span>The tax you need to pay</span>
                <p>${displayTax}</p>
              </div>

            </div>
          </form>
        </div>

      </div>

      <div className='right-sec'>
        <div className='right-cont'>
          <h2>Get Started with KoinX for FREE</h2>

          <p>With our range of features that you can equip for free,
            KoinX allows you to be more educated and aware of your tax reports.</p>
          <img src={Logo} alt="" />
          <button>Get Started for FREE</button>
        </div>
      </div>
    </div>
  )
}

export default Home
