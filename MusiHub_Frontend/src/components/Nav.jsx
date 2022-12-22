import { A } from "@solidjs/router";
function Nav() {
  return (
    <div class=" sticky top-0 flex space-x-4 ">
      <A
        class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md 1/12"
        href="/"
      >
        Home
      </A>
      <A
        href="/music"
        class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md 1/12"
      >
        Music
      </A>
      <A
        href="/register"
        class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md 1/12"
      >
        Register
      </A>
      <A
        href="/signin"
        class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md w-1/12"
      >
        Sign In
      </A>
    </div>
  );
}

export default Nav;
