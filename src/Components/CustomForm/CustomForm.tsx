import { SubmitHandler, useForm } from "react-hook-form"
import { formSchema, FormValues } from "../../Schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputForm } from "../CustomInput/CustomInput";

export const CustomForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        mode: "onBlur",
        defaultValues: {
            name: "test",
            email: "test@email.com",
            password: "******",
            confirmPassword: "******"
        }
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.debug(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm
                name="name"
                control={control}
                label="Name"
                type="text"
                error={errors.name}
            />
            <InputForm
                name="email"
                control={control}
                label="Email"
                type="email"
                error={errors.email}
            />
            <InputForm
                name="password"
                control={control}
                label="Password"
                type="password"
                error={errors.password}
            />
            <InputForm
                name="confirmPassword"
                control={control}
                label="Confirm Password"
                type="password"
                error={errors.confirmPassword}
            />
            <button type="submit">Submit</button>
        </form>
    )
}
