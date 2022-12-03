import React from "react";
import { IconContainer, InputContainer, InputText, ErrorText } from "./style";
import { Controller } from "react-hook-form";

export function Input({ leftIcon, control, name, errorMessage, ...rest }) {
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
