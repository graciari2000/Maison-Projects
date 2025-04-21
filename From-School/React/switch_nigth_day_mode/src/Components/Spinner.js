import React, { useState } from 'react';
import '../css/Spinner.css'; // Import CSS for styling

const Spinner = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className={`spinner-container ${isVisible ? 'visible' : ''}`}>
            <div className="spinner"></div>
        </div>
    );
};

export default Spinner;