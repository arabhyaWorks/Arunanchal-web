import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

// In your Login component
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Check if user is admin (replace with your actual admin check logic)
  const isAdmin = email === 'admin@dia.gov.in'; // Example check
  
  if (isAdmin) {
    navigate('/admin'); // Navigate to admin dashboard
  } else {
    navigate('/dashboard'); // Navigate to regular user dashboard
  }
};


    return (
        <div className="min-h-screen flex">
            {/* Left Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-8">
                    {/* Logo and Header */}
                    <div className="text-center">
                        <img
                            src="https://indigenous.arunachal.gov.in/assets/images/logo_ap.png"
                            alt="Logo"
                            className="h-16 mx-auto mb-6"
                        />
                        <h2 className="text-3xl font-bold text-heading mb-2">Sign In</h2>
                        <p className="text-subheading">Login to stay connected.</p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="space-y-5">
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-heading mb-2">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-800 dark:border-gray-700"
                                        placeholder="xyz@example.com"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-heading mb-2">
                                    Password<span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white dark:bg-gray-800 dark:border-gray-700"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me and Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="show-password"
                                        name="show-password"
                                        type="checkbox"
                                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="show-password" className="ml-2 block text-sm text-gray-600 dark:text-gray-400">
                                        Save Password
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-teal-600 hover:text-teal-500">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>

                            {/* Alternative Login Options */}
                            <div className="flex items-center justify-between text-sm">
                                <a href="#" className="font-medium text-teal-600 hover:text-teal-500">
                                    Email OTP Login?
                                </a>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            Sign In
                        </button>

                        {/* Sign Up Link */}
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                            Don't have an account?{' '}
                            <button
                                onClick={() => navigate('/signup')}
                                className="font-medium text-teal-600 hover:text-teal-500">
                                Click here to sign up.
                            </button>
                        </p>
                    </form>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-blue-600/20 to-teal-500/20">
                <div className="h-full flex items-center justify-center p-12">
                    <img
                        src="https://indigenous.arunachal.gov.in/assets/images/auth/01.png"
                        alt="Tribal Art"
                        className="max-w-full h-auto object-contain"
                    />


                </div>


            </div>
        </div>
    );
}