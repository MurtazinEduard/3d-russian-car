import { useProgress } from "@react-three/drei";

import style from "./Loader.module.sass";
import doors from "../../assets/loaderDoors.jpg";
import { CSSTransition } from "react-transition-group";
const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  console.log(active);
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
          <h1>HELLO WORLD</h1>
        </div>
      </CSSTransition>
    </>
  );
};

export default Loader;
