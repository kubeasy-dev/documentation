import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions()}  githubUrl={`https://github.com/kubeasy-dev/documentation/tree/main/content/docs`}>
      {children}
    </DocsLayout>
  );
}
