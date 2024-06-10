import React from 'react';

function Projects() {
  return (
    <div className="max-w-4xl mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Project Title 1</h2>
          <p className="text-gray-300">
            Description of the first project. Explain the technologies used, the purpose of the project, and any key features.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Project Title 2</h2>
          <p className="text-gray-300">
            Description of the second project. Explain the technologies used, the purpose of the project, and any key features.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Project Title 3</h2>
          <p className="text-gray-300">
            Description of the third project. Explain the technologies used, the purpose of the project, and any key features.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
