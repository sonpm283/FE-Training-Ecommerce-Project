import { useLoginMutation } from '@apis/authApi'
import { yupResolver } from '@hookform/resolvers/yup'
import { setUserData } from '@redux/slices/authSlice'
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
      const response = await loginMutation(formData).unwrap()

      dispatch(setUserData(response?.data))
      navigate('/')
      toast.success(response.message)
    } catch (error) {
      const errorMessage = error?.data?.message || 'Login failed. Please try again!'
      toast.error(errorMessage)
    }
  }

  return { handleSubmit, onSubmit, control, errors, isLoading }
}
