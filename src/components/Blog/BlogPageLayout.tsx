import React from 'react';

export default function BlogPageLayout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {children}
    </div>
  );
}
