# Developer Guidelines: Using `@white-label/ui-components`

This document outlines the standard practices and guidelines for using the `@white-label/ui-components` library in our projects. It serves as a reference for maintaining consistency and leveraging the full power of our design system.

[Presentation Link](https://express.adobe.com/id/urn:aaid:sc:AP:08127d41-601c-495d-80db-c9553567d537?accept=true%3Fpreload%3Dsharesheet&category=search)

## 1. Introduction

The `@white-label/ui-components` library provides a comprehensive set of React components designed to replace native HTML elements and ensure a consistent visual language across our applications. By using these components, developers can focus on application logic while relying on the library for styling, accessibility, and responsiveness.

## 2. Core Principles

### 2.1 Avoid Native HTML Elements

Whenever possible, replace native HTML tags with their library counterparts:

-   **`<div>`** -> **`Flex`**, **`Stack`**, **`Grid`**, **`Container`**, or **`Box`** (if available)
-   **`<h1>` - `<h6>`** -> **`Heading`**
-   **`<p>`**, **`<span>`** -> **`Text`**, **`Label`**, **`Caption`**
-   **`<button>`** -> **`Button`**, **`IconButton`**
-   **`<input>`**, **`<select>`**, **`<textarea>`** -> **`InputField`**, **`Select`**, **`Textarea`**
-   **`<img>`** -> **`Avatar`** or styled `img` via `Box` (or `Image` component if available)

### 2.2 Token Usage

Use tokens for spacing, colors, and typography to ensure consistency.

-   **Spacing**: Use `GapToken` or `SpacingToken` (e.g., `GapToken.SM`, `GapToken.MD`, `GapToken.LG`).
-   **Colors**: Use `ColorSemantic` (e.g., `ColorSemantic.Primary`, `ColorSemantic.Success`, `ColorSemantic.Error`).
-   **Font Weights**: Use `FontWeight` (e.g., `FontWeight.Regular`, `FontWeight.Bold`).

### 2.3 Import Strategy

All components and tokens should be imported directly from the library root:

```tsx
import { Flex, Heading, Text, GapToken, Button } from "@white-label/ui-components";
```

Avoid deep imports like `@white-label/ui-components/src/components/...` unless absolutely necessary for troubleshooting (and even then, prefer fixing the root export).

## 3. Component Usage Guide

### 3.1 Layout

Use layout components to structure your application. Avoid CSS classes for basic layout needs.

-   **`Flex`**: The workhorse for most layouts. Supports `direction` ('row' | 'column'), `gap`, `justify`, `align`, `wrap`.
-   **`Stack`**: A simplified `Flex` column with spacing. ideal for vertical lists of items.
-   **`Grid`**: For 2-dimensional layouts. Supports `columns` prop (number of columns) and `gap`.
-   **`Container`**: For centering content with a max-width based on the current breakpoint variant (e.g., `ContainerVariant.Responsive`).
-   **`Spacer`**: For adding fixed space between elements.
-   **`Divider`**: For visual separation.

**Example:**

```tsx
<Flex direction="column" gap={GapToken.MD}>
    <Heading level={2}>Section Title</Heading>
    <Grid columns={3} gap={GapToken.SM}>
        <Card>Item 1</Card>
        <Card>Item 2</Card>
        <Card>Item 3</Card>
    </Grid>
</Flex>
```

### 3.2 Typography

Use typography components to ensure consistent font sizes, weights, and line heights.

-   **`Heading`**: For titles. Use `level` prop (1-6) to map to `h1`-`h6`.
-   **`Text`**: For body text. Supports `variant` (`p`, `span`, `overline`), `weight`, `align`, `color`.
-   **`Label`**: For form labels or small UI text.
-   **`Caption`**: For helper text or metadata.

**Example:**

```tsx
<Heading level={1} weight={FontWeight.Bold}>Page Title</Heading>
<Text variant={TextElement.P}>This is a standard paragraph.</Text>
<Caption>Last updated: Today</Caption>
```

### 3.3 Inputs

Use input components for all user data entry. They come with built-in styling, states (disabled, error), and accessibility features.

-   **`InputField`**: Standard text input. Supports variants (`Outlined`, `Filled`, `Ghost`), sizes, and validation states.
-   **`Select`**: Dropdown selection.
-   **`Checkbox`**, **`Radio`**, **`Switch`**: For boolean or option selection.
-   **`Slider`**: For range selection.
-   **`DatePicker`**: For date selection.

**Example:**

```tsx
<InputField
    label="Email Address"
    placeholder="user@example.com"
    variant={InputVariant.Outlined}
    error={emailError}
/>
```

### 3.4 Feedback

Provide feedback to users with these components.

-   **`Alert`**: For static messages (Success, Warning, Error, Info).
-   **`Toast`**: For transient notifications via `useToast`.
-   **`Snackbar`**: For actionable notifications at the bottom of the screen.
-   **`Progress`**: For loading indicators (linear or circular). **Note:** Import as `Progress`, not `ProgressBar`.
-   **`Spinner`**: For indeterminate loading states.
-   **`Skeleton`**: For loading placeholders.

**Important:** Components using hooks (like `useToast`) or interactive state must be used in Client Components (marked with `'use client'`).

### 3.5 Navigation

-   **`Breadcrumb`**: For hierarchical navigation.
-   **`Tabs`**: For switching between views.
-   **`Pagination`**: For breaking up large lists.
-   **`Stepper`**: For multi-step processes.

### 3.6 Overlays

-   **`Modal`**: For critical dialogs requiring user attention.
-   **`Drawer`**: For side panels (navigation, filters, details).
-   **`BottomSheet`**: For mobile-centric menus or actions.

## 4. Best Practices

### 4.1 Client Components

If a component uses React hooks (`useState`, `useEffect`) or library hooks (`useToast`), explicitly mark the file with `'use client'` at the top. This is crucial in Next.js App Router projects.

```tsx
'use client';

import { useState } from 'react';
import { Button } from "@white-label/ui-components";

export const MyComponent = () => {
    const [open, setOpen] = useState(false);
    return <Button onClick={() => setOpen(true)}>Click Me</Button>;
};
```

### 4.2 Handling "Missing" Exports

If you encounter an issue where a component seems missing (e.g., `ProgressBar`), check the `index.ts` of the library or similar components. Sometimes components are renamed or exported differently (e.g., `Progress` instead of `ProgressBar`).

### 4.3 Responsive Design

Use the library's responsive features where available (e.g., `Container`, `Grid` columns). For custom responsiveness, prefer using library tokens in your CSS/styled-components or use the hidden/visible utilities if provided by the library.

## 5. Setup & Installation

To add the library to a new project:

1.  **Install**:
    ```bash
    npm install @white-label/ui-components
    ```
    *Note: If installing from a private git repo, ensure your `package.json` points to the correct branch/tag (e.g., `#master`) to get the latest updates.*

2.  **Styles**: Ensure global styles or theme providers are wrapped around your application root if required by the library (e.g., `<ThemeProvider>` or global CSS import).

## 6. Migration Checklist

When refactoring an existing project:

1.  [ ] Identify native HTML elements (`div`, `h1`-`h6`, `p`, `button`, `input`).
2.  [ ] Map them to library components (`Flex/Stack`, `Heading`, `Text`, `Button`, `InputField`).
3.  [ ] Replace hardcoded styles (pixels, hex codes) with tokens (`GapToken`, `ColorSemantic`).
4.  [ ] Ensure all interactive components are in Client Components.
5.  [ ] Verify imports are from the library root.
6.  [ ] Test for visual regressions and functionality.

## 7. Real-World Examples

To better illustrate how to combine these components, here are some common UI patterns.

### 7.1 Login Form

A standard login form using `Card`, `Flex`, `Heading`, `InputField`, and `Button`.

```tsx
'use client';

import React, { useState } from 'react';
import {
    Flex, Card, Heading, Text,
    InputField, Button, GapToken,
    InputType, FontWeight, Align
} from "@white-label/ui-components";

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Login logic here
        console.log("Logging in with", email, password);
    };

    return (
        <Flex justify="center" align="center" style={{ height: '100vh' }}>
            <Card style={{ width: '400px', padding: '2rem' }}>
                <Flex direction="column" gap={GapToken.LG}>
                    <Flex direction="column" gap={GapToken.XS} align="center">
                        <Heading level={2} weight={FontWeight.Bold}>Welcome Back</Heading>
                        <Text variant="span" color="gray">Please sign in to your account</Text>
                    </Flex>

                    <Flex direction="column" gap={GapToken.MD}>
                        <InputField
                            label="Email"
                            type={InputType.Email}
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputField
                            label="Password"
                            type={InputType.Password}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Flex>

                    <Button onClick={handleLogin} fullWidth>Sign In</Button>
                </Flex>
            </Card>
        </Flex>
    );
};
```

### 7.2 Product Card

Displaying content with an image, title, description, and status tag.

```tsx
import {
    Card, Flex, Heading, Text,
    Badge, Button, GapToken,
    FontWeight, ColorSemantic
} from "@white-label/ui-components";

export const ProductCard = ({ product }) => {
    return (
        <Card>
            <Flex direction="column" gap={GapToken.MD}>
                {/* Product Image Placeholder */}
                <div style={{
                    width: '100%',
                    height: '200px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '8px'
                }} />

                <Flex direction="column" gap={GapToken.XS}>
                    <Flex justify="space-between" align="center">
                        <Heading level={3} weight={FontWeight.Semibold}>{product.name}</Heading>
                        <Badge color={product.inStock ? ColorSemantic.Success : ColorSemantic.Error}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </Badge>
                    </Flex>
                    <Text color="gray">{product.description}</Text>
                </Flex>

                <Flex justify="space-between" align="center">
                    <Heading level={2}>${product.price}</Heading>
                    <Button disabled={!product.inStock}>Add to Cart</Button>
                </Flex>
            </Flex>
        </Card>
    );
};
```

### 7.3 Dashboard Layout

A typical dashboard page structure with a sidebar and main content area.

```tsx
import {
    Flex, Heading, Text,
    Grid, Card, GapToken,
    Container, ContainerVariant
} from "@white-label/ui-components";

export const DashboardPage = () => {
    return (
        <Flex direction="row" style={{ minHeight: '100vh' }}>
            {/* Sidebar */}
            <Flex
                direction="column"
                gap={GapToken.MD}
                style={{ width: '250px', padding: '2rem', borderRight: '1px solid #eee' }}
            >
                <Heading level={4}>Dashboard</Heading>
                <nav>
                    <Flex direction="column" gap={GapToken.SM}>
                        <Text>Overview</Text>
                        <Text>Analytics</Text>
                        <Text>Settings</Text>
                    </Flex>
                </nav>
            </Flex>

            {/* Main Content */}
            <Flex direction="column" style={{ flex: 1, padding: '2rem' }}>
                <Container variant={ContainerVariant.Responsive}>
                    <Flex direction="column" gap={GapToken.LG}>
                        <Flex justify="space-between" align="center">
                            <Heading level={1}>Overview</Heading>
                            <Text>Welcome back, User</Text>
                        </Flex>

                        {/* Stats Grid */}
                        <Grid columns={3} gap={GapToken.MD}>
                            <Card><Heading level={2}>€12,500</Heading><Text>Total Revenue</Text></Card>
                            <Card><Heading level={2}>150</Heading><Text>New Customers</Text></Card>
                            <Card><Heading level={2}>24</Heading><Text>Active Orders</Text></Card>
                        </Grid>

                        {/* Recent Activity */}
                        <Card>
                            <Heading level={3}>Recent Activity</Heading>
                            <Text>List of recent transactions...</Text>
                        </Card>
                    </Flex>
                </Container>
            </Flex>
        </Flex>
    );
};
```
