import React, { ReactNode } from 'react';

interface BlogPageLayoutProps {
  children: ReactNode;
}

export default function BlogPageLayout({ children }: BlogPageLayoutProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {children}
    </div>
  );
}