// context/AuthContext.tsx
'use client';
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

type AuthContextType = {
    user: any;
    status: 'authenticated' | 'unauthenticated' | 'loading';
    login: (intendedAction?: () => Promise<void>) => Promise<void>; // Updated to accept action
    logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const { data: session, status } = useSession();
    const [pendingAction, setPendingAction] = useState<(() => Promise<void>) | null>(null);

    const login = async (intendedAction?: () => Promise<void>) => {
        if (intendedAction) {
            setPendingAction(() => intendedAction);
        }
        const callbackUrl = window.location.pathname;
        await signIn('spotify', { callbackUrl });
    };

    const logout = async () => {
        await signOut();
    };

    // Execute pending action after authentication
    useEffect(() => {
        if (status === 'authenticated' && pendingAction) {
            const executeAction = async () => {
                try {
                    await pendingAction();
                } catch (error) {
                    console.error('Failed to execute pending action:', error);
                } finally {
                    setPendingAction(null);
                }
            };
            executeAction();
        }
    }, [status, pendingAction]);

    const value = {
        user: session?.user ? { 
            ...session.user, 
            accessToken: session.accessToken 
        } : null,
        status,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}