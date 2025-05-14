import React, { useState, useEffect } from 'react';
import axios from 'axios';
 import { useNavigate } from 'react-router-dom'; // ✅ Step 1

const PendingInvitations = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [processingRequestId, setProcessingRequestId] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
const navigate = useNavigate(); // ✅ Step 2
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        const response = await axios.get('/api/hackathons/certificates/requests', config);
        setRequests(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch certificate requests');
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleAccept = async (requestId, hackathonId) => {
    try {
      setProcessingRequestId(requestId);
      setSuccessMessage(null);
      setError(null);
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      await axios.post(`/api/hackathons/certificates/requests/${requestId}/accept`, {}, config);
      setSuccessMessage('Certificate minted successfully');
      // Remove accepted request from list
      setRequests(prev => prev.filter(r => r.requestId !== requestId));
      setProcessingRequestId(null);
       navigate(`/hackathons/certificate/${hackathonId}`);
    } catch (err) {
      console.log(err);
      setProcessingRequestId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-center mt-8">{error}</div>
    );
  }

  if (requests.length === 0) {
    return (
      <div className="text-center mt-8 text-gray-600">
        No pending certificate requests.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Pending Certificate Requests</h1>
      {successMessage && (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-6">
          {successMessage}
        </div>
      )}
      <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="px-4 py-2">Hackathon</th>
              <th className="px-4 py-2">Requested At</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(request => (
              <tr key={request.requestId} className="border-b">
                <td className="px-4 py-2">{request.hackathonTitle}</td>
                <td className="px-4 py-2">{new Date(request.requestedAt).toLocaleString()}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleAccept(request.requestId, request.hackathonId)}
                    disabled={processingRequestId === request.requestId}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded"
                  >
                    {processingRequestId === request.requestId ? 'Processing...' : 'Mint Certificate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingInvitations;
