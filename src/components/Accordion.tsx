import React from 'react';

type Props = {
    title: string,
    children: React.ReactNode,
    isActive: boolean,
    onAccordionClick: () => void
}

const Accordion: React.FC<Props> = ({ title, children, isActive, onAccordionClick }) => {

    return (
        <div className="mb-6  rounded">
            <div
                className={`flex justify-between border border-gray-300 items-center cursor-pointer p-4 ${isActive ? 'bg-blue-500 border-blue-500' : ''}`}
                onClick={onAccordionClick} // Toggle the accordion when clicked
            >
                <h2 className={`text-lg ${isActive && 'text-white font-semibold'}`}>{title}</h2>
                <svg
                    className={`w-6 h-6 transition-transform transform ${isActive ? 'rotate-360 text-white' : 'rotate-0'}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isActive ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                    />
                </svg>
            </div>
            <div
                className={`  overflow-hidden border border-gray-300 transition-max-height duration-300 ease-in-out ${isActive ? 'max-h-96 mt-2' : 'max-h-0'}`}
            >
                <div className="p-4 border-t border-gray-300">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
