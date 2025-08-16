import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import InputField from '../components/InputField';

const meta = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input component with validation states, multiple variants, and special features like password toggle and clear button.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
  },
  args: {
    onChange: fn(),
    onClear: fn(),
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Input',
    placeholder: 'Enter some text...',
    helperText: 'This is helper text',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled Input',
    placeholder: 'Filled variant',
    helperText: 'This input has a filled background',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined Input',
    placeholder: 'Outlined variant',
    helperText: 'This input has an outlined border',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost Input',
    placeholder: 'Ghost variant',
    helperText: 'This input has a minimal ghost style',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Input',
    placeholder: 'Small size',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Input',
    placeholder: 'Large size',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    value: 'invalid@',
    invalid: true,
    errorMessage: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
    helperText: 'This input cannot be edited',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Input',
    placeholder: 'Loading...',
    loading: true,
  },
};

export const WithPasswordToggle: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    showPasswordToggle: true,
    value: 'mypassword123',
  },
};

export const WithClearButton: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    showClearButton: true,
    value: 'search query',
  },
};