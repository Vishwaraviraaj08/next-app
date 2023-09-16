import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <main className={'main'}>
      <Link href={"/posts"}>Click</Link>
    </main>
  )
}
