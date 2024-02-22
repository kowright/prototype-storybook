import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';

import { Page } from './Page';

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    },
    tags: ['autodocs'],
} 

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);

        await step('Log in Process Tests', async () => {
            const loginButton = canvas.getByRole('button', { name: /Log in/i });
            await expect(loginButton).toBeInTheDocument();
            await userEvent.click(loginButton);
        });

        await step('Log out Process Tests', async () => {
            const logoutButton = canvas.getByRole('button', { name: /Log out/i });
            await userEvent.click(logoutButton);
            await expect(logoutButton).toBeInTheDocument();
        });

        await step('Sign up button tests', async () => {
            const signUpButton = canvas.getByRole('button', { name: /Sign up/i });
            await expect(signUpButton).toBeInTheDocument();
        });
    }
};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({canvasElement, step}) => {
    const canvas = within(canvasElement);

    await step('Log in Process tests', async () => {
        const loginButton = canvas.getByRole('button', { name: /Log in/i });
        await expect(loginButton).toBeInTheDocument();
        await userEvent.click(loginButton);
        await expect(loginButton).not.toBeInTheDocument();
    });
    
    await step('Log out Process tests', async () => {
        const logoutButton = canvas.getByRole('button', { name: /Log out/i });
        await expect(logoutButton).toBeInTheDocument();
    });
   
  },
};
