'use client';

import Editor, { OnMount } from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { useRef } from 'react';

interface CodeEditorProps {
  code: string;
  onChange: (value: string | undefined) => void;
}

export default function CodeEditor({ code, onChange }: CodeEditorProps) {
  const editorRef = useRef<any>(null);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;

    // Define a custom dark theme that matches our app
    monaco.editor.defineTheme('devforge-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#09090b', // Zinc 950
        'editor.lineHighlightBackground': '#18181b',
        'editor.foreground': '#fafafa',
      },
    });

    monaco.editor.setTheme('devforge-dark');
  };

  return (
    <div className="h-full w-full overflow-hidden bg-zinc-950 relative group">
      <Editor
        height="100%"
        defaultLanguage="typescript"
        defaultValue={code}
        value={code}
        onChange={onChange}
        onMount={handleEditorDidMount}
        theme="devforge-dark"
        loading={
          <div className="flex items-center justify-center h-full text-zinc-500 gap-2">
            <div className="w-4 h-4 border-2 border-zinc-600 border-t-indigo-500 rounded-full animate-spin" />
            <span className="text-sm font-medium">Loading Editor...</span>
          </div>
        }
        options={{
          minimap: { enabled: false },
          fontSize: 13,
          fontFamily: 'var(--font-jetbrains-mono)',
          lineHeight: 22,
          padding: { top: 20, bottom: 20 },
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on',
          formatOnPaste: true,
          formatOnType: true,
          fontLigatures: true,
          renderLineHighlight: 'line',
          scrollbar: {
            vertical: 'visible',
            horizontal: 'visible',
            verticalScrollbarSize: 10,
            horizontalScrollbarSize: 10,
            useShadows: false,
          },
        }}
      />
    </div>
  );
}
