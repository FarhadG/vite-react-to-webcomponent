/// <reference types="react" />
export interface HeaderProps {
    text?: string;
    onClick?: () => void;
}
export declare const Header: ({ text, onClick }: HeaderProps) => JSX.Element;
