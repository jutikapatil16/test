import React from 'react';

const DetailedView = ({ item, onBack }) => {
  return (
    <div className="font-poppins fixed inset-0 flex justify-center items-center z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-2xl"
        onClick={onBack}
      ></div>
      
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-3/4 z-10">
        <button
          className="absolute top-2 right-2 text-2xl font-bold text-gray-600"
          onClick={onBack}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"/></svg>
        </button>
         
        <h2 className="text-2xl font-bold mb-3 text-center">{`${item.name.first} ${item.name.last}`}</h2>
        <div className='md:flex space-x-4'>
        <img
          src={item.picture.large}
          alt={`${item.name.first} ${item.name.last}`}
          className="mb-4 rounded w-80 h-80"
        />
        
        <div>
        <p className="mb-2"><strong>Student Id:</strong> {item.id.value}</p>
        <p className="mb-2"><strong>Email:</strong> {item.email}</p>
        <p className="mb-2"><strong>Phone:</strong> {item.phone}</p>
        <p className="mb-2"><strong>Gender:</strong> {item.gender}</p>
        <p className="mb-2"><strong>Location:</strong> {`${item.location.city}, ${item.location.country}`}</p>
        </div>
        <div>
        <p className="mb-2"><strong>Postcode:</strong> {item.location.postcode}</p>
        <p className="mb-2"><strong>Username:</strong> {item.login.username}</p>
        <p className="mb-2"><strong>Age:</strong> {item.dob.age}</p>
        <p className="mb-2"><strong>Registered date:</strong> {item.registered.date}</p>
        <p className="mb-2"><strong>Nationality:</strong> {item.nat}</p>
        </div>
        
        </div>
        
      
      </div>
    </div>
  );
};

export default DetailedView;
