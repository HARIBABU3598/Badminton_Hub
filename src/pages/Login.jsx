import React from 'react';
import bg from '../assets/bg.jpg';
import loginImage from '../assets/Login.jpg';

const Login = () => {
  return (
    <div
      className="bg-cover bg-center h-screen bg-black flex items-center justify-end"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div 
        className="h-[100%] w-[98%] mr-[1%] rounded border border-white/30 overflow-hidden"
        style={{
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(0, 0, 0, 0.6)"
        }}
      >
        <div className="flex flex-col items-center pt-3 h-full">
          <h1 className="text-white text-4xl font-semibold mb-3 bg-white/10 px-8 py-1 rounded backdrop-blur-sm">
            Welcome Back
          </h1>
          
          <div className="flex flex-col md:flex-row h-[79%] w-[60%] max-w-4xl bg-white/5 rounded-lg border border-white/20 backdrop-blur-sm overflow-hidden">
            <div className="w-full md:w-[60%] p-8 flex flex-col justify-center">
              <form className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white"
                    required
                  />
                </div>
                
                <div>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white"
                    required
                  />
                  <div className="flex justify-end mt-2">
                    <a href="/forgot-password" className="text-sm text-blue-300 hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 mt-4"
                >
                  Sign In
                </button>

                <div className="relative flex items-center justify-center my-4">
                  <div className="flex-grow border-t border-white/20"></div>
                  <span className="flex-shrink mx-4 text-white/50 text-sm">OR</span>
                  <div className="flex-grow border-t border-white/20"></div>
                </div>
                
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.786-1.664-4.145-2.675-6.735-2.675-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.496 10-10 0-0.67-0.069-1.325-0.189-1.955h-9.811z"/>
                  </svg>
                  Continue with Google
                </button>
              </form>
              
              <p className="text-white/70 text-sm mt-6 text-center">
                Don't have an account?{' '}
                <a href="/register" className="text-blue-300 hover:underline">
                  Register
                </a>
              </p>
            </div>
            
            <div className="hidden md:block md:w-[40%] h-full overflow-hidden">
              <img 
                src={loginImage} 
                alt="Login illustration" 
                className="h-[100%] w- object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;