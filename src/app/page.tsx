'use client';

import React from 'react';
import { CoreSection } from '../sections/CoreSection';
import { TypographySection } from '../sections/TypographySection';
import { LayoutSection } from '../sections/LayoutSection';
import { NavigationSection } from '../sections/NavigationSection';
import { InputSection } from '../sections/InputSection';
import { DataDisplaySection } from '../sections/DataDisplaySection';
import { FeedbackSection } from '../sections/FeedbackSection';
import { OverlaySection } from '../sections/OverlaySection';
import {Divider, Flex, GapToken, ToastProvider} from "@white-label/ui-components";

export default function DemoPage() {
    return (
        <>
            <header className="demo-hero">
                <h1 className="demo-hero-title">White-Label Design System</h1>
                <p className="demo-hero-subtitle">
                    Component showcase — 59 components, token-driven, fully themeable
                </p>
            </header>

            <ToastProvider>
                <Flex direction="column" gap={GapToken.LG}>
                    <CoreSection />
                    <Divider />
                    <TypographySection />
                    <Divider />
                    <LayoutSection />
                    <Divider />
                    <NavigationSection />
                    <Divider />
                    <InputSection />
                    <Divider />
                    <DataDisplaySection />
                    <Divider />
                    <FeedbackSection />
                    <Divider />
                    <OverlaySection />
                </Flex>
            </ToastProvider>
        </>
    );
}
