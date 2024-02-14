// import AppNav from "../components/AppNav";
import SideBar from "../components/SideBar";
import styles from "./Applayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
    </div>
  );
}
