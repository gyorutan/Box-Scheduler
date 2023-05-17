import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header({ label }) {
  // const label = pathname.split("/")[1].charAt(0).toUpperCase() + pathname.slice(2)
  const router = useRouter();

  return (
    <div className="border-b-2 border-[#1e2f58] p-2">
      <div className="flex flex-row items-center gap-2">
        <Image
          onClick={() => router.back(-1)}
          src={'/images/arrow.png'}
          width={30}
          height={30}
          alt="<"
          className="
              rounded-full
              cursor-pointer 
              hover:bg-gray-200
              transition
          "
        />
        <h1 className="text-black text-xl font-bold">{label}</h1>
      </div>
    </div>
  );
}
