import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Table from "../components/Table";
import getTrackedEventID from "../utils/getTrackedEventID";

export default function Home() {
  const router = useRouter();
  const [trackData, setTrackData] = useState([]);
  const authAccount = useSelector((state) => state.auth);

  useEffect(() => {
    if (!authAccount.id) {
      router.push("/signin");
    }
  }, []);

  useEffect(() => {
    getTrackedEventID(authAccount.id, (data) => {
      setTrackData(() => data);
    });

  }, []);

  return (
    <section className=" container flex mx-auto flex-col items-center justify-center p-8">
      <h3>Your ID:</h3>
      <p>{authAccount.id}</p>

      <div className="mt-8">Tracked Event</div>
      <Table data={trackData} />
    </section>
  );
}
