// components/LoginForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { AuthButton, AuthInput } from '@/styles/Header/AuthStyle';
import { Column } from '@/styles/Global';
import { toast } from 'react-toastify';

const loginSchema = z.object({
    email: z.string().email('E-Posta adresi geçerli değil'),
    password: z.string().min(6, 'Parola en az 6 karakter olmalıdır'),
});

type LoginSchema = z.infer<typeof loginSchema>;

type LoginProps = {
    isModalOpen: boolean;
    setModalOpen: (value: boolean) => void;
}
const Login: React.FC<LoginProps> = ({isModalOpen, setModalOpen}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });



    const onSubmit = async (data: LoginSchema) => {
        const result = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (result?.error) {
            toast.error('E-Posta veya parola hatalı');
        } else {
            setModalOpen(!isModalOpen);
            toast.success('Başarıyla giriş yaptınız');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Column gap='5px' padding='20px 0'>
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

                    <AuthButton type="submit">Login</AuthButton>
                </Column>
            </form>
        </>
    );
}

export default Login
