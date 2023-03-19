import { useEffect, useState } from "react";

export default function useGetVanDetail({ params }) {
  const [vanDetail, setVanDetail] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.vans));
  }, [params.id]);

  return vanDetail;
}
