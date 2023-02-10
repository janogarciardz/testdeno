import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test Fer$h Deno</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
         	Testeando el framework Fresh que corre sobre Deno :)
        </p>
        <Counter start={3} />
				<ul>
					<li><a href="/api/random-uuid">api</a></li>
					<li><a href="/github/janogarciardz">github</a></li>
					<li><a href="/about">about</a></li>
					<li><a href="/search">Search</a></li>
					<li><a href="/countdown">Bomba</a></li>
				</ul>

				<img
					src="/chart"
					class="mx-auto my-4 h-96"
					alt="an example chart provided as an image"
				/>
      </div>
    </>
  );
}
