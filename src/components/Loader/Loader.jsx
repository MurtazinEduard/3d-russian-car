import { useProgress } from "@react-three/drei";

import style from "./Loader.module.sass";
import { CSSTransition } from "react-transition-group";
const Loader = () => {
  const { active} = useProgress();
  return (
    <>
      <CSSTransition
        in={active}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: style.LoaderEnterActive,
          enterDone: style.LoaderEnterDone,
          exitActive: style.LoaderExit,
          exitDone: style.LoaderExitActive,
        }}
      >
        <div className={style.Loader}>
          <h1>Loading...</h1>
        </div>
      </CSSTransition>
    </>
  );
};

export default Loader;
