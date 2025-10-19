import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export default function Return({ prev }) {
  return (
    <Link to={`/${prev}`}>
      <button
        id="return"
        style={{
          borderWidth: "1px",
        }}
        className="bg-[#624A35]/90 py-[.5rem] px-[1rem] rounded-lg flex justify-center items-center cursor-pointer duration-300 hover:bg-[#563F2D]/90"
      >
        <ArrowBackIcon />
      </button>
    </Link>
  );
}
