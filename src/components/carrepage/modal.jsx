import React from 'react';

const Modal = ({ isOpen, onClose, job }) => {
    if (!isOpen || !job) return null; // Ensure job is available

    return (
        <div className="fixed inset-0 flex items-center justify-center w-screen h-screen overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 z-9999999">
            <div className="w-full lg:w-[800px] h-[600px] mt-[100px] p-5 overflow-y-auto bg-white rounded shadow-lg ">
                <h2 className="text-xl font-bold">{job.position}</h2>
                {/* <p className="mt-2"><strong>ID:</strong> {job.id}</p> Display the job ID */}
                <p className="mt-2"><strong>Experience:</strong> {job.experience}</p>
                <p className="mt-2"><strong>Type:</strong> {job.type}</p>
                <p className="mt-2"><strong>Department:</strong> {job.department}</p>
                <p className="mt-2"><strong>Description:</strong> {job.description.summary}</p>
                <p className="mt-2"><strong>Quote:</strong> "{job.description.quote}"</p>
                <p className="mt-2"><strong>Pitch:</strong> {job.description.pitch}</p>

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

            </div>
            <button onClick={onClose} className="absolute top-[125px] right-[25%] px-4 py-2 mt-4 text-white bg-red-500 rounded">
                *
            </button>
        </div>
    );
};

export default Modal;