import type { Meta, StoryObj } from '@storybook/react';

import {TestPage} from './TestPage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Stagehand/TestPage',
    component: TestPage,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
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
        label: 'Home',
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/nK7MGo6mfWHqHHmuGQbb0H/Stagehand-1.0?node-id=697%3A20535&mode=dev",
        },
    },
};

/*export const Properties: Story = {
    args: {
        label: 'Properties',
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/nK7MGo6mfWHqHHmuGQbb0H/Stagehand-1.0?node-id=697%3A20535&mode=dev",
        },
    },
};

export const EnterStagehand: Story = {
    args: {
        label: 'Enter Stagehand',
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/nK7MGo6mfWHqHHmuGQbb0H/Stagehand-1.0?node-id=697%3A20535&mode=dev",
        },
    },
};

export const StartTour: Story = {
    args: {
        label: 'Start Tour',
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/nK7MGo6mfWHqHHmuGQbb0H/Stagehand-1.0?node-id=697%3A20535&mode=dev",
        },
    },
};

export const Tours: Story = {
    args: {
        label: 'Tours',
    },
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/nK7MGo6mfWHqHHmuGQbb0H/Stagehand-1.0?node-id=697%3A20535&mode=dev",
        },
    },
};*/