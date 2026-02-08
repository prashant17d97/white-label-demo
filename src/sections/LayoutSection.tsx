'use client';

import React from 'react';
import {
    Container,
    ContainerVariant,
    Divider,
    Flex,
    FontWeight,
    GapToken,
    Grid,
    Heading,
    Spacer,
    SpacingToken,
    Stack,
    Text,
    TextElement,
} from "@white-label/ui-components";

export const LayoutSection: React.FC = () => {
    return (
        <Flex direction="column" gap={GapToken.MD} id="layout">
            <Heading level={2} weight={FontWeight.Bold}>Layout</Heading>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Flex - Row</Heading>
                <Flex direction="row" gap={GapToken.MD}>
                    <div className="demo-box">Item 1</div>
                    <div className="demo-box">Item 2</div>
                    <div className="demo-box">Item 3</div>
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Flex - Column</Heading>
                <Flex direction="column" gap={GapToken.SM}>
                    <div className="demo-box">Row A</div>
                    <div className="demo-box">Row B</div>
                    <div className="demo-box">Row C</div>
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Stack</Heading>
                <Stack spacing={GapToken.MD}>
                    <div className="demo-box">Stacked 1</div>
                    <div className="demo-box">Stacked 2</div>
                    <div className="demo-box">Stacked 3</div>
                </Stack>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Grid</Heading>
                <Text variant={TextElement.Overline}>2, 3, and 4 column grids</Text>

                <Text>2 Columns</Text>
                <Grid columns={2} gap={GapToken.MD}>
                    <div className="demo-box">Col 1</div>
                    <div className="demo-box">Col 2</div>
                </Grid>

                <Spacer size={SpacingToken.MD} />

                <Text>3 Columns</Text>
                <Grid columns={3} gap={GapToken.MD}>
                    <div className="demo-box">Col 1</div>
                    <div className="demo-box">Col 2</div>
                    <div className="demo-box">Col 3</div>
                </Grid>

                <Spacer size={SpacingToken.MD} />

                <Text>4 Columns</Text>
                <Grid columns={4} gap={GapToken.SM}>
                    <div className="demo-box">1</div>
                    <div className="demo-box">2</div>
                    <div className="demo-box">3</div>
                    <div className="demo-box">4</div>
                </Grid>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Divider</Heading>
                <div className="demo-placeholder">Content above</div>
                <Divider />
                <div className="demo-placeholder">Content below</div>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Container</Heading>
                <Container variant={ContainerVariant.Responsive}>
                    <div className="demo-placeholder">Responsive Container - adapts to breakpoints</div>
                </Container>
            </Flex>
        </Flex>
    );
};
