import { Link } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from '@components/Input'
import Button from '@components/Button'

const schema = yup.object().shape({
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: yup
    .string()
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    .required('Mật khẩu là bắt buộc'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Mật khẩu xác nhận không khớp')
    .required('Xác nhận mật khẩu là bắt buộc'),
})

export default function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Register
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          label="Email"
          control={control}
          placeholder="Email của bạn"
          errors={errors}
        />

        <Input
          name="password"
          label="Mật khẩu"
          control={control}
          type="password"
          placeholder="Mật khẩu của bạn"
          errors={errors}
        />

        <Input
          name="confirmPassword"
          label="Xác nhận mật khẩu"
          control={control}
          type="password"
          placeholder="Xác nhận mật khẩu"
          errors={errors}
        />

        <Button
          className="w-full uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
          type="submit"
        >
          Register
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Đã có tài khoản?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Đăng nhập ngay
          </Link>
        </p>
      </div>
    </>
  )
}
