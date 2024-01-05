import { useContext, useState } from "react";
import footerImg from "../assets/Vector.png";
import { AppContext } from "../context/AppContext";
const AddProject = () => {
  const [projectDesc, setProjectDesc] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const { projectsArr, setProjectsArr } = useContext(AppContext);
  const handleName = (event) => {
    setProjectName(event.target.value);
  };
  const handleDesc = (event) => {
    setProjectDesc(event.target.value);
  };
  const handleLink = (event) => {
    setProjectLink(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setProjectsArr([...projectsArr, { projectDesc, projectLink, projectName }]);
    setProjectDesc("");
    setProjectLink("");
    setProjectName("");
  };
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="font-bold text-5xl mt-20 lg:mb-20 lg:mt-0 text-center">
        Add Project
      </h2>
      <form
        className=" px-10 w-full lg:px-0 lg:w-[400px] flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="projectName">Project Name</label>
          <input
            onChange={handleName}
            value={projectName}
            type="text"
            id="projectName"
            className="outline-none border borer-1 border-gray-300 rounded-md h-[40px] px-3"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="projectLink">Project Link</label>
          <input
            value={projectLink}
            type="text"
            onChange={handleLink}
            id="projectLink"
            className="outline-none border borer-1 border-gray-300 rounded-md h-[40px] px-3"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="projectDesc">Description</label>
          <textarea
            value={projectDesc}
            type="text"
            rows={6}
            onChange={handleDesc}
            id="projectDesc"
            className="outline-none border borer-1 border-gray-300 rounded-md px-3"
          />
        </div>
        <button
          type="submit"
          className="bg-[#FDC435] rounded-md px-[24px] py-[8px] self-end"
        >
          Add
        </button>
      </form>
      <img src={footerImg} alt="footer" className="w-full" />
    </div>
  );
};

export default AddProject;
