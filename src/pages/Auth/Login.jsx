import Button from '@components/Button'
import Input from '@components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLoginMutation } from '@apis/rootApi'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { loginSchema } from '@schemas/authSchemas'
import { login } from '@redux/slices/authSlice'
import { useDispatch } from 'react-redux'

export default function Login() {
  const dispath = useDispatch()
  const navigate = useNavigate()
  const [loginMutation, { data = {}, isLoading, isError, error, isSuccess }] =
    useLoginMutation()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = (data) => {
    loginMutation(data)
  }

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message)
    }

    if (isSuccess) {
      dispath(login(data))
      navigate('/')
      toast.success(data.message)
    }
  }, [navigate, isError, data, dispath, isSuccess, data.message])

  return (
    <>
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Login
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

        <Button
          className="w-full uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
          type="submit"
        >
          {isLoading ? <p>Loading...</p> : <span>Login</span>}
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Chưa có tài khoản?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </>
  )
}
