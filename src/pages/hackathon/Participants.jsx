import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Participants = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        setLoading(true);
        // Assuming backend API to get participants for organizer's hackathons
        const response = await axios.get('/api/hackathons/organizer/participants', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setParticipants(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch participants');
        setLoading(false);
      }
    };

    fetchParticipants();
  }, []);

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

  if (participants.length === 0) {
    return (
      <div className="text-center mt-8 text-gray-600">
        No participants found for your hackathons.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Participants</h1>
      <div className="bg-white rounded-xl shadow-md p-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Hackathon</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant) => (
              <tr key={participant._id} className="border-b">
                <td className="px-4 py-2">{participant.name}</td>
                <td className="px-4 py-2">{participant.email}</td>
                <td className="px-4 py-2">{participant.hackathonTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Participants;
