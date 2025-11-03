import { useParams } from "react-router-dom";

export default function Editor() {
  const { templateId } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Resume Editor</h1>
      <p className="text-gray-600">
        You’re editing template ID: <span className="font-semibold">{templateId}</span>
      </p>
    </div>
  );
}
