import React, { useState, useEffect } from 'react';

function AdminPage() {
    const [repairRequests, setRepairRequests] = useState([]);

    // Fetch all repair requests when the component is mounted
    useEffect(() => {
        fetch('/api/repair-requests')  // Update with your API endpoint
            .then(response => response.json())
            .then(data => setRepairRequests(data));
    }, []);

    function updateStatus(id, newStatus) {
        fetch(`/api/repair-requests/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus })
        })
        .then(response => response.json())
        .then(data => {
            // Update the repairRequests state with the updated data
            setRepairRequests(prevRequests => {
                return prevRequests.map(request => {
                    if (request.id === id) {
                        return { ...request, status: newStatus };
                    } else {
                        return request;
                    }
                });
            });
        });
    }

    return (
        <div>
            <h1>Admin Page</h1>
            <p>This page is only accessible by admins.</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Device</th>
                        <th>Issue</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {repairRequests.map(request => (
                        <tr key={request.id}>
                            <td>{request.id}</td>
                            <td>{request.name}</td>
                            <td>{request.device}</td>
                            <td>{request.issue}</td>
                            <td>{request.status}</td>
                            <td>
                                <select onChange={(e) => updateStatus(request.id, e.target.value)} value={request.status}>
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPage;
