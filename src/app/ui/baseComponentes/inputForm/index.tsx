interface InputFormProps {
  label?: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const InputForm: React.FC<InputFormProps> = ({ label, value, type, onChange, error, placeholder }) => {
  // TODO: Create type for input type and add param style to input, example: color border
  return (
    <div className="form-control gap-2">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type ?? 'text'}
        placeholder={placeholder ?? ''}
        className="input input-bordered w-full"
        value={value}
        onChange={onChange}
      />
      {
        error && (
          <span className="text-red-500">{error}</span>
        )
      }
    </div>
  )
};