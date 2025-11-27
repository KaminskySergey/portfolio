
import React from 'react';
import Link from 'next/link';
import { Mail, MapPinHouse, Phone } from 'lucide-react'
export default function ContactInformation() {
    return (
        <div className='flex flex-col gap-7'>
            <h3 className='text-2xl font-semibold text-center'>Contact Information</h3>
            <ul className='flex flex-col gap-4'>

                <li>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-900 rounded-full p-3 shadow-lg flex items-center justify-center'>
                            <Mail className='w-6 h-6 text-blue-500' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h4 className='text-base font-medium'>Email</h4>
                            <Link
                                href="mailto:serhiikama@gmail.com"
                                target="_blank"
                                rel="noreferrer noopener"
                                className='text-lg text-gray-900 dark:text-white transition-colors duration-200 ease-in hover:text-blue-500'
                            >
                                serhiikama@gmail.com
                            </Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-900 rounded-full p-3 shadow-lg flex items-center justify-center'>
                            <Phone className='w-6 h-6 text-blue-500' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h4 className='text-base font-medium'>Phone</h4>
                            <Link
                                href="tel:+4915565521833"
                                target="_blank"
                                rel="noreferrer noopener"
                                className='text-lg text-gray-900 dark:text-white transition-colors duration-200 ease-in hover:text-blue-500'
                            >
                                +4915565521833
                            </Link>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-900 rounded-full p-3 shadow-lg flex items-center justify-center'>
                            <MapPinHouse className='w-6 h-6 text-blue-500' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h4 className='text-base font-medium'>Location</h4>
                            <a
                                href="https://www.google.com/maps?q=Darmstadt"
                                target="_blank"
                                rel="noreferrer noopener"
                                className='text-lg text-gray-900 dark:text-white transition-colors duration-200 ease-in hover:text-blue-500'
                            >
                                Darmstadt, Germany
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="mt-6 md:mt-12 flex flex-col items-center gap-4">
                <h3 className="text-base font-medium">Follow me</h3>

                <ul className="flex  -mx-1.5 ">

                    <li >
                        <Link
                            href="https://www.linkedin.com/in/serhii-kaminskyi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col rounded-full p-3 group transition-colors duration-200 ease-in items-center
             hover:bg-gray-800"
                        >
                            <svg className="w-8 h-8 text-white group-hover:text-blue-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"></path>
                                <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"></path>
                                <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"></path>
                            </svg>
                        </Link>
                    </li>
                    <li >
                        <Link href='https://www.facebook.com/kaminskijstalker/'
                            target='_blank'
                            rel="noopener noreferrer"
                            className="flex flex-col rounded-full p-3 group transition-colors duration-200 ease-in items-center
             hover:bg-gray-800"
                        >
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor"></path>
                            </svg>
                        </Link>
                    </li>
                    <li >
                        <Link href='https://www.instagram.com/serhii60101/profilecard/?igsh=OWU4Yjd3Zjd0MmN2'
                            target='_blank'
                            rel="noopener noreferrer"
                            className="flex flex-col rounded-full p-3 group transition-colors duration-200 ease-in items-center
             hover:bg-gray-800"
                        >
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor"></path>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}