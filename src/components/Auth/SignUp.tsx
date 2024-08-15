// components/RegisterForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { AuthButton, AuthInput } from '@/styles/Header/AuthStyle';
import { Column } from '@/styles/Global';
import { addUserToDB } from '@/lib/server';
import { toast } from 'react-toastify';

const registerSchema = z.object({
  email: z.string().email('E-posta adresi geçerli değil'),
  password: z.string().min(6, 'Parola en az 6 karakter olmalıdır'),
  confirmPassword: z.string().min(6, 'Parola en az 6 karakter olmalıdır'),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords do not match',
});

type RegisterSchema = z.infer<typeof registerSchema>;

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const router = useRouter();

  const onSubmit = async (data: RegisterSchema) => {
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      if (userCredential.user) {
        const result = await signIn('credentials', {
          redirect: false, 
          email: data.email,
          password: data.password,
        });
        await addUserToDB({ email: data.email, id: userCredential.user.uid, role: 'user', cart: [], orders: [], favorites: [],  name: "", surname: "", adress: ""});
        if (!result?.error) {
          router.push('/'); 
          toast.success('Başarıyla kayıt oldunuz');
        }
      }
    } catch (error: any) {
      toast.error("Bir Hata oluştu.");
    }
  };
  return (
    <>
   
    <form onSubmit={handleSubmit(onSubmit)}>
    <Column gap='5px'>
      <AuthInput
        type="email"
        placeholder="Email"
        {...register('email')}
        />
      {errors.email && <p>{errors.email.message}</p>}

      <AuthInput
        type="password"
        placeholder="Password"
        {...register('password')}
        />
      {errors.password && <p>{errors.password.message}</p>}

      <AuthInput
        type="password"
        placeholder="Confirm Password"
        {...register('confirmPassword')}
        />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <AuthButton type="submit">Register</AuthButton>
        </Column>
    </form>
    </>
  );
}

export default SignUp