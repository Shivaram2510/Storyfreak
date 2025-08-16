import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import InputField from './InputField';

const meta = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible input field component with multiple variants, sizes, and states. Built with TypeScript and TailwindCSS.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    onChange: fn(),
    onClear: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost'],
      description: 'Visual variant of the input field',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'HTML input type',
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic states
export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    helperText: 'We\'ll never share your email with anyone else.',
    type: 'email',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Username',
    value: 'invalid-username',
    placeholder: 'Enter username',
    invalid: true,
    errorMessage: 'Username must be at least 3 characters long.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Processing',
    value: 'Validating...',
    loading: true,
  },
};

export const PasswordWithToggle: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    showPasswordToggle: true,
  },
};

export const WithClearButton: Story = {
  args: {
    label: 'Search Query',
    value: 'Current search term',
    placeholder: 'Search...',
    showClearButton: true,
  },
};

// Variants
export const FilledVariant: Story = {
  args: {
    label: 'Filled Input',
    placeholder: 'Type something...',
    variant: 'filled',
  },
};

export const OutlinedVariant: Story = {
  args: {
    label: 'Outlined Input',
    placeholder: 'Type something...',
    variant: 'outlined',
  },
};

export const GhostVariant: Story = {
  args: {
    label: 'Ghost Input',
    placeholder: 'Type something...',
    variant: 'ghost',
  },
};

// Sizes
export const SmallSize: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small input field',
    size: 'sm',
  },
};

export const MediumSize: Story = {
  args: {
    label: 'Medium Input',
    placeholder: 'Medium input field',
    size: 'md',
  },
};

export const LargeSize: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large input field',
    size: 'lg',
  },
};

// Combined showcase
export const AllVariantsSizes: Story = {
  render: () => (
    <div className="space-y-8 w-96">
      <div>
        <h3 className="text-lg font-semibold mb-4">Outlined Variant</h3>
        <div className="space-y-4">
          <InputField variant="outlined" size="sm" label="Small" placeholder="Small outlined input" />
          <InputField variant="outlined" size="md" label="Medium" placeholder="Medium outlined input" />
          <InputField variant="outlined" size="lg" label="Large" placeholder="Large outlined input" />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Filled Variant</h3>
        <div className="space-y-4">
          <InputField variant="filled" size="sm" label="Small" placeholder="Small filled input" />
          <InputField variant="filled" size="md" label="Medium" placeholder="Medium filled input" />
          <InputField variant="filled" size="lg" label="Large" placeholder="Large filled input" />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Ghost Variant</h3>
        <div className="space-y-4">
          <InputField variant="ghost" size="sm" label="Small" placeholder="Small ghost input" />
          <InputField variant="ghost" size="md" label="Medium" placeholder="Medium ghost input" />
          <InputField variant="ghost" size="lg" label="Large" placeholder="Large ghost input" />
        </div>
      </div>
    </div>
  ),
};

export const InteractiveStates: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <InputField 
        label="Normal State" 
        placeholder="Hover and focus to see interactions" 
      />
      <InputField 
        label="With Value" 
        value="This field has content"
        showClearButton
      />
      <InputField 
        label="Error State" 
        value="invalid@"
        invalid
        errorMessage="Please enter a valid email address"
        type="email"
      />
      <InputField 
        label="Disabled State" 
        value="Cannot edit this field"
        disabled
      />
      <InputField 
        label="Loading State" 
        value="Validating..."
        loading
      />
      <InputField 
        label="Password Field" 
        type="password"
        placeholder="Enter password"
        showPasswordToggle
      />
    </div>
  ),
};