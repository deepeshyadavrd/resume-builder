import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        ResumeBuilder
      </Link>
      <div className="space-x-4">
        <Link
          to="/templates"
          className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700"
        >
          Start Now
        </Link>
      </div>
    </nav>
  );
}