import React from 'react';

const TileView = ({ data, onTileClick }) => {
  return (
    <div className="font-poppins grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 cursor-pointer">
      {data.map((user, index) => (
        <div
          key={index}  
          className="p-4 border rounded bg-gray-800 border-zinc-400 shadow-md"
          onClick={() => onTileClick(user)}
        >
         <div className='flex flex-row justify-between'>
         <img
            src={user.picture.medium}
            alt={`${user.name.first} ${user.name.last}`}
            className="rounded-full mb-2"
          />
         <div className="flex justify-end items-start space-x-2 h-10">
            <button className="text-white bg-slate-950 rounded-full p-2"><span className='text-center'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path stroke-linecap="round" d="M8 11h32M18 5h12"/><path fill="currentColor" d="M12 17h24v23a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3z"/></g></svg></span></button>
            <button className="text-white bg-slate-950 rounded-full p-2"><span className='text-center'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M16.577 8.526L6.658 5.219c-.3-.1-.45-.15-.554-.075S6 5.377 6 5.694V13l10.577-3.526c.588-.196.882-.294.882-.474s-.294-.278-.882-.474"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 13V5.694c0-.317 0-.475.104-.55s.254-.025.554.075l9.919 3.307c.588.196.882.294.882.474s-.294.278-.882.474zm0 0v6"/></g></svg></span></button>
            <button className="text-white bg-slate-950 rounded-full p-2"><span className='text-center'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M21.65 3.434a4.889 4.889 0 1 1 6.915 6.914l-.902.901l-6.914-6.914zM19.335 5.75L4.357 20.73a3.7 3.7 0 0 0-1.002 1.84l-1.333 6.22a1 1 0 0 0 1.188 1.188l6.22-1.333a3.7 3.7 0 0 0 1.84-1.002l14.98-14.98z"/></svg></span></button>
          </div>
         </div>

          
           

          <div className="font-bold text-white">{`${user.name.first} ${user.name.last}`}</div>
          <div className='text-gray-400'>{user.email}</div>
          <div className='text-gray-400'>{`${user.location.city}, ${user.location.country}`}</div>
          
          
        </div>
      ))}
    </div>
  );
};

export default TileView;
