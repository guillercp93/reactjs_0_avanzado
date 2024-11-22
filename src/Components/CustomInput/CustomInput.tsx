import { Control, Controller, FieldError } from "react-hook-form";
import "./CustomInput.css";
import { FormValues } from "../../Schemas";

interface Props {
    name: keyof FormValues;
    control: Control<FormValues>;
    label: string;
    type?: string;
    error?: FieldError;
    autocomplete?: boolean
}

export const InputForm = ({ name, autocomplete, control, label, type, error }: Props) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) =>
                    <input type={type ?? "text"} {...field} autoComplete={autocomplete ? "on" : "off"} className={`form-control ${error ? "is-invalid" : ""}`} />
                }
            />
            {error && <span className="error">{error.message}</span>}
        </div>
    )
}
