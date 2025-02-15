import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '@schemas/authSchemas'
import { toast } from 'react-toastify'
import { useRegisterMutation } from '@apis/authApi'
import ROUTES from '@/constants/routes'

const useRegisterHandler = () => {
  const navigate = useNavigate()
  const [registerMutation, { isLoading }] = useRegisterMutation()

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

  const onSubmit = async (formData) => {
    try {
      const result = await registerMutation(formData).unwrap()

      toast.success(result.message)
      navigate(ROUTES.LOGIN)
    } catch (error) {
      const errorMessage = error?.data?.message || 'Register failed. Please try again!'
      toast.error(errorMessage)
    }
  }

  return { handleSubmit, onSubmit, control, errors, isLoading }
}

export default useRegisterHandler
