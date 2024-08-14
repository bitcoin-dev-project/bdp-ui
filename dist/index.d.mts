import React__default from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
}
declare const Button: React__default.FC<ButtonProps>;

export { Button, type ButtonProps };
