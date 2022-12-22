import { createEffect, createSignal } from "solid-js";
import music from "../../assets/music.png";

export default function Register() {
  const [enteredPassword, setEnteredPassword] = createSignal([]);
  const [hasPassword, setHasPassword] = createSignal(false);

  createEffect(() => {
    const userPassword = enteredPassword();
    console.log(userPassword.length);
  });
  // TODO: state manage password visiblity
  // TODO: animate drop down for confirm password

  return (
    <div class="flex items-center justify-center h-screen">
      <div class="container w-3/12 border-4 rounded h-5.5/6">
        <img
          src={music}
          alt="music note"
          class="w-fit
        "
        />
        <div class="container w-fit">
          <form class="flex flex-col">
            <label>Email</label>
            <input type="email" placeholder="email"></input>
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              onchange={(e) => {
                setEnteredPassword(e.target.value);
              }}
            ></input>
            <label>Confirm Password</label>
            <input type="password" placeholder="re-enter password"></input>
            <div class="flex space-x-4">
              <label>See Password</label>
              <input type="checkbox" id="password_checkbox"></input>
            </div>

            <button class="px-6 py-2 font-sans font-semibold text-white transition duration-300 ease-in-out delay-300 skew-y-6 bg-purple-600 border-b-4 border-purple-800 rounded shadow-lg shadow-purple-600/50 hover:skew-x-6 hover:border-purple-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
