const mapboxgl = {
    Map: jest.fn(() => ({
      on: jest.fn(),
      remove: jest.fn(),
      setCenter: jest.fn(),
      setZoom: jest.fn(),   
    })),
    Marker: jest.fn(() => ({
      setLngLat: jest.fn().mockReturnThis(),
      setPopup: jest.fn().mockReturnThis(),
      addTo: jest.fn(),
    })),
    Popup: jest.fn(() => ({
      setText: jest.fn().mockReturnThis(),
    })),
  };
  
  export default mapboxgl;