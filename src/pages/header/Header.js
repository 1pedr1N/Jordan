import React from 'react';
import ReactDOM from 'react-dom';
import Jordan from './jordan.svg'
import Jordan1 from './airjordan1.svg'
import Jordan2 from './jordan2.svg'
import Jordan3 from './jordan3.svg'
import Jordan4 from './jordan4.svg'
import Jordan5 from './jordan5.svg'
import Jordan6 from './jordan6.svg'
import Jordan7 from './jordna7.svg'
import Jordan8 from './jordan8.svg'
import './Header.css';

function Header() {
  return (

    <div className="Container">
      {/* Header */}
        <div>
<h2 className='promotion'>Get $10.00 off shipping</h2>
</div>
<div>
    <h1 className='title'>HypeShoes</h1>
    <h4 className='subTitle'> The best store for you shoes</h4>
</div>
{/*BackGround */}
<div className='jordan'> 
<div className='textJordan'>
<span className='titleJordan'>The Best Store For Jordans</span>
<h4>The first Air Jordan was produced for Michael Jordan <br />during his time with the Chicago Bulls in 1984 and designed by Peter b. Moore.</h4>
</div>
 <img src={Jordan} /> 
 </div>
{/* Section */}
<div className='midTitle'> The Bests</div>
<div className='midSub'>Free shipping and free slipper is here, enjoy for an unlimited time 🔥</div>
{/*Shoes */}
<div className='row'> 
<div className='box'>
<img src={Jordan1} /> 
</div>
<div className='box1'>
<img src={Jordan2} /> 
</div>
<div className='box2'>
<img src={Jordan3} /> 
</div>
<div className='box3'>
<img src={Jordan4} /> 
</div>
</div>
<div className='row'> 
<div className='box'>
<img src={Jordan5} /> 
</div>
<div className='box1'>
<img src={Jordan6} /> 
</div>
<div className='box2'>
<img src={Jordan7} /> 
</div>
<div className='box3'>
<img src={Jordan8} /> 
</div>
</div>
{/* End Page*/}
<div className='endPage'>All rights reserved for Pedro Silva.</div>

    </div>
  
  );
}

export default Header;
