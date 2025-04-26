import { FormTextAreaProps } from "@/types/forms.types";

export default function FormTextArea({ id, label, placeholder, value, onChange }: FormTextAreaProps) {
    return(
        <div className="sm:col-span-4">
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <textarea 
                    id={id}
                    name={id} 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 shadow-sm outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
            </div>
        </div>
    )
}