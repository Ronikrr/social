import React from 'react';

const Modal = ({ isOpen, onClose, job }) => {
    if (!isOpen || !job) return null; // Ensure job is available

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen overflow-x-hidden overflow-y-auto bg-black bg-opacity-50">
            <div className="w-full relative lg:w-[800px] h-[1200px] mt-[500px] p-[50px] overflow-y-scroll bg-white rounded shadow-lg ">
                <h2 className="text-xl lg:text-[2rem] mb-[1rem] font-extrabold">{job.position} {job.experience}</h2>
                {/* <p className="mt-2"><strong>ID:</strong> {job.id}</p> Display the job ID */}
                {/* <p className="mt-2"><strong>Experience:</strong> </p> */}
                <p className="mt-2 text-[18px] ">{job.type}  <span className="text-[24px] leading-[1.2] font-extrabold " >•</span>{job.department} </p>
                <p className="mt-2 text-[20px]"><strong>What it About :</strong>  </p>
                <p className="mt-2">{job.description.summary} </p>
                <p className="mt-2"> "{job.description.quote}"</p>
                <p className="mt-2"> {job.description.pitch}</p>

                <div className="mt-4 max-h-60"> {/* Scrollable content area */}
                    <h3 className="font-bold">Responsibilities:</h3>
                    <ul className="list-disc list-inside">
                        {job.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>

                    <h3 className="mt-4 font-bold">Requirements:</h3>
                    <p><strong>Experience:</strong> {job.requirements.experience}</p>
                    <ul className="list-disc list-inside">
                        {job.requirements.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <p><strong>Portfolio:</strong> {job.requirements.portfolio}</p>

                    <h3 className="mt-4 font-bold">Must-Have Attributes:</h3>
                    <ul className="list-disc list-inside">
                        {job.must_have_attributes.map((attribute, index) => (
                            <li key={index}>{attribute}</li>
                        ))}
                    </ul>

                    <h3 className="mt-4 font-bold">Advantages:</h3>
                    <ul className="list-disc list-inside">
                        {job.advantages.map((advantage, index) => (
                            <li key={index}>{advantage}</li>
                        ))}
                    </ul>
                </div>

                <button onClick={onClose} className="absolute top-[0px] right-[0%] font-bold px-4 py-2 mt-4 text-black  rounded">
                    <i class="bi bi-x-lg"></i>
            </button>
            </div>
        </div>
    );
};

export default Modal;