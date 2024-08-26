// app/page.tsx
import MapWithSearch from '../components/MapWithSearch';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-yellow-400">Country Map</h1>
      <MapWithSearch />
    </div>
  );
}

