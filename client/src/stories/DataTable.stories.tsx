import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DataTable from '../components/DataTable';
import { type User, type Column } from '../types';

const sampleData: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
  { id: '3', name: 'Mike Brown', email: 'mike@example.com', role: 'Manager', status: 'Pending' },
  { id: '4', name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Analyst', status: 'Inactive' },
];

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role', sortable: true },
  { key: 'status', title: 'Status', dataIndex: 'status', sortable: true },
];

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A powerful data table component with sorting, selection, loading states, and customizable actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'Array of data objects to display in the table',
    },
    columns: {
      description: 'Column configuration array',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    selectable: {
      control: 'boolean',
      description: 'Enable row selection',
    },
  },
  args: {
    onRowSelect: fn(),
    onRowEdit: fn(),
    onRowDelete: fn(),
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns: columns,
  },
};

export const WithSelection: Story = {
  args: {
    data: sampleData,
    columns: columns,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: sampleData,
    columns: columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: columns,
  },
};

export const WithActions: Story = {
  args: {
    data: sampleData,
    columns: columns,
    selectable: true,
  },
};