'use client';

import React from 'react';
import {
    TextElement, FontWeight, TextAlign,
    Heading, Text, Label, Caption,
    Flex, GapToken,
} from "@white-label/ui-components";

export const TypographySection: React.FC = () => {
    return (
        <Flex direction="column" gap={GapToken.MD} id="typography">
            <Heading level={2} weight={FontWeight.Bold}>Typography</Heading>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Headings</Heading>
                <Heading level={1}>Heading 1 - Main Title</Heading>
                <Heading level={2}>Heading 2 - Section Title</Heading>
                <Heading level={3}>Heading 3 - Subsection</Heading>
                <Heading level={4}>Heading 4 - Group Title</Heading>
                <Heading level={5}>Heading 5 - Minor Title</Heading>
                <Heading level={6}>Heading 6 - Smallest</Heading>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Text Variants</Heading>
                <Text variant={TextElement.P}>Paragraph - The quick brown fox jumps over the lazy dog. This is body text used for main content and descriptions.</Text>
                <br />
                <Text variant={TextElement.Span}>Span - Inline text element for short annotations</Text>
                <br />
                <Text variant={TextElement.Overline}>Overline - CATEGORY LABEL</Text>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Font Weights</Heading>
                <Flex direction="row" gap={GapToken.SM}>
                    <Text weight={FontWeight.Regular}>Regular</Text>
                    <Text weight={FontWeight.Medium}>Medium</Text>
                    <Text weight={FontWeight.Semibold}>Semibold</Text>
                    <Text weight={FontWeight.Bold}>Bold</Text>
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Text Alignment</Heading>
                <div>
                    <Text align={TextAlign.Left}>Left aligned text</Text>
                </div>
                <div>
                    <Text align={TextAlign.Center}>Center aligned text</Text>
                </div>
                <div>
                    <Text align={TextAlign.Right}>Right aligned text</Text>
                </div>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Label & Caption</Heading>
                <Flex direction="row" gap={GapToken.SM}>
                    <Label>Form Label</Label>
                    <Label weight={FontWeight.Bold}>Bold Label</Label>
                    <Caption>Caption text for supplementary info</Caption>
                </Flex>
            </Flex>
        </Flex>
    );
};
