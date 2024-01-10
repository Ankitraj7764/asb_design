import React from 'react'

const Profile = () => {
  const items = JSON.parse(localStorage.getItem('user'));
    const name = items.emailid;
  return (
    <div><div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-purple-500">
    <div className="max-w-lg bg-white rounded-lg shadow-lg p-8">
      <img className="w-32 h-32 rounded-full mx-auto mb-4" src={require('../../image/user.png')} alt="Photo" />
       
      <h2 className="text-2xl font-bold text-center mb-4">{name}</h2>
  
      <div className="flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 13a1 1 0 11-2 0 1 1 0 012 0zm-3.32-3.32a1 1 0 010-1.42l3.53-3.54a1 1 0 011.32-.08l4 3a1 1 0 11-1.24 1.56L11 8.23l-3.29 3.3z" clipRule="evenodd" />
        </svg>
        <p className="text-gray-500">{name}</p>
      </div>
  
      <div className="flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 13a1 1 0 11-2 0 1 1 0 012 0zm-3.32-3.32a1 1 0 010-1.42l3.53-3.54a1 1 0 011.32-.08l4 3a1 1 0 11-1.24 1.56L11 8.23l-3.29 3.3z" clipRule="evenodd" />
        </svg>
        <p className="text-gray-500">Score: 0</p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Profile