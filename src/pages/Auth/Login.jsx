import Button from '@components/Button'
import Input from '@components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLoginMutation } from '@apis/rootApi'
import { toast } from 'react-toastify'
import { loginSchema } from '@schemas/authSchemas'
import { login } from '@redux/slices/authSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loginMutation, { data = {}, isLoading, isSuccess, error, isError }] =
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

  // const onSubmit = async (formData) => {
  //   try {
  //     const result = await loginMutation(formData).unwrap()
  //     dispatch(login(result))
  //     navigate('/')
  //     toast.success(result.message)
  //   } catch (err) {
  //     toast.error(err?.data?.message)
  //   }
  // }

  const onSubmit = (formData) => {
    loginMutation(formData)
  }

  useEffect(() => {
    if (isError) {
      const errorMessage = error?.data?.message || 'Có lỗi xảy ra khi đăng nhập'
      toast.error(errorMessage)
    }
  }, [isError, error])

  useEffect(() => {
    if (isSuccess) {
      dispatch(login(data))
      navigate('/')
      toast.success(data.message)
    }
  }, [data, data.message, isSuccess, dispatch, navigate])

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
