import React, { useState } from 'react';

interface AgeVerificationModalProps {
  onVerified: () => void;
}

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({ onVerified }) => {
  const [showExitMessage, setShowExitMessage] = useState(false);

  const handleExit = () => {
    setShowExitMessage(true);
  };

  return (
    <div className="fixed inset-0 bg-brand-dark bg-opacity-90 flex items-center justify-center z-[100] transition-opacity duration-300">
      <div className="bg-brand-secondary rounded-lg shadow-2xl p-8 text-center max-w-md mx-4 transform transition-all duration-300 scale-100">
        {!showExitMessage ? (
          <>
            <h2 className="text-3xl font-extrabold text-brand-primary mb-4">Age Verification</h2>
            <p className="text-brand-light mb-8">
              You must be 18 years or older to enter this site.
              Please confirm your age.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={onVerified}
                className="bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-transform transform hover:scale-105 duration-300"
              >
                I am 18+
              </button>
              <button
                onClick={handleExit}
                className="bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-600 transition-transform transform hover:scale-105 duration-300"
              >
                I am not
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-extrabold text-red-500 mb-4">Access Denied</h2>
            <p className="text-brand-light">
              We're sorry, but you must be 18 or older to access this site.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AgeVerificationModal;
