'use client';

import React, { useState } from 'react';
import { Breadcrumb, Tabs, Pagination, Stepper, Flex, Heading, Text, GapToken, FontWeight, Button } from "@white-label/ui-components";

export const NavigationSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [currentPage, setCurrentPage] = useState(3);
    const [activeStep, setActiveStep] = useState(1);

    const tabItems = [
        { id: 'tab1', label: 'Overview', content: <Text>Overview panel content - general information and summary.</Text> },
        { id: 'tab2', label: 'Features', content: <Text>Features panel content - detailed feature descriptions.</Text> },
        { id: 'tab3', label: 'Pricing', content: <Text>Pricing panel content - plans and pricing table.</Text> },
    ];

    const breadcrumbItems = [
        { label: 'Home', href: '#' },
        { label: 'Products', href: '#' },
        { label: 'Design System', href: '#' },
        { label: 'Components' },
    ];

    const stepperSteps = [
        { label: 'Account' },
        { label: 'Profile' },
        { label: 'Settings' },
        { label: 'Review' },
    ];

    return (
        <Flex direction="column" gap={GapToken.MD} id="navigation">
            <Heading level={2} weight={FontWeight.Bold}>Navigation</Heading>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Breadcrumb</Heading>
                <Breadcrumb items={breadcrumbItems} />
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Tabs</Heading>
                <Text>Click tabs to switch panels. Supports keyboard navigation with arrow keys.</Text>
                <Tabs
                    tabs={tabItems}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Pagination</Heading>
                <Text>Page {currentPage} of 10</Text>
                <Pagination
                    currentPage={currentPage}
                    totalPages={10}
                    onPageChange={setCurrentPage}
                />
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Stepper</Heading>
                <Text>Step {activeStep + 1} of {stepperSteps.length}</Text>
                <Stepper steps={stepperSteps} activeStep={activeStep} />
                <Flex direction="row" gap={GapToken.SM}>
                    <Button onClick={() => setActiveStep(Math.max(0, activeStep - 1))} disabled={activeStep === 0}>
                        Previous
                    </Button>
                    <Button onClick={() => setActiveStep(Math.min(stepperSteps.length - 1, activeStep + 1))} disabled={activeStep === stepperSteps.length - 1}>
                        Next
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};
