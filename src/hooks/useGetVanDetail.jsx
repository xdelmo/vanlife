import { useEffect, useState } from "react";

export default function useGetVanDetail(id) {
  const [vanDetail, setVanDetail] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.vans));
  }, [id]);

  return vanDetail;
}
