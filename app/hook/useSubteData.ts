import { useEffect, useState } from 'react';

export function useSubteData(selectedRouteId: string) {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/subte/route');
        const data = await res.json();

        const routes = data.routes;
        if (Array.isArray(routes)) {
          const filtrado = routes.filter(r => r.route_short_name === selectedRouteId);
          setFilteredData(filtrado);
        } else {
          setFilteredData([]); // prevenir errores
        }
      } catch (e) {
        console.error("Error cargando rutas de subte:", e);
        setFilteredData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedRouteId]);

  return { filteredData, loading };
}
