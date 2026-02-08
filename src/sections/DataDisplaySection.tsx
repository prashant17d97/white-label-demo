'use client';

import React from 'react';
import {
    Avatar,
    Badge, Button,
    Card,
    CardVariant,
    Chip,
    ColorSemantic,
    ComponentSize,
    Flex,
    FontWeight,
    GapToken,
    Grid,
    Heading,
    List,
    ListItem,
    Popover,
    Text,
    TextElement,
    Tooltip,
} from "@white-label/ui-components";

export const DataDisplaySection: React.FC = () => {
    return (
        <Flex direction={"column"} gap={GapToken.MD}>
            <Heading level={2} weight={FontWeight.Bold}>Data Display</Heading>

            <Flex direction={"column"}>
                <Heading level={3}>Card Variants</Heading>
                <Grid columns={3}>
                    <Card variant={CardVariant.Flat}>
                        <Heading level={4}>Flat Card</Heading>
                        <Text variant={TextElement.P}>No shadow, minimal style for embedded content.</Text>
                    </Card>
                    <Card variant={CardVariant.Outlined}>
                        <Heading level={4}>Outlined Card</Heading>
                        <Text variant={TextElement.P}>Bordered card for clear content separation.</Text>
                    </Card>
                    <Card variant={CardVariant.Elevated}>
                        <Heading level={4}>Elevated Card</Heading>
                        <Text variant={TextElement.P}>Shadow-based elevation for prominent content.</Text>
                    </Card>
                </Grid>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>List</Heading>
                <List>
                    <ListItem leadingIcon={<span>&#128100;</span>}><Text>User profile settings</Text></ListItem>
                    <ListItem leadingIcon={<span>&#128276;</span>}><Text>Notification preferences</Text></ListItem>
                    <ListItem leadingIcon={<span>&#128274;</span>}><Text>Security and privacy</Text></ListItem>
                    <ListItem disabled leadingIcon={<span>&#128683;</span>}><Text>Disabled item</Text></ListItem>
                </List>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Avatar</Heading>
                <Flex direction="row" gap={GapToken.SM}>
                    <Avatar size={ComponentSize.SM} src="https://i.pravatar.cc/151"/>
                    <Avatar size={ComponentSize.MD} src="https://i.pravatar.cc/152"/>
                    <Avatar size={ComponentSize.LG} src="https://i.pravatar.cc/153"/>
                    <Avatar size={ComponentSize.XL} src="https://i.pravatar.cc/154"/>
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Badge</Heading>
                <Flex direction="row" gap={GapToken.MD}>
                    <Badge count={5} color={ColorSemantic.Primary}>
                        <div className="demo-box">Inbox</div>
                    </Badge>
                    <Badge count={99} color={ColorSemantic.Error}>
                        <div className="demo-box">Alerts</div>
                    </Badge>
                    <Badge dot color={ColorSemantic.Success}>
                        <div className="demo-box">Online</div>
                    </Badge>
                </Flex>
            </Flex>

            <Flex direction={'column'} gap={GapToken.SM}>
                <Heading level={4}>Chip</Heading>
                <Flex gap={GapToken.SM}>
                    <Chip label="React" variant="filled" color={ColorSemantic.Primary}/>
                    <Chip label="TypeScript" variant="outlined" color={ColorSemantic.Secondary}/>
                    <Chip label="Deletable" variant="filled" color={ColorSemantic.Info}
                          onDelete={() => alert('Deleted!')}/>
                    <Chip label="Disabled" variant="filled" color={ColorSemantic.Warning} disabled/>
                </Flex>
            </Flex>

            <Flex direction={'column'} gap={GapToken.SM}>
                <Heading level={4}>Tooltip</Heading>
                <Flex gap={GapToken.SM}>
                    <Tooltip content="Tooltip on top" position="top">
                        <Button>Hover me (top)</Button>
                    </Tooltip>
                    <Tooltip content="Tooltip on bottom" position="bottom">
                        <Button>Hover me (bottom)</Button>
                    </Tooltip>
                    <Tooltip content="Tooltip on right" position="right">
                        <Button>Hover me (right)</Button>
                    </Tooltip>
                </Flex>
            </Flex>

            <Flex direction={'column'} gap={GapToken.SM}>
                <Heading level={4}>Popover</Heading>
                <Flex gap={GapToken.SM}>
                    <Popover
                        content={
                        <Flex direction="column" gap={GapToken.SM}>
                            <strong>Popover Content</strong>
                            <Text variant={TextElement.P}>This is a click-triggered popover with rich content.</Text>
                        </Flex>
                        }
                        position="bottom"
                    >
                        <Button>Click to open popover</Button>
                    </Popover>
                </Flex>
            </Flex>
        </Flex>
    );
};
