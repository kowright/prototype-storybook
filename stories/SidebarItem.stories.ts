import type { Meta, StoryObj } from '@storybook/react';

import { SidebarItem } from './SidebarItem';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Stagehand/SidebarItem',
    component: SidebarItem,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    /*// More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },*/
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Upload',
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/nK7MGo6mfWHqHHmuGQbb0H/Stagehand-1.0?node-id=697%3A20535&mode=dev",
        },
    },
};

export const Selected: Story = {
    args: {
        label: 'Manage',
        isSelected: true,
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/nK7MGo6mfWHqHHmuGQbb0H/Stagehand-1.0?node-id=697%3A20535&mode=dev",
        },
    },
};

export const Toggle: Story = {
    args: {
        label: 'Library',
        isSelected: false,
        hasToggle: true,
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/nK7MGo6mfWHqHHmuGQbb0H/Stagehand-1.0?node-id=697%3A20535&mode=dev",
        },
    },
};

export const ToggleSelected: Story = {
    args: {
        label: 'Support',
        isSelected: true,
        hasToggle: true,
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/nK7MGo6mfWHqHHmuGQbb0H/Stagehand-1.0?node-id=697%3A20535&mode=dev",
        },
    },
};

export const ToggleOpen: Story = {
    args: {
        label: 'Library',
        isSelected: true,
        hasToggle: true,
        openToggle: true,
        subItems: [
            { hasToggle: false, label: 'Properties', isSelected: false, openToggle: false, isSubItem: true, },
            { hasToggle: true, label: 'Tours', isSelected: false, openToggle: false, isSubItem: true, },
            { hasToggle: true, label: 'Elements', isSelected: false, openToggle: false, isSubItem: true, },
            { hasToggle: false, label: 'Artifacts', isSelected: false, openToggle: false, isSubItem: true, },
        ],
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/nK7MGo6mfWHqHHmuGQbb0H/Stagehand-1.0?node-id=697%3A20535&mode=dev",
        },
    },
};

export const ToggleOpenSelectSubItem: Story = {
    args: {
        label: 'Library',
        isSelected: false,
        hasToggle: true,
        openToggle: true,
        subItems: [
            { hasToggle: false, label: 'Properties', isSelected: false, openToggle: false, isSubItem: true, },
            { hasToggle: true, label: 'Tours', isSelected: false, openToggle: false, isSubItem: true, },
            { hasToggle: true, label: 'Elements', isSelected: true, openToggle: false, isSubItem: true, },
            { hasToggle: false, label: 'Artifacts', isSelected: false, openToggle: false, isSubItem: true, },
        ],
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/nK7MGo6mfWHqHHmuGQbb0H/Stagehand-1.0?node-id=697%3A20535&mode=dev",
        },
    },
};

export const SubItem: Story = {
    args: {
        label: 'Artifacts',
        isSelected: false,
        isSubItem: true,
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/nK7MGo6mfWHqHHmuGQbb0H/Stagehand-1.0?node-id=697%3A20535&mode=dev",
        },
    },
};