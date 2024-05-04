import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SwitchContainer = styled.div`
display: inline-block;
cursor: pointer;
`;

const Switch = styled.div`
width: 50px;
height: 30px;
border-radius: 15px;
background-color: ${({ isDay }) => (isDay ? '#ffd700' : '#000')};
transition: background-color 0.3s ease;
`;

const SwitchText = styled.p`
margin-top: 5px;
font-size: 14px;
color: ${({ isDay }) => (isDay ? '#000' : '#fff')};
`;

const SwitchNightMode = ({ mode }) => {
    const [isDay, setIsDay] = useState(mode);

    const toggleMode = () => {
        setIsDay(!isDay);
    };

    return (
        <SwitchContainer onClick={toggleMode}>
            <Switch isDay={isDay} className={isDay ? 'on' : ''} />
            <SwitchText isDay={isDay}>{isDay ? 'Day' : 'Night'}</SwitchText>
        </SwitchContainer>
    );
};

SwitchNightMode.propTypes = {
    mode: PropTypes.bool,
};

SwitchNightMode.defaultProps = {
    mode: false,
};

export default SwitchNightMode;
