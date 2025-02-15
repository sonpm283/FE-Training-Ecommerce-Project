import { Link } from 'react-router-dom'
import Input from '@components/Input'
import Button from '@components/Button'
import useRegisterHandler from '@hooks/useRegisterHandler'
import ROUTES from '@/constants/routes'

export default function Register() {
  const { handleSubmit, onSubmit, control, errors, isLoading } = useRegisterHandler()
  return (
    <>
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register</h2>
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
          <Link to={ROUTES.LOGIN} className="text-blue-500 hover:underline">
            Đăng nhập ngay
          </Link>
        </p>
      </div>
    </>
  )
}
