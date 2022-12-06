import React from "react";
import { IconContainer, InputContainer, InputText, ErrorText } from "./style";
import { Controller } from "react-hook-form";
import { IInput } from "./types";

export function Input({ leftIcon, control, name, errorMessage, ...rest }: IInput) {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText> {errorMessage}</ErrorText> : null}
    </>
  );
}
