const ProjectDescription = () => {
  const inProgress = (
    <>
      <text className="line-through">{"MVVM Design Pattern"}</text>
      <text>{" (planning)"}</text>
    </>
  );
  return (
    <div className="text-base">
      <h1 className="text-2xl font-bold">Mega App</h1>
      <p>
        Mega App is a central repository designed to host a variety of
        applications. These applications are aimed at enhancing programming
        skills and fostering collaboration.
      </p>
      <br />
      <h2 className="text-xl font-semibold">Featured Applications:</h2>
      <p>
        Within our "react-vite" sub-repo, you'll discover various sub-projects:
      </p>
      <ul className="list-disc pl-4 mb-4">
        <li className="mb-2">
          <strong>Note App:</strong> A dynamic note-taking application developed
          with React, Tailwind CSS, and TypeScript.
        </li>
        <li className="mb-2">
          <strong>Todo App:</strong> Efficiently manage tasks using this
          application, built with the same technology stack.
        </li>
      </ul>
      <h2 className="text-xl font-semibold">Technology Stack:</h2>
      <p>Mega App utilizes the following technology stack:</p>
      <ul className="list-disc pl-4 mb-4">
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li className="">{inProgress}</li>
      </ul>
      <p>
        Whether you're an experienced developer or just beginning your coding
        journey, Mega App provides valuable resources for exploration. Feel free
        to explore the applications, delve into the code, and get a better
        understanding of this repository.
      </p>
    </div>
  );
};

export default ProjectDescription;
