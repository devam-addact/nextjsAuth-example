import Link from 'next/link';
import {options} from './api/auth/[...nextauth]/options';
import {getServerSession} from 'next-auth/next';
import UserCard from './components/feature/userCard/userCardDetails';

export default async function Home() {
  const session = await getServerSession(options);
  console.log('session', session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ?(
        <UserCard user={session?.user} pageType={"Home"} />
      ):(
        <div className='flex justify-center flex-col items-center gap-5'>
          <h1 className='text-4xl'>Hi Welcome to the nextjsAuth example please sign in</h1>
            <Link href="/api/auth/signin">  
              <button className='bg-blue-500 p-2 rounded-sm w-40'>Sign In</button>
            </Link>
        </div>
      )}
    </main>
  );
}
