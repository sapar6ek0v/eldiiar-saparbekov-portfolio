import useMousePosition from "../../helpers/hooks/useMousePosition";
import { CustomCursor } from "./styles";

const Cursor = () => {
  const { variants, cursorVariant, spring, text } = useMousePosition();

  return (
    // <CustomCursor
    //   variants={variants}
    //   className="circle"
    //   animate={cursorVariant}
    //   transition={spring}
    // >
    //   {text && <span className="cursorText">{text}</span>}
    // </CustomCursor>
    <div></div>
  );
};

export default Cursor;
