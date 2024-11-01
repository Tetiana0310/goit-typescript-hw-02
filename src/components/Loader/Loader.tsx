import css from "../Loader/Loader.module.css";
import { MagnifyingGlass } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#00008B4"
      />
    </>
  );
}
export default Loader