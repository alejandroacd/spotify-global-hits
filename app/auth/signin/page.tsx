// pages/auth/signin.tsx
import { getProviders, signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export default function SignIn({ providers }: { providers: any }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold text-white mb-6 text-center">
                    Login to Spotify
                </h1>
                {Object.values(providers).map((provider: any) => (
                    <div key={provider.name} className="mt-4">
                        <Button
                            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                            className="w-full bg-green-500 hover:bg-green-600 text-white"
                        >
                            Continue with {provider.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
