
import React from 'react';

const AuthLayout = ({ children, imageUrl }: { children: React.ReactNode, imageUrl: string }) => {
  return (
    <div className="min-h-screen flex bg-background-light">
      <div className="w-1/2 flex items-center justify-center p-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
      <div className="w-1/2 bg-gray-100 flex items-center justify-center p-12">
        <img src={imageUrl} alt="Financial Illustration" className="max-w-full h-auto rounded-lg" referrerPolicy="no-referrer" />
      </div>
    </div>
  );
};

export default AuthLayout;
