'use client';

import { SandpackProvider, SandpackLayout, SandpackPreview } from '@codesandbox/sandpack-react';
import { useTheme } from 'next-themes';

interface LivePreviewProps {
  code: string;
}

export default function LivePreview({ code }: LivePreviewProps) {
  // We need to wrap the code in a standard React component structure for Sandpack
  // if it's not already a full file. But usually our AI generates a component.
  // We'll assume the code is a valid React component file content.

  const files = {
    '/App.tsx': code,
  };

  return (
    <div className="h-full w-full overflow-hidden bg-white relative">
      <SandpackProvider
        template="react-ts"
        theme="dark"
        files={files}
        options={{
          externalResources: ['https://cdn.tailwindcss.com'],
          classes: {
            "sp-layout": "!h-full !rounded-none !border-none",
            "sp-preview": "!h-full",
            "sp-wrapper": "!h-full",
          },
        }}
        customSetup={{
          dependencies: {
            "lucide-react": "latest",
            "framer-motion": "latest",
            "clsx": "latest",
            "tailwind-merge": "latest",
          },
        }}
      >
        <SandpackLayout className="!h-full !border-none !bg-white">
          <SandpackPreview
            className="!h-full"
            showOpenInCodeSandbox={false}
            showRefreshButton={false}
            showRestartButton={false}
          />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
