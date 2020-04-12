import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'

type LogoProps = {};

export const Logo: React.FC<LogoProps> = () => {
    return (
        <div className="app-logo">
            <FontAwesomeIcon style={{fontSize: 40}}  icon={faShieldAlt}/> 
            <span>honest number</span>
        </div>
    );
}