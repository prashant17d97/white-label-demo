'use client';

import React, { useState } from 'react';
import {
    ComponentSize, InputVariant, InputType,
    InputField, Textarea, Select, Checkbox,
    Radio, Switch, Slider, DatePicker,
    Flex, Heading, Text, GapToken, FontWeight,
} from "@white-label/ui-components";

export const InputSection: React.FC = () => {
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [switchChecked, setSwitchChecked] = useState(true);
    const [radioValue, setRadioValue] = useState(true);
    const [sliderValue, setSliderValue] = useState(50);
    const [selectValue, setSelectValue] = useState('');
    const [ifValue, setIfValue] = useState("Khoon Choos le");

    const selectOptions = [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'angular', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
    ];

    return (
        <Flex direction="column" gap={GapToken.MD} id="inputs">
            <Heading level={2} weight={FontWeight.Bold}>Input Components</Heading>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>InputField Variants</Heading>
                <Flex direction="column" gap={GapToken.SM}>
                    <InputField label="Outlined" variant={InputVariant.Outlined} placeholder="Enter text..." value={ifValue} onChange={(e) => setIfValue(e.target.value)} />
                    <InputField label="Filled" variant={InputVariant.Filled} placeholder="Enter text..." />
                    <InputField label="Ghost" variant={InputVariant.Ghost} placeholder="Enter text..." />
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>InputField Sizes</Heading>
                <Flex direction="column" gap={GapToken.SM}>
                    <InputField label="Small" size={ComponentSize.SM} placeholder="Small input" />
                    <InputField label="Medium" size={ComponentSize.MD} placeholder="Medium input" />
                    <InputField label="Large" size={ComponentSize.LG} placeholder="Large input" />
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>InputField Types & Validation</Heading>
                <Flex direction="column" gap={GapToken.SM}>
                    <InputField label="Email" type={InputType.Email} placeholder="user@example.com" />
                    <InputField label="Password" type={InputType.Password} placeholder="Enter password" />
                    <InputField label="With Error" error="This field is required" placeholder="Error state" />
                    <InputField label="Disabled" disabled placeholder="Cannot edit" />
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Textarea</Heading>
                <Textarea label="Description" placeholder="Write your description here..." />
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Select</Heading>
                <Select
                    label="Framework"
                    options={selectOptions}
                    placeholder="Choose a framework"
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                />
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Checkbox</Heading>
                <Flex direction="row" gap={GapToken.SM}>
                    <Checkbox
                        label="Accept terms and conditions"
                        checked={checkboxChecked}
                        onChange={() => setCheckboxChecked(!checkboxChecked)}
                    />
                    <Checkbox label="Disabled" checked disabled />
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Radio</Heading>
                <Flex direction="row" gap={GapToken.SM}>
                    {['option1', 'option2', 'option3'].map((opt) => (
                        <Radio
                            key={opt}
                            label={`Option ${opt.slice(-1)}`}
                            value={opt}
                            name="demo-radio"
                            checked={radioValue}
                            onSelect={() => setRadioValue(false)}
                        />
                    ))}
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Switch</Heading>
                <Flex direction="row" gap={GapToken.SM}>
                    <Switch
                        label="Notifications"
                        checked={switchChecked}
                        onChange={() => setSwitchChecked(!switchChecked)}
                    />
                    <Switch label="Disabled" checked={false} disabled onChange={() => { }} />
                </Flex>
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>Slider</Heading>
                <Text>Value: {sliderValue}</Text>
                <Slider
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    min={0}
                    max={100}
                    step={1}
                    showValue
                />
            </Flex>

            <Flex direction="column" gap={GapToken.SM}>
                <Heading level={3}>DatePicker</Heading>
                <DatePicker label="Select a date" size={ComponentSize.MD} />
            </Flex>
        </Flex>
    );
};
