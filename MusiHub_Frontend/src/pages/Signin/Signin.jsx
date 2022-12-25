import artist from "../../assets/artist.jpg";

export default function Signin() {
  return (
    <div class="bg-black w-full h-full">
      <img src={artist} alt="music artist on stage holding a mic" />
      <form>
        <label>Email</label>
        <input></input>
        <label>Password</label>
        <input placeholder="Password" type="password"></input>
      </form>
    </div>
  );
}
