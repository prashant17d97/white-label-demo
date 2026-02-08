'use client';

import React from 'react';
import {
    ButtonVariant, ComponentSize,
    Button, IconButton, ThemeController,
    Flex, Heading, Text, GapToken, FontWeight,
} from "@white-label/ui-components";

const VARIANTS = [
    ButtonVariant.Primary,
    ButtonVariant.Secondary,
    ButtonVariant.Outlined,
    ButtonVariant.Text,
    ButtonVariant.Danger,
    ButtonVariant.Ghost,
];

const SIZES = [ComponentSize.SM, ComponentSize.MD, ComponentSize.LG];

export const CoreSection: React.FC = () => {
    return (
        <Flex direction="column" gap={GapToken.MD} id="core">
            <Heading level={2} weight={FontWeight.Bold}>Core Components</Heading>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Button Variants</Heading>
                <Text>All 6 button variants across 3 sizes.</Text>
                {SIZES.map((size) => (
                    <Flex key={size} direction="row" gap={GapToken.SM}>
                        {VARIANTS.map((variant) => (
                            <Button key={`${variant}-${size}`} variant={variant} size={size}>
                                {variant}
                            </Button>
                        ))}
                    </Flex>
                ))}
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Button States</Heading>
                <Flex direction="row" gap={GapToken.SM}>
                    <Button isLoading>Loading</Button>
                    <Button disabled>Disabled</Button>
                    <Button leadingIcon={<span>+</span>}>With Icon</Button>
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>IconButton</Heading>
                <Flex direction="row" gap={GapToken.SM}>
                    <IconButton icon={<span>+</span>} ariaLabel="Add" variant={ButtonVariant.Primary} />
                    <IconButton icon={<span>&times;</span>} ariaLabel="Close" variant={ButtonVariant.Outlined} />
                    <IconButton icon={<span>&#9998;</span>} ariaLabel="Edit" variant={ButtonVariant.Ghost} />
                    <IconButton icon={<span>&#128465;</span>} ariaLabel="Delete" variant={ButtonVariant.Danger} />
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Theme Controller</Heading>
                <Text>Toggle between light and dark themes. All components respond automatically.</Text>
                <ThemeController />
            </Flex>
        </Flex>
    );
};
