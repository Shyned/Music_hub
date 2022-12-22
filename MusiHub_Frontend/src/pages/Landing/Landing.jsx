import concert from "../../assets/concert.mp4";
import Nav from "../../components/Nav";
export default function Landing() {
  return (
    <div class="w-full h-full">
      <video src={concert} autoplay loop class="object-cover relative" />
      <div class="bg-black text-white mix-blend-multiply text-9xl absolute top-56 left-56 w-fit h-fit">
        Music
      </div>
    </div>
  );
}
