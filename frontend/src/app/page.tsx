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
            <a>Login</a>
          </Link>
        </div>
        <div>
          <Link href={{ pathname: '/cadastro', query: contextData }} passHref>
            <a>Cadastro</a>
          </Link>
        </div>
      </section>
    </main>
  );
}


