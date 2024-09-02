import React from 'react';

const GridView = ({ data, onTileClick }) => {
  return (
    <div className="font-poppins grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 p-4 shadow ">
      {data.map((user, index) => (
        <div
        key={index}  
        className="p-5 border rounded bg-gray-800 border-zinc-400 cursor-pointer flex flex-col items-center shadow-md"
        onClick={() => onTileClick(user)}
        >
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="rounded-full w-20"
        />
        <div className="font-bold m-2 mt-2 text-base text-white text-center">{`${user.name.first} ${user.name.last}`}</div>
        <div className='text-xs text-gray-400 mb-2 text-center'>{`${user.location.city}, ${user.location.country}`}
        </div>
        </div> 
        
      ))}


    </div>

    
  );
};






export default GridView;
