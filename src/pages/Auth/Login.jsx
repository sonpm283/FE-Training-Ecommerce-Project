import Button from '@components/Button'
import Input from '@components/Input'
import { Link } from 'react-router-dom'
import { useLoginHandler } from '@hooks/useLoginHandler'

export default function Login() {
  const { handleSubmit, onSubmit, errors, control, isLoading } = useLoginHandler()

  return (
    <>
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
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
          className="flex items-center justify-center w-full uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
          type="submit"
          isLoading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? <p>Logging...</p> : <span>Login</span>}
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
