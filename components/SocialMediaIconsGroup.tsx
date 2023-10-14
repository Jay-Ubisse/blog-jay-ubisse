'use client'

import {
    GithubLogo,
    TwitterLogo,
    FacebookLogo,
    InstagramLogo,
    LinkedinLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

export const SocialMediaIconsGroup = () => {
    return (
        <div className="border border-white text-white px-4 py-2 rounded-md flex gap-3 mt-10 w-fit">
            <Link href=""
                className="hover:text-violet-900"
            >
                <GithubLogo size={32} weight="fill" />
            </Link>
            <Link href=""
                className="hover:text-violet-900"
            >
                <TwitterLogo size={32} weight="fill" />
            </Link>
            <Link href=""
                className="hover:text-violet-900"
            >
                <LinkedinLogo size={32} weight="fill" />
            </Link>
            <Link href=""
                className="hover:text-violet-900"
            >
                <FacebookLogo size={32} weight="fill" />
            </Link>
            <Link href=""
                className="hover:text-violet-900"
            >
                <InstagramLogo size={32} weight="fill" />
            </Link>
        </div>
    );
}