import concert from "../../assets/concert.mp4";
import { A } from "@solidjs/router";

export default function Landing() {
  return (
    <div class="w-full h-full">
      <video src={concert} autoplay loop class="object-cover relative" />
      <div class="absolute top-56 left-0 w-full">
        <div class="bg-black text-white mix-blend-multiply text-9xl  w-5/6">
          Music
        </div>
      </div>
      <nav class="absolute top-72 right-80 wi">
        <ul class="text-black text-2xl space-x-4 flex">
          <li>
            <A href="/signin" class="bg-gray-600 ">
              Sign In
            </A>
          </li>
          <li>
            <A href="/register" class="bg-gray-600">
              Register
            </A>
          </li>
          <li>
            <A href="/music" class="bg-gray-600">
              Music
            </A>
          </li>
        </ul>
      </nav>
    </div>
  );
}
