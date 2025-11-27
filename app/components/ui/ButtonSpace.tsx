'use client';

import React from 'react';

export default function ButtonSpace() {
    return (
        <button type="button" className="btn">
            <strong>View my works</strong>
            <div id="container-stars">
                <div id="stars"></div>
            </div>

            <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </button>
    );
}