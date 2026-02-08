'use client';

import { Flex, FontWeight, GapToken, Heading, Text, ColorSemantic } from "@white-label/ui-components";


const NAV_SECTIONS = [
    { id: 'core', label: 'Core' },
    { id: 'typography', label: 'Typography' },
    { id: 'layout', label: 'Layout' },
    { id: 'navigation', label: 'Navigation' },
    { id: 'inputs', label: 'Inputs' },
    { id: 'data-display', label: 'Data Display' },
    { id: 'feedback', label: 'Feedback' },
    { id: 'overlays', label: 'Overlays' },
];

export const Menu = () => {
    return (
        <Flex direction={"column"} gap={GapToken.MD}>
            <Heading level={2} weight={FontWeight.Bold}>WL Design System</Heading>
            <Flex direction="column" gap={GapToken.SM}>
                {NAV_SECTIONS.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <Text weight={FontWeight.Medium}>{section.label}</Text>
                    </a>
                ))}
            </Flex>
        </Flex>
    )
}