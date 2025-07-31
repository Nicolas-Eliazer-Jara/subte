//Obtiene y filtra datos por línea// useSubteData.ts

import { useEffect, useState } from 'react';
import { SubteRoute } from '@/app/types/Subte';

export function useSubteData(routeId: string) {
  const [data, setData] = useState<SubteRoute[]>([]);
  const [filtered, setFiltered] = useState<SubteRoute[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch('/api/route');
      const json = await res.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (routeId) {
      const filtro = data.filter((r) => r.route_short_name === routeId);
      setFiltered(filtro);
    }
  }, [routeId, data]);

  return { filtered, loading };
}
