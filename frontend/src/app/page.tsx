import Link from 'next/link';

export default function page() {
  return (
    <main>
      <section>
        <div>
          <Link href="/login" passHref>Login</Link>
        </div>
        <div>
          <Link href="/cadastro" passHref>Cadastro</Link>
        </div>
      </section>
    </main>
  );
}


