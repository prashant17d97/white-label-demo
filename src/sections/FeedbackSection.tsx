'use client';

import React, { useState } from 'react';
import {
    ColorSemantic, ComponentSize,
    Alert, Snackbar,
    Spinner, Skeleton, Button, useToast,
    Flex, Heading, GapToken, FontWeight, Progress
} from "@white-label/ui-components";

export const FeedbackSection: React.FC = () => {
    const [showSnackbar, setShowSnackbar] = useState(false);
    const toast = useToast()

    return (
        <Flex direction="column" gap={GapToken.MD} id="feedback">
            <Heading level={2} weight={FontWeight.Bold}>Feedback</Heading>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Alert</Heading>
                <Flex direction="column" gap={GapToken.SM}>
                    <Alert severity={ColorSemantic.Success} title="Success">
                        Operation completed successfully.
                    </Alert>
                    <Alert severity={ColorSemantic.Error} title="Error">
                        Something went wrong. Please try again.
                    </Alert>
                    <Alert severity={ColorSemantic.Warning} title="Warning">
                        This action cannot be undone.
                    </Alert>
                    <Alert severity={ColorSemantic.Info} title="Info">
                        New version available. Update now for the latest features.
                    </Alert>
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Toast</Heading>
                <Button onClick={() => toast.addToast("File saved successfully!", "error")}>Show Toast</Button>

            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Snackbar</Heading>
                <Button onClick={() => setShowSnackbar(true)}>Show Snackbar</Button>
                <Snackbar
                    message="Item moved to trash."
                    action={{ label: 'Undo', onClick: () => setShowSnackbar(false) }}
                    isVisible={showSnackbar}
                    onClose={() => setShowSnackbar(false)}
                    duration={5000}
                />
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Progress</Heading>
                <Flex direction="column" gap={GapToken.SM}>
                    <Progress value={25} color={ColorSemantic.Primary} size={ComponentSize.SM} showLabel />
                    <Progress value={50} color={ColorSemantic.Success} size={ComponentSize.MD} showLabel />
                    <Progress value={75} color={ColorSemantic.Warning} size={ComponentSize.LG} showLabel />
                    <Progress value={0} color={ColorSemantic.Info} size={ComponentSize.MD} />
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Spinner</Heading>
                <Flex direction="row" gap={GapToken.MD}>
                    <Spinner size={ComponentSize.XL} />
                    <Spinner size={ComponentSize.LG} />
                    <Spinner size={ComponentSize.MD} />
                    <Spinner size={ComponentSize.SM} />
                    <Spinner size={ComponentSize.XS} />
                    <Progress value={65} size={"md"} color={ColorSemantic.Primary} variant="circular" />
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Skeleton</Heading>
                <Flex direction="column" gap={GapToken.SM}>
                    <Skeleton variant="text" />
                    <Skeleton variant="rectangular" />
                    <Flex direction="row" gap={GapToken.SM}>
                        <Skeleton variant="circular" />
                        <Skeleton variant="circular" />
                        <Skeleton variant="circular" />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
