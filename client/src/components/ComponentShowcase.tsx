import { useState } from "react";
import { Edit, Table2 } from "lucide-react";
import InputField from "./InputField";
import DataTable from "./DataTable";
import { sampleUsers, type User } from "@/data/mockData";
import { type Column } from "@/types";

export default function ComponentShowcase() {
  const [inputValues, setInputValues] = useState({
    filled: "",
    outlined: "",
    ghost: "",
    small: "",
    medium: "",
    large: "",
    normal: "",
    error: "invalid@",
    disabled: "",
    loading: "",
    password: "",
    clearable: ""
  });

  const [tableData, setTableData] = useState<User[]>(sampleUsers);
  const [selectedRows, setSelectedRows] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns: Column<User>[] = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      sortable: true
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      sortable: true
    },
    {
      key: 'role',
      title: 'Role',
      dataIndex: 'role',
      sortable: true
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      sortable: true
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setInputValues(prev => ({ ...prev, [field]: value }));
  };

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const clearTableData = () => {
    setTableData([]);
  };

  const resetTableData = () => {
    setTableData(sampleUsers);
  };

  return (
    <section id="components" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Component Library</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of flexible, accessible, and beautifully designed components.
          </p>
        </div>

        {/* InputField Component Section */}
        <div className="mb-20">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                <Edit className="text-primary-600 mr-3" size={24} />
                InputField Component
              </h4>
              <p className="text-gray-600 mt-1">Flexible input component with validation states and multiple variants</p>
            </div>
            
            <div className="p-6">
              {/* Variants Row */}
              <div className="mb-8">
                <h5 className="text-lg font-medium text-gray-900 mb-4">Variants</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <InputField
                      label="Filled Variant"
                      placeholder="Enter your name"
                      variant="filled"
                      value={inputValues.filled}
                      onChange={(e) => handleInputChange('filled', e.target.value)}
                      helperText="Helper text goes here"
                    />
                  </div>
                  <div className="space-y-3">
                    <InputField
                      label="Outlined Variant"
                      placeholder="Enter your email"
                      variant="outlined"
                      value={inputValues.outlined}
                      onChange={(e) => handleInputChange('outlined', e.target.value)}
                      helperText="Helper text goes here"
                    />
                  </div>
                  <div className="space-y-3">
                    <InputField
                      label="Ghost Variant"
                      placeholder="Enter your phone"
                      variant="ghost"
                      value={inputValues.ghost}
                      onChange={(e) => handleInputChange('ghost', e.target.value)}
                      helperText="Helper text goes here"
                    />
                  </div>
                </div>
              </div>

              {/* Sizes Row */}
              <div className="mb-8">
                <h5 className="text-lg font-medium text-gray-900 mb-4">Sizes</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <InputField
                      label="Small (sm)"
                      placeholder="Small input"
                      size="sm"
                      value={inputValues.small}
                      onChange={(e) => handleInputChange('small', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <InputField
                      label="Medium (md)"
                      placeholder="Medium input"
                      size="md"
                      value={inputValues.medium}
                      onChange={(e) => handleInputChange('medium', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <InputField
                      label="Large (lg)"
                      placeholder="Large input"
                      size="lg"
                      value={inputValues.large}
                      onChange={(e) => handleInputChange('large', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* States Row */}
              <div className="mb-8">
                <h5 className="text-lg font-medium text-gray-900 mb-4">States</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <InputField
                      label="Normal"
                      placeholder="Normal state"
                      value={inputValues.normal}
                      onChange={(e) => handleInputChange('normal', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <InputField
                      label="Error"
                      placeholder="Error state"
                      value={inputValues.error}
                      onChange={(e) => handleInputChange('error', e.target.value)}
                      invalid={true}
                      errorMessage="This field is required"
                    />
                  </div>
                  <div className="space-y-2">
                    <InputField
                      label="Disabled"
                      placeholder="Disabled state"
                      disabled={true}
                      value={inputValues.disabled}
                      onChange={(e) => handleInputChange('disabled', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <InputField
                      label="Loading"
                      placeholder="Loading..."
                      loading={true}
                      value={inputValues.loading}
                      onChange={(e) => handleInputChange('loading', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Special Features */}
              <div>
                <h5 className="text-lg font-medium text-gray-900 mb-4">Special Features</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <InputField
                      label="Password Input"
                      placeholder="Enter password"
                      type="password"
                      value={inputValues.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      showPasswordToggle={true}
                    />
                  </div>
                  <div className="space-y-2">
                    <InputField
                      label="With Clear Button"
                      placeholder="Type to see clear button"
                      value={inputValues.clearable}
                      onChange={(e) => handleInputChange('clearable', e.target.value)}
                      showClearButton={true}
                      onClear={() => handleInputChange('clearable', '')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DataTable Component Section */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                <Table2 className="text-primary-600 mr-3" size={24} />
                DataTable Component
              </h4>
              <p className="text-gray-600 mt-1">Powerful data table with sorting, selection, and loading states</p>
            </div>
            
            <div className="p-6">
              {/* Table Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={toggleLoading}
                    className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                    data-testid="button-toggle-loading"
                  >
                    {isLoading ? 'Stop Loading' : 'Show Loading'}
                  </button>
                  <button 
                    onClick={clearTableData}
                    className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                    data-testid="button-clear-data"
                  >
                    Show Empty State
                  </button>
                  <button 
                    onClick={resetTableData}
                    className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                    data-testid="button-reset-data"
                  >
                    Reset Data
                  </button>
                </div>
              </div>

              {/* Data Table */}
              <DataTable
                data={tableData}
                columns={columns}
                loading={isLoading}
                selectable={true}
                onRowSelect={setSelectedRows}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
