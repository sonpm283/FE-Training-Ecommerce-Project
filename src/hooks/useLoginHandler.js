import { useLoginMutation } from '@apis/authApi'
import { yupResolver } from '@hookform/resolvers/yup'
import { login } from '@redux/slices/authSlice'
import { loginSchema } from '@schemas/authSchemas'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export function useLoginHandler() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [loginMutation, { isLoading }] = useLoginMutation()

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

  const onSubmit = async (formData) => {
    try {
      // sử dụng unwrap để đợi 1 promise được quản lý bởi RTK, dễ dàng xử lý bằng try/catch một cách tự nhiên(khi resolve sẽ xử lý ở try, khi reject xử xử lý ở catch)
      const response = await loginMutation(formData).unwrap()
      dispatch(login(response))
      navigate('/')
      toast.success(response.message)
    } catch (error) {
      const errorMessage = error?.data?.message || 'Login failed. Please try again!'
      toast.error(errorMessage)
    }
  }

  return { handleSubmit, onSubmit, control, errors, isLoading }
}
