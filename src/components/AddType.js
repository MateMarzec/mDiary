import React from 'react';
import { Link } from 'react-router-dom';
import add from '../images/add.png'

const AddType = () => (
  <main className='type__page'>
    <div className='type__boxes'>
        <Link className='blood--addBox linkBox' to="/create/blood">
            <img className='box__logo' src={add} alt="Add" />
            <div className='button'>
                <div className="button--text"><h4>Add Blood Test</h4></div>
            </div>
        </Link>
        <Link className='liver--addBox linkBox' to="/create/liver">
            <img className='box__logo' src={add} alt="Add" />
            <div className='button'>
                <div className="button--text"><h4>Add Liver Function Test</h4></div>
            </div>
        </Link>
    </div>
  </main>
);

export default AddType;
