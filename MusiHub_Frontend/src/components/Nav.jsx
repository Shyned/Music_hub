import { A } from "@solidjs/router";
function Nav() {
  return (
    <div class="flex space-x-4">
      <A
        class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md"
        href="/"
      >
        Home
      </A>
      <A
        href="/music"
        class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md"
      >
        Music
      </A>
      <A
        href="/register"
        class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md"
      >
        Register
      </A>
      <A
        href="/signin"
        class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md"
      >
        Sign In
      </A>
    </div>
  );
}

export default Nav;
