export interface NgOption {
    [name: string]: any;

    index?: number;
    htmlId?: string;
    selected?: boolean;
    disabled?: boolean;
    marked?: boolean;
    label?: string;
    value?: string | any;
    parent?: NgOption;
    children?: NgOption[];
}

export type DropdownPosition = 'top' | 'right' | 'bottom' | 'left' | 'auto';
