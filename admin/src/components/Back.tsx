import { useRouter } from "next/router";
import { MdArrowBackIosNew } from "react-icons/md";

const Back = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="flex cursor-pointer items-center"
    >
      <MdArrowBackIosNew className="mr-2" /> Back
    </div>
  );
};

export default Back;
