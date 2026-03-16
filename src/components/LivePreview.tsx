'use client';

import { SandpackProvider, SandpackLayout, SandpackPreview } from '@codesandbox/sandpack-react';

interface LivePreviewProps {
  code: string;
  deviceMode?: 'desktop' | 'tablet' | 'mobile';
  zoomLevel?: number;
}

const DEVICE_WIDTHS = {
  desktop: '100%',
  tablet: '768px',
  mobile: '375px',
};

export default function LivePreview({ code, deviceMode = 'desktop', zoomLevel = 100 }: LivePreviewProps) {
  const files = {
    '/App.tsx': code,
  };

  const maxWidth = DEVICE_WIDTHS[deviceMode];
  const scale = zoomLevel / 100;

  return (
    <div className="h-full w-full overflow-auto bg-white relative flex items-center justify-center p-4">
      <div
        className="transition-all duration-300 ease-out origin-top"
        style={{
          maxWidth,
          width: deviceMode === 'desktop' ? '100%' : maxWidth,
          height: '100%',
          minHeight: '400px',
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
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
          <SandpackLayout className="!h-full !rounded-none !border-none">
            <SandpackPreview
              className="!h-full"
              showOpenInCodeSandbox={false}
              showRefreshButton={false}
              showRestartButton={false}
            />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
}
