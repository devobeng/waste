import React, { useState } from "react";
import {
  FaMapMarkedAlt,
  FaTrash,
  FaTruck,
  FaClipboardCheck,
  FaCalendarAlt,
  FaCreditCard,
  FaTimes,
  FaBars,
} from "react-icons/fa";
interface StepsNavigationProps {
  currentStep: number;
}
const steps = [
  { label: "PostCode", icon: FaMapMarkedAlt },
  { label: "Waste Type", icon: FaTrash },
  { label: "Select Skip", icon: FaTruck },
  { label: "Permit Check", icon: FaClipboardCheck },
  { label: "Choose Date", icon: FaCalendarAlt },
  { label: "Payment", icon: FaCreditCard },
];
const StepsNavigation: React.FC<StepsNavigationProps> = ({ currentStep }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMobilMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full border-b border-gray-200">
      <div className="hidden md:flex justify-between items-center px-4 py-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          return (
            <div key={index} className="flex items-center w-full">
              <div className="flex flex-col items-center justify-center text-center w-full">
                <Icon
                  className={`text-lg mb-1 ${
                    isActive || isCompleted ? "text-blue-500" : "text-grey-500"
                  }`}
                />
                <span
                  className={`text-xs font-medium  ${
                    isActive || isCompleted ? "text-blue-500" : "text-grey-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex md:hidden justify-between items-center px-4 py-4">
        <h2 className="text-sm font-semibold">
          Step {currentStep + 1} of {steps.length}
        </h2>
        <button onClick={toogleMobilMenu}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            return (
              <div key={index} className="flex items-center space-x-2">
                <Icon
                  className={`text-lg mb-1 ${
                    isActive || isCompleted ? "text-blue-500" : "text-grey-500"
                  }`}
                />
                <span
                  className={`text-xs font-medium  ${
                    isActive || isCompleted ? "text-blue-500" : "text-grey-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StepsNavigation;
