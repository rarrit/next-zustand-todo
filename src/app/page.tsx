import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>NEXT JS TODO LIST</h1>
      <Link href={'/todo'}>TODO START</Link>
    </>
  );
}
