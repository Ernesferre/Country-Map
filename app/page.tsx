// app/page.tsx
import MapWithSearch from '../components/MapWithSearch';

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl m-6 text-white text-center ">Country Map</h1>
      <MapWithSearch />
    </div>
  );
}

