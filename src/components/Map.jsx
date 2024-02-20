import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParam] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position : {lat},{lng}
      </h1>
      <button
        onClick={() => {
          setSearchParam({ lat: 23, lng: 50 });
        }}
      >
        Click Here
      </button>
    </div>
  );
}
