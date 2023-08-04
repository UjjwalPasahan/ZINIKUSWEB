import React ,{Text}from 'react';
import '../styles/Research.css';
import zini from '../assets/homepage/zinikus.png';
import Footer from './Footer.jsx';
import data from '../data/data.json';

const Research = (props) => {
  return (
    <div className="researchPage">
      <div className="onoffswitch3">
        <input
          type="checkbox"
          name="onoffswitch3"
          className="onoffswitch3-checkbox"
          id="myonoffswitch3"
          checked
        />
        <label className="onoffswitch3-label" for="myonoffswitch3">
          <span className="onoffswitch3-inner">
            <span className="onoffswitch3-active">
              <marquee className="scroll-text">
                ******ZINIKUS will do great!******{' '}
                <span className="glyphicon glyphicon-forward"></span> ZINIKUS
                showcases its reception robot in dubai tech expo.{' '}
                <span className="glyphicon glyphicon-forward"></span> ZINIKUS
                strikes a deal with a MNC in dubai.
              </marquee>
              <span className="onoffswitch3-switch">
                HEADLINE
                {/* <span className="glyphicon glyphicon-remove"></span> */}
              </span>
            </span>
            {/* <span className="onoffswitch3-inactive"><span className="onoffswitch3-switch">SHOW br/EAKING NEWS</span></span> */}
          </span>
        </label>
      </div>
      {/* <div className='listContainer'>
                <div className='scroll-parent'>
                    <ul className='listing'>
                        <li className='elements'>{`${props.info}`}</li>

                    </ul>
                </div>
            </div> */}
      <div className="gradC1"></div>
      <div className="gradE1"></div>
      <div id="mainContainer">
        <h1>Our Research Documents</h1>
        <div id="listContainer">
          <div id="box">
            <ul className="listing">
              <li className="elements">
                <div>
                  {data.map(element => {
                    return (
                      <ul>
                        <li><a>*:{element.name}</a></li>
                      </ul>
                    );
                  })}
                  {/* <div><label>Country :</label>
                                        <select>
                                            {data.country.map((country) => {
                                                return <option key={country.id} value={country.id}>{country.name}</option>
                                            })}
                                        </select>
                                    </div> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Research;
