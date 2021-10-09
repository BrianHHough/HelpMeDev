import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

import { Widget } from '@typeform/embed-react';

import './typeform.css';


const TypeFormPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle} />

            <Widget id="xAgCSQWc" style={{ 
                // marginTop: '13vh',
                width: '100%',
                height: '100vh'
                }} className="TypeFormProps" />
            
        </>
    )
}

export default TypeFormPage
