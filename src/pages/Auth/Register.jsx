import { Link, useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '@components/Input'
import Button from '@components/Button'
import { useRegisterMutation } from '@apis/rootApi'
import { registerSchema } from '@schemas/authSchemas'
import { toast } from 'react-toastify'

export default function Register() {
  const navigate = useNavigate()
  const [
    registerMutation,
    { data = {}, isLoading, error, isError, isSuccess },
  ] = useRegisterMutation()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(registerSchema),
  })

  const onSubmit = (formData) => {
    registerMutation(formData)
  }

  useEffect(() => {
    if (isError) {
      const errorMessage = error?.data?.message || 'Có lỗi xảy ra khi đăng kí!'
      toast.error(errorMessage)
    }

    if (isSuccess) {
      navigate('/login')
      toast.success(data.message)
    }
  }, [navigate, isSuccess, data.message, isError, error])

  return (
    <>
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Register
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          label="User Name"
          control={control}
          placeholder="Tên của bạn"
          errors={errors}
        />
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
          {isLoading ? <p>Loading...</p> : <span>Register</span>}
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
