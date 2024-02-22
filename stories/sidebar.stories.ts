import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './sidebar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Website/Sidebar',
    component: Sidebar,
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
        open: true, //already open by default 
    },
    /*parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/nK7MGo6mfWHqHHmuGQbb0H/Stagehand-1.0?node-id=697%3A20535&mode=dev",
        },
    },*/
};