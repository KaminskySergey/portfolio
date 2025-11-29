'use client';

import { useTranslations } from 'next-intl';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from "react-hot-toast"
export default function ContactForm() {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false);
    const t = useTranslations('contact')

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/contact', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            const data = await res.json();
            if (!res.ok) {
                toast.error(data.error || t('errorSending'));
                return;
            }

            toast.success(t('sentSuccess'));
            setForm({ fullName: "", email: "", message: "" });

        } catch (error) {
            toast.error(t('networkError'));
            console.log(error)
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className='bg-gray-900 flex flex-col items-center gap-6 p-6 rounded-2xl animate-on-scroll opacity-0' data-anim="slide-right">
            <h3 className="text-xl font-semibold text-white">{t('sendMessage')}</h3>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>

                {/* Full Name */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="fullName" className='text-gray-200'>{t('fullName')}<span className="text-red-500 ml-0.5">*</span></label>
                    <input
                        value={form.fullName}
                        type="text"
                        id='fullName'
                        placeholder={t('ph_fullName')}
                        name='fullName'
                        required
                        onChange={(e) => handleChange(e)}
                        className='w-full rounded-xl bg-gray-800 border border-gray-700 p-3 text-white 
                   placeholder-gray-500 focus:outline-none focus:border-blue-500 
                   focus:ring-2 focus:ring-blue-500/30'
                    />
                </div>

                {/* Email */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-gray-200'>{t('emailForm')}<span className="text-red-500 ml-0.5">*</span></label>
                    <input
                        value={form.email}
                        type="email"
                        id='email'
                        placeholder={t('ph_email')}
                        name='email'
                        required
                        onChange={(e) => handleChange(e)}
                        className='w-full rounded-xl bg-gray-800 border border-gray-700 p-3 text-white 
                   placeholder-gray-500 focus:outline-none focus:border-blue-500 
                   focus:ring-2 focus:ring-blue-500/30'
                    />
                </div>

                {/* Message */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor="message" className='text-gray-200'>{t('message')}<span className="text-red-500 ml-0.5">*</span></label>
                    <textarea
                        value={form.message}
                        name="message"
                        id="message"
                        rows={4}
                        required
                        onChange={(e) => handleChange(e)}
                        placeholder={t('ph_message')}
                        className='w-full rounded-xl bg-gray-800 border border-gray-700 p-3 text-white 
                   placeholder-gray-500 focus:outline-none focus:border-blue-500 
                   focus:ring-2 focus:ring-blue-500/30 resize-none'
                    ></textarea>
                </div>
                <button className='font-semibold text-white font-sans rounded-full bg-blue-700 transition-colors duration-200 ease-in hover:bg-blue-900 hover:text-gray-200 px-6 py-3 cursor-pointer' type="submit" disabled={loading}>{loading ? t('sendLoading') : t('send')}</button>
            </form>
        </div>
    );
}