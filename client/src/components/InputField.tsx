import React, { useState, forwardRef } from "react";
import { Eye, EyeOff, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: string;
  showPasswordToggle?: boolean;
  showClearButton?: boolean;
  onClear?: () => void;
  className?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({
    value = "",
    onChange,
    label,
    placeholder,
    helperText,
    errorMessage,
    disabled = false,
    invalid = false,
    loading = false,
    variant = 'outlined',
    size = 'md',
    type = 'text',
    showPasswordToggle = false,
    showClearButton = false,
    onClear,
    className,
    ...props
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [internalType, setInternalType] = useState(type);

    const handlePasswordToggle = () => {
      setShowPassword(!showPassword);
      setInternalType(showPassword ? 'password' : 'text');
    };

    const getVariantClasses = () => {
      const baseClasses = "w-full transition-all duration-150 focus:outline-none";
      
      switch (variant) {
        case 'filled':
          return cn(
            baseClasses,
            "bg-gray-100 border-0 focus:ring-2 focus:ring-primary-500 focus:bg-white",
            invalid ? "bg-red-50 focus:ring-red-500" : "",
            disabled ? "bg-gray-50 text-gray-400 cursor-not-allowed" : ""
          );
        case 'ghost':
          return cn(
            baseClasses,
            "border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:ring-0 focus:border-primary-500",
            invalid ? "border-red-300 focus:border-red-500" : "",
            disabled ? "border-gray-200 text-gray-400 cursor-not-allowed" : ""
          );
        default: // outlined
          return cn(
            baseClasses,
            "border-2 border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
            invalid ? "border-red-300 focus:ring-red-500 focus:border-red-500" : "",
            disabled ? "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed" : ""
          );
      }
    };

    const getSizeClasses = () => {
      switch (size) {
        case 'sm':
          return "px-3 py-2 text-sm rounded-md";
        case 'lg':
          return "px-5 py-4 text-lg rounded-xl";
        default: // md
          return "px-4 py-3 rounded-lg";
      }
    };

    const hasRightIcon = loading || showPasswordToggle || (showClearButton && value);
    const rightPadding = hasRightIcon ? "pr-10" : "";

    return (
      <div className={cn("space-y-2", className)}>
        {label && (
          <label 
            className={cn(
              "block text-sm font-medium",
              disabled ? "text-gray-400" : "text-gray-700"
            )}
            data-testid={`label-${label.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          <input
            ref={ref}
            type={showPasswordToggle ? internalType : type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
              getVariantClasses(),
              getSizeClasses(),
              rightPadding
            )}
            data-testid={`input-${label?.toLowerCase().replace(/\s+/g, '-') || 'field'}`}
            {...props}
          />
          
          {/* Right side icons */}
          {hasRightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
              {loading && (
                <Loader2 
                  className="text-primary-500 animate-spin" 
                  size={16}
                  data-testid="icon-loading"
                />
              )}
              
              {showPasswordToggle && !loading && (
                <button
                  type="button"
                  onClick={handlePasswordToggle}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  data-testid="button-password-toggle"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              )}
              
              {showClearButton && value && !loading && !showPasswordToggle && (
                <button
                  type="button"
                  onClick={onClear}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  data-testid="button-clear"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          )}
        </div>
        
        {/* Helper text or error message */}
        {(helperText || errorMessage) && (
          <p 
            className={cn(
              "text-sm",
              invalid || errorMessage ? "text-red-600" : "text-gray-500"
            )}
            data-testid={`helper-text-${label?.toLowerCase().replace(/\s+/g, '-') || 'field'}`}
          >
            {errorMessage || helperText}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
