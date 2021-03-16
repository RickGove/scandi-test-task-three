import PropTypes from 'prop-types';
import React from 'react';

import './ProgressBar.style.scss';

/** @namespace ScandiTestTask/ProgressBar/ProgressBar */

export default function ProgressBar(props) {
    const { checkoutStep } = props;

    const labelA = checkoutStep !== 'SHIPPING_STEP' ? '✔' : '1';
    const labelB = checkoutStep !== 'DETAILS_STEP' ? '2' : '✔';

    return (
    <div className="wrap">
        <div className="left-bar left" />
        <div className="step">
            <p className="circled">{ labelA }</p>
            <p>Shipping</p>
        </div>
        <div className={ checkoutStep === 'SHIPPING_STEP' ? 'middle-bar inactive' : 'middle-bar' } />
        <div className="step">
            <p className={ checkoutStep !== 'DETAILS_STEP' ? 'circled inactive' : 'circled' }>{ labelB }</p>
            <p>Review</p>
        </div>
        <div className={ checkoutStep === 'DETAILS_STEP' ? 'left-bar' : 'left-bar inactive' } />
    </div>
    );
}

ProgressBar.propTypes = {
    checkoutStep: PropTypes.string
};

ProgressBar.defaultProps = {
    checkoutStep: ''
};
