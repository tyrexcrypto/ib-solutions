const globe = new Globe(document.getElementById("globeViz"))

  .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")

  .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
  .backgroundColor("rgba(0,0,0,0)")

  .showAtmosphere(true)

  .atmosphereColor("#8B5cf6")

  .atmosphereAltitude(0.22);

globe

  .width(document.getElementById("globeViz").clientWidth)

  .height(document.getElementById("globeViz").clientHeight);

const points = [
  { lat: 6.52, lng: 3.37, size: 0.35, color: "#ff2b2b" }, // Lagos

  { lat: 40.71, lng: -74, size: 0.3, color: "#ffffff" }, // New York

  { lat: 51.5, lng: -0.12, size: 0.3, color: "#8B5CF6" }, // London

  { lat: 35.68, lng: 139.69, size: 0.3, color: "#ffffff" }, // Tokyo

  { lat: 25.2, lng: 55.27, size: 0.3, color: "#ff2b2b" }, // Dubai

  { lat: 43.65, lng: -79.38, size: 0.3, color: "#8B5CF6" }, // Toronto
];

globe

  .pointsData(points)

  .pointAltitude("size")

  .pointRadius(0.28)

  .pointColor("color");

const arcs = [
  {
    startLat: 6.52,

    startLng: 3.37,

    endLat: 40.71,

    endLng: -74,

    color: "#ff2b2b",
  },

  {
    startLat: 6.52,

    startLng: 3.37,

    endLat: 51.5,

    endLng: -0.12,

    color: "#8B5CF6",
  },

  {
    startLat: 6.52,

    startLng: 3.37,

    endLat: 35.68,

    endLng: 139.69,

    color: "#ffffff",
  },

  {
    startLat: 6.52,

    startLng: 3.37,

    endLat: 25.2,

    endLng: 55.27,

    color: "#ff2b2b",
  },

  {
    startLat: 6.52,

    startLng: 3.37,

    endLat: 43.65,

    endLng: -79.38,

    color: "#8B5CF6",
  },
];

globe

  .arcData(arcs)

  .arcColor("color")

  .arcStroke(0.7)

  .arcDashLength(0.35)

  .arcDashGap(2)

  .arcDashAnimateTime(1700);

globe.controls().autoRotate = true;

globe.controls().autoRotateSpeed = 0.28;

globe.controls().enableZoom = false;

globe.controls().enablePan = false;

globe.pointOfView({
  lat: 15,

  lng: 15,

  altitude: 1.8,
});

const controls = globe.controls();

controls.autoRotate = true;

controls.autoRotateSpeed = 0.45;

controls.enableZoom = false;
