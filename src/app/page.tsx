import {
  RegisterLink,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components';

export default function Home() {
  return (
    <div className="grid gap-5">
      <h1>Kinde Auth + Nextjs</h1>
      <div className="flex gap-5">
        <LoginLink className="px-4 py-2 rounded-lg text-white bg-blue-700 cursor-pointer">
          Sign in
        </LoginLink>
        <RegisterLink className="px-4 py-2 rounded-lg text-white bg-blue-700 cursor-pointer">
          Sign up
        </RegisterLink>
      </div>
    </div>
  );
}
