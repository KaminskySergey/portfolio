"use client";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";


export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function switchLocale(nextLocale: string) {
        if (nextLocale === locale) return;

        const segments = pathname.split("/");
        segments[1] = nextLocale;
        router.push(segments.join("/"));
    }

    return (
        <div
            className="
                flex items-center gap-1 
                p-1 
                bg-gray-200 dark:bg-gray-900 
                rounded-full shadow-lg
                w-fit
            "
        >
            <LangButton
                label="EN"
                active={locale === "en"}
                onClick={() => switchLocale("en")}
            />
            <LangButton
                label="DE"
                active={locale === "de"}
                onClick={() => switchLocale("de")}
            />
        </div>
    );
}

interface ILangButton {
    label: string
    active: boolean
    onClick: () => void
}

function LangButton({ label, active, onClick }: ILangButton) {
    return (
        <button
            onClick={onClick}
            className={cn(
                `
                cursor-pointer relative rounded-full transition-all font-medium select-none text-[10px] px-3 py-1 md:text-xs sm:px-4 sm:py-1.5  bg-gray-100 text-black
                `,
                {
                    "text-gray-100 bg-blue-500 shadow-md": active,
                    "hover:bg-neutral-700 hover:text-white": !active,
                }
            )}
        >
            {label}
        </button>
    );
}