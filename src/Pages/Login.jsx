import React from 'react'
import Navbar from "../Components/Navbar"
const Login = () => {
  return (
    <>
    <Navbar />
     <div className="flex items-center justify-center min-h-screen bg-gray-100"> 
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg"> 
          <h2 className="text-center text-2xl font-semibold text-gray-700">Login</h2> 
          <form className="space-y-6"> 
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" required className="block w-full p-3 mt-2 text-gray-900 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500" /> 
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label> 
              <input type="password" id="password" required className="block w-full p-3 mt-2 text-gray-900 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"> 
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a></p> 
        </div>
      </div>
      </>  )
}

export default Login