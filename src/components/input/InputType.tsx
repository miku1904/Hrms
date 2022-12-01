export type InputProps ={
    type?:string;
    name?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
} 