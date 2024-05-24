import Image from "next/image"
import { IUserCard } from "./interface/userCardDetails.interface"
import Link from "next/link";

export default function UserCard({ user, pageType }: IUserCard) {
    console.log(user);
    const greeting = user?.name ? (
        <h1 className="flex flex-col items-center p-3 font-bold text-3xl text-white">
            Hello Nice work {user?.name} !
        </h1>
    ) : null

    const emailDisplay = user?.email ? (
        <h1 className="flex flex-col items-center p-3 font-bold text-3xl text-white">
            {user?.email}
        </h1>
    ) : null

    const userImage = user?.image ? (
        <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src={user?.image}
            width={200}
            height={200}
            alt={user?.name ?? "Profile Pic"}
            priority={true}
        />
    ) : null

    return (
        <section className="flex flex-col gap-4 items-center">
            {userImage}
            {greeting}
            {emailDisplay}
            <Link href="/api/auth/signout">
                <button className='bg-blue-500 p-2 rounded-sm w-60'>Sign out</button>
            </Link>
        </section>
    )
}