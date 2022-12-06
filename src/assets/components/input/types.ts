import React from "react";

export interface IInput {
    leftIcon?: React.ReactNode;
    control: any;
    name: string;
    errorMessage?: string;
    placeholder?: string;
    type?: string;
}