export default function About() {
  return (
    <main className="m-auto  text-white">
      <h1 className="text-4xl text-center">Used hooks</h1>
      <ul className="mt-8">
        <li className="flex gap-4 items-center">
          <input type="checkbox" />
          <p>useState</p>
        </li>
        <li className="flex gap-4  items-center">
          <input type="checkbox" />
          <p>useEffect</p>
        </li>
        <li className="flex gap-4  items-center">
          <input type="checkbox" />
          <p>useRef</p>
        </li>
        <li className="flex gap-4  items-center">
          <input type="checkbox" />
          <p>useContext</p>
        </li>
        <li className="flex gap-4  items-center">
          <input type="checkbox" />
          <p>useCallback</p>
        </li>
        <li className="flex gap-4  items-center">
          <input type="checkbox" />
          <p>useMemo</p>
        </li>
        <li className="flex gap-4  items-center">
          <input type="checkbox" />
          <p>getStaticProps</p>
        </li>
        <li className="flex gap-4  items-center">
          <input type="checkbox" />
          <p>getServerSideProps</p>
        </li>
      </ul>
    </main>
  );
}
