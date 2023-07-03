const Home = async () => {
  const res = await import('api/commits/route');
  const { commits } = await (await res.GET()).json();

  return <main>Main Page</main>;
};

export default Home;
