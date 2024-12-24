import { Controller } from 'react-hook-form'

const Input = ({ name, control, label, type = 'text', placeholder, errors, ...rest }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-600">
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => (
          <input
            onChange={onChange}
            value={value}
            name={name}
            type={type}
            placeholder={placeholder}
            autoComplete="true"
            {...rest}
            className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
          />
        )}
      />

      {errors[name] && (
        <p className="mt-2 inline-block text-xs text-red-500">{errors[name]?.message}</p>
      )}
    </div>
  )
}

export default Input
