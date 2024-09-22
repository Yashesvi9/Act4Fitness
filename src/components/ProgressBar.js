import React, { useState, useEffect } from 'react';
import './css/progressBar.css';

function ProgressBar({label, unit, value, maxValue }) {
  let percent = ((value / maxValue) * 100).toPrecision(3);
  return (
    <div className="card">
      <div className="percent">
        <svg>
          <circle cx="105" cy="105" r="100"></circle>
          <circle
            cx="105"
            cy="105"
            r="100"
            style={{
              '--percent':
                percent <= 0 ? 0 : percent > 0 && percent < 100 ? percent : 100,
              display: percent <= 0 ? 'none' : 'block',
            }}
          ></circle>
        </svg>
        <div className="number">
          <h3>
            {value <= 0 ? 0 : value > 0 && value < maxValue ? value : maxValue}
            <span>{unit}</span>
          </h3>
        </div>
      </div>
      <div className="title">
        <h2>{label}</h2>
      </div>
    </div>
  );
}

ProgressBar.defaultProps = {
  label: 'Progress',
  unit: '%',
  value: 35,
  maxValue: 100,
};

export default ProgressBar