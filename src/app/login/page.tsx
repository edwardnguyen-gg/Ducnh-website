
"use client";
import React, { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { authenticate } from './actions';

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button className="btn btn-primary" aria-disabled={pending} type="submit" style={{ width: '100%' }}>
            {pending ? 'Đang xử lý...' : 'Đăng Nhập'}
        </button>
    );
}

export default function LoginPage() {
    const [errorMessage, dispatch] = React.useActionState(authenticate, undefined);

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            minHeight: '80vh', padding: '16px'
        }}>
            <form action={dispatch} className="card" style={{ width: '100%', maxWidth: '400px' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Đăng Nhập Hệ Thống</h1>
                <div style={{ marginBottom: '16px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '8px' }}>Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="admin@lecturer.com"
                        required
                        style={{
                            width: '100%', padding: '12px', borderRadius: '8px',
                            border: '1px solid #ccc'
                        }}
                    />
                </div>
                <div style={{ marginBottom: '24px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '8px' }}>Mật khẩu</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="********"
                        required
                        minLength={6}
                        style={{
                            width: '100%', padding: '12px', borderRadius: '8px',
                            border: '1px solid #ccc'
                        }}
                    />
                </div>
                <LoginButton />
                {errorMessage && (
                    <div style={{ marginTop: '16px', color: 'red', textAlign: 'center' }}>
                        <p>{errorMessage}</p>
                    </div>
                )}
            </form>
        </div>
    );
}
