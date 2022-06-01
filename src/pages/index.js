import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const authAccount = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authAccount.id) {
      router.push("/signin");
    }
  }, []);

  return (
    <section className=" container flex mx-auto flex-col items-center justify-center p-8">
      <h3>Your ID:</h3>
      <p>{authAccount.id}</p>
    </section>
  );
}
