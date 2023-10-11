import { ChangeEvent } from "react";
import style from "./inputStyle.module.css";
type InputTypes = "text" | "number" | "password" | "submit" | "email";

export default function Input(
    value: any,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e: ChangeEvent<HTMLInputElement>) => void,
    name: string,
    type: InputTypes,
    placeholder: string,
    step: number = 1
) {
    return (
        <input
            className={style.input}
            value={value ?? undefined}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            type={type}
            placeholder={placeholder}
            step={step}
        />
    );
}
