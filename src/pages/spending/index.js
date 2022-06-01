import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DashboardLayout } from "../../components/Layout";

import Table from "../../components/Table";
import getTrackedEventID from "../../utils/getTrackedEventID";

export default function Spending() {
  const [trackData, setTrackData] = useState([]);
  const authAccount = useSelector((state) => state.auth);

  useEffect(() => {
    getTrackedEventID(authAccount.id, (data) => {
      setTrackData(() => data);
    });
  }, []);

  return (
    <>
      <div>Tracked Event</div>
      <Table data={trackData} />
    </>
  );
}
