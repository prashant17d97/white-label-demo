import React from 'react';
import type {Metadata} from 'next';

import '@white-label/theme/generated/theme.css';
import '@white-label/styling/generated/styling.css';
import '@white-label/typography/generated/typography.css';
import '@white-label/iconography/generated/iconography.css';

import './globals.css';
import {Menu} from "../sections/Menu";

export const metadata: Metadata = {
    title: 'White-Label Design System - Demo',
    description: 'Component showcase for the white-label design system',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="light">
        <body>
        <div className="demo-shell">
            <aside className="demo-sidebar">
                <Menu/>
            </aside>
            <main className="demo-main">
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}
