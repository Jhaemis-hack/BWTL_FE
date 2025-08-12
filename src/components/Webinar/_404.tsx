import { Link } from "react-router-dom";

const _404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-9xl font-bold text-green-500">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <p className="mt-2 text-gray-400 text-center">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-600 rounded-lg text-white hover:bg-green-500 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
};

export default _404;
