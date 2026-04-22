import { SpeedInsights } from '@vercel/speed-insights/next';
import { type ReactNode, Suspense } from 'react';
import type { Viewport } from 'next';
import Analytics from '@/components/Analytics';
import './mobile-fix.css';

// 修复 iOS 输入框放大 + 顶部黑边
export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  width: 'device-width',
};

const inVercel = process.env.VERCEL === '1';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html suppressHydrationWarning lang={'en'} style={{ height: '100%' }}>
      <body style={{ height: '100%', margin: 0, paddingTop: 'env(safe-area-inset-top)', backgroundColor: '#000' }}>
        {children}
        <Suspense fallback={null}>
          <Analytics />
          {inVercel && <SpeedInsights />}
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
