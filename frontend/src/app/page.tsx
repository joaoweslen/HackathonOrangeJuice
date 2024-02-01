import Link from 'next/link';

export default function Page() {
  const contextData = {
     value: "funcionou"
  };

  return (
    <main>
      <section>
        <div>
          <Link href={{ pathname: '/login', query: contextData }} passHref>
            Login
          </Link>
        </div>
        <div>
          <Link href={{ pathname: '/cadastro', query: contextData }} passHref>
            Cadastro
          </Link>
        </div>
      </section>
    </main>
  );
}


