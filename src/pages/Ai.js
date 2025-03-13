import React from "react";

const files = [
    { name: "Miljøbelastning bilvask", url: "/files/miljoebelastning-manuel-bilvask.pdf" },
  ];

const Ai = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Materialer</h1>
      <ul className="space-y-2">
        {files.map((file, index) => (
          <li key={index} className="bg-gray-800 p-4 rounded-lg">
            <a
              href={file.url}
              className="text-blue-400 hover:underline"
              download
            >
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ai;