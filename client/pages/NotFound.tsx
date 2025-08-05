import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-tripkaa-purple-lightest via-tripkaa-purple-lightest to-tripkaa-purple-light">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-6xl font-bold mb-4 text-tripkaa-purple">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-tripkaa-purple text-white px-6 py-3 rounded-xl font-medium text-base hover:bg-tripkaa-purple/90 transition-colors inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
