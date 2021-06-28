import React, { ReactNode } from 'react';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
      <div className="flex flex-col justify-center min-h-screen py-12 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 sm:px-6 lg:px-8">
        {children}
      </div>
  );
};

export { AppLayout };
