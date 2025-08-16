import React, { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, Download, Filter, Plus, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Column } from "@/types";

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  className?: string;
}

type SortDirection = 'asc' | 'desc' | null;

interface SortConfig {
  key: string | null;
  direction: SortDirection;
}

function DataTable<T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
  className
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: null });

  // Sort data based on current sort configuration
  const sortedData = useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) {
      return data;
    }

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (columnKey: string) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return;

    setSortConfig(prevConfig => {
      if (prevConfig.key === columnKey) {
        // Cycle through: asc -> desc -> null
        const direction = prevConfig.direction === 'asc' ? 'desc' : 
                         prevConfig.direction === 'desc' ? null : 'asc';
        return { key: direction ? columnKey : null, direction };
      } else {
        return { key: columnKey, direction: 'asc' };
      }
    });
  };

  const handleRowSelect = (row: T, checked: boolean) => {
    let newSelectedRows: T[];
    
    if (checked) {
      newSelectedRows = [...selectedRows, row];
    } else {
      newSelectedRows = selectedRows.filter(selectedRow => selectedRow !== row);
    }
    
    setSelectedRows(newSelectedRows);
    onRowSelect?.(newSelectedRows);
  };

  const handleSelectAll = (checked: boolean) => {
    const newSelectedRows = checked ? [...sortedData] : [];
    setSelectedRows(newSelectedRows);
    onRowSelect?.(newSelectedRows);
  };

  const isRowSelected = (row: T) => {
    return selectedRows.includes(row);
  };

  const allRowsSelected = sortedData.length > 0 && selectedRows.length === sortedData.length;
  const someRowsSelected = selectedRows.length > 0 && selectedRows.length < sortedData.length;

  const getSortIcon = (columnKey: string) => {
    if (sortConfig.key !== columnKey) {
      return <ChevronUp className="text-gray-400" size={14} />;
    }
    
    if (sortConfig.direction === 'asc') {
      return <ChevronUp className="text-primary-600" size={14} />;
    } else if (sortConfig.direction === 'desc') {
      return <ChevronDown className="text-primary-600" size={14} />;
    }
    
    return <ChevronUp className="text-gray-400" size={14} />;
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-primary-500',
      'bg-purple-500',
      'bg-green-500',
      'bg-red-500',
      'bg-indigo-500',
      'bg-pink-500',
      'bg-yellow-500',
      'bg-blue-500'
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className={cn("bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden", className)}>
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {selectable && <th className="w-12 px-4 py-3"></th>}
                {columns.map((column) => (
                  <th key={column.key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {column.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index} data-testid={`loading-row-${index}`}>
                  {selectable && (
                    <td className="px-4 py-4">
                      <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                    </td>
                  )}
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                      {column.key === 'name' ? (
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                          <div className="ml-4">
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                          </div>
                        </div>
                      ) : column.key === 'status' ? (
                        <div className="h-6 bg-gray-200 rounded-full animate-pulse w-16"></div>
                      ) : (
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Empty state
  if (data.length === 0) {
    return (
      <div className={cn("bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden", className)}>
        <div className="text-center py-12">
          <Database className="text-gray-300 mx-auto mb-4" size={64} />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No data found</h3>
          <p className="text-gray-500 mb-4">There are no records to display at the moment.</p>
          <button 
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-150 flex items-center gap-2 mx-auto"
            data-testid="button-add-record"
          >
            <Plus size={16} />
            Add New Record
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden", className)}>
      {/* Table Controls */}
      {selectable && (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600" data-testid="text-selection-count">
              {selectedRows.length} of {data.length} selected
            </span>
            <button 
              onClick={() => handleSelectAll(!allRowsSelected)}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              data-testid="button-select-all"
            >
              {allRowsSelected ? 'Deselect All' : 'Select All'}
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-150 flex items-center gap-2"
              data-testid="button-export"
            >
              <Download size={14} />
              Export
            </button>
            <button 
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-150 flex items-center gap-2"
              data-testid="button-filter"
            >
              <Filter size={14} />
              Filter
            </button>
          </div>
        </div>
      )}

      {/* Data Table */}
      <div className="overflow-hidden border border-gray-200 rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {selectable && (
                <th className="w-12 px-4 py-3">
                  <input 
                    type="checkbox" 
                    checked={allRowsSelected}
                    ref={(input) => {
                      if (input) input.indeterminate = someRowsSelected;
                    }}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    data-testid="checkbox-select-all"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th 
                  key={column.key}
                  className={cn(
                    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                    column.sortable ? "cursor-pointer hover:bg-gray-100 transition-colors duration-150" : ""
                  )}
                  onClick={() => column.sortable && handleSort(column.key)}
                  data-testid={`header-${column.key}`}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.title}</span>
                    {column.sortable && getSortIcon(column.key)}
                  </div>
                </th>
              ))}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((row, index) => (
              <tr 
                key={index}
                className={cn(
                  "hover:bg-gray-50 transition-colors duration-150",
                  isRowSelected(row) ? "bg-blue-50" : ""
                )}
                data-testid={`row-${index}`}
              >
                {selectable && (
                  <td className="px-4 py-4">
                    <input 
                      type="checkbox" 
                      checked={isRowSelected(row)}
                      onChange={(e) => handleRowSelect(row, e.target.checked)}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      data-testid={`checkbox-row-${index}`}
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap" data-testid={`cell-${column.key}-${index}`}>
                    {column.key === 'name' ? (
                      <div className="flex items-center">
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center text-white font-medium",
                          getAvatarColor(row[column.dataIndex] as string)
                        )}>
                          {getInitials(row[column.dataIndex] as string)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {row[column.dataIndex]}
                          </div>
                        </div>
                      </div>
                    ) : column.key === 'status' ? (
                      <span className={cn(
                        "inline-flex px-2 py-1 text-xs font-semibold rounded-full",
                        getStatusBadgeClass(row[column.dataIndex] as string)
                      )}>
                        {row[column.dataIndex]}
                      </span>
                    ) : (
                      <div className="text-sm text-gray-900">
                        {row[column.dataIndex]}
                      </div>
                    )}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    className="text-primary-600 hover:text-primary-900 mr-3"
                    data-testid={`button-edit-${index}`}
                  >
                    Edit
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    data-testid={`button-delete-${index}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
