import React from 'react';

function StatusPage() {
    return (
        <div>
            <h1>Check Repair Status</h1>
            <p>Please enter your repair request ID to check the status of your repair.</p>
            <input type="text" placeholder="Enter Repair Request ID" />
            <button>Check Status</button>
        </div>
    );
}

export default StatusPage;
