'use client';

import React, { useState } from 'react';
import {
    ComponentSize, SheetVariant, ButtonVariant,
    Modal, Drawer, BottomSheet, BottomSheetItem, Button,
    Flex, Heading, Text, GapToken, FontWeight,
} from "@white-label/ui-components";

export const OverlaySection: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [drawerLeftOpen, setDrawerLeftOpen] = useState(false);
    const [drawerRightOpen, setDrawerRightOpen] = useState(false);
    const [sheetOpen, setSheetOpen] = useState(false);

    return (
        <Flex direction="column" gap={GapToken.MD} id="overlays">
            <Heading level={2} weight={FontWeight.Bold}>Overlays</Heading>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Modal</Heading>
                <Text>Click to open a centered dialog with focus trap and backdrop.</Text>
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                <Modal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title="Modal Title"
                    size={ComponentSize.MD}
                    footer={
                        <Flex direction="row" gap={GapToken.SM} style={{ justifyContent: 'flex-end' }}>
                            <Button variant={ButtonVariant.Outlined} onClick={() => setModalOpen(false)}>Cancel</Button>
                            <Button onClick={() => setModalOpen(false)}>Confirm</Button>
                        </Flex>
                    }
                >
                    <Text>This is the modal body content. It supports focus trapping, Escape to close, and backdrop click to dismiss.</Text>
                </Modal>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Drawer</Heading>
                <Text>Slides in from left or right.</Text>
                <Flex direction="row" gap={GapToken.SM}>
                    <Button onClick={() => setDrawerLeftOpen(true)}>Open Left Drawer</Button>
                    <Button onClick={() => setDrawerRightOpen(true)} variant={ButtonVariant.Secondary}>Open Right Drawer</Button>
                </Flex>
                <Drawer
                    isOpen={drawerLeftOpen}
                    onClose={() => setDrawerLeftOpen(false)}
                    position="left"
                >
                    <Flex direction="column" gap={GapToken.SM}>
                        <Heading level={3}>Left Drawer</Heading>
                        <Text>Navigation or filter panel content goes here.</Text>
                        <Button onClick={() => setDrawerLeftOpen(false)}>Close</Button>
                    </Flex>
                </Drawer>
                <Drawer
                    isOpen={drawerRightOpen}
                    onClose={() => setDrawerRightOpen(false)}
                    position="right"
                >
                    <Flex direction="column" gap={GapToken.SM}>
                        <Heading level={3}>Right Drawer</Heading>
                        <Text>Detail panel or settings content goes here.</Text>
                        <Button onClick={() => setDrawerRightOpen(false)}>Close</Button>
                    </Flex>
                </Drawer>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>BottomSheet</Heading>
                <Button onClick={() => setSheetOpen(true)}>Open Bottom Sheet</Button>
                <BottomSheet
                    isOpen={sheetOpen}
                    onClose={() => setSheetOpen(false)}
                    variant={SheetVariant.Dismissible}
                >
                    <BottomSheetItem icon={<span>&#128247;</span>} onClick={() => setSheetOpen(false)}>
                        Take Photo
                    </BottomSheetItem>
                    <BottomSheetItem icon={<span>&#128193;</span>} onClick={() => setSheetOpen(false)}>
                        Choose from Gallery
                    </BottomSheetItem>
                    <BottomSheetItem icon={<span>&#128196;</span>} onClick={() => setSheetOpen(false)}>
                        Browse Files
                    </BottomSheetItem>
                </BottomSheet>
            </Flex>
        </Flex>
    );
};
