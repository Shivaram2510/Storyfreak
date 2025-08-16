import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DataTable from './DataTable';
import { type Column, type User } from '@/types';

// Sample data for stories
const sampleUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Editor',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Bob Wilson',
    email: 'bob.wilson@example.com',
    role: 'Viewer',
    status: 'Pending',
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    role: 'Editor',
    status: 'Inactive',
  },
  {
    id: '5',
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    role: 'Admin',
    status: 'Active',
  },
];

const userColumns: Column<User>[] = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortable: true,
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    sortable: true,
  },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role',
    sortable: true,
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    sortable: true,
  },
];

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A feature-rich data table component with sorting, selection, loading states, and custom rendering. Perfect for displaying and managing tabular data.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    onRowSelect: fn(),
    onRowEdit: fn(),
    onRowDelete: fn(),
  },
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Whether the table is in a loading state',
    },
    selectable: {
      control: 'boolean',
      description: 'Whether rows can be selected with checkboxes',
    },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
  },
};

export const SortableColumns: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
  },
  parameters: {
    docs: {
      description: {
        story: 'Click on column headers to sort the data. Sortable columns show sort indicators and can cycle through ascending, descending, and no sort.',
      },
    },
  },
};

export const SelectableRows: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Enable row selection with checkboxes. Includes select all functionality and shows selection count.',
      },
    },
  },
};

export const LoadingState: Story = {
  args: {
    data: [],
    columns: userColumns,
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state shows skeleton placeholders while data is being fetched.',
      },
    },
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    columns: userColumns,
    loading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state displayed when no data is available.',
      },
    },
  },
};

export const FullFeatured: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete table with all features: sortable columns, row selection, and action buttons.',
      },
    },
  },
};

export const LargeDataset: Story = {
  args: {
    data: Array.from({ length: 20 }, (_, index) => ({
      id: `${index + 1}`,
      name: `User ${index + 1}`,
      email: `user${index + 1}@example.com`,
      role: ['Admin', 'Editor', 'Viewer'][index % 3],
      status: (['Active', 'Pending', 'Inactive'] as const)[index % 3],
    })),
    columns: userColumns,
    selectable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with a larger dataset to demonstrate performance and scrolling behavior.',
      },
    },
  },
};

export const StateShowcase: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Loading State</h3>
        <DataTable
          data={[]}
          columns={userColumns}
          loading={true}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Empty State</h3>
        <DataTable
          data={[]}
          columns={userColumns}
          loading={false}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">With Data</h3>
        <DataTable
          data={sampleUsers.slice(0, 3)}
          columns={userColumns}
          selectable={true}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of different table states: loading, empty, and populated.',
      },
    },
  },
};