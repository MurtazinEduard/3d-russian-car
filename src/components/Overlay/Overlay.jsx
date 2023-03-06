import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { ChromePicker } from "react-color";
import { useDispatch } from "react-redux";
import { colorControl, suspensionControl, wheelsControl } from "../../store/controlSlice";
import style from "./Overlay.module.sass";
const Section = (props) => {
  return (
    <section
      className={style.Section}
      style={{
        opacity: props.opacity,
      }}
    >
      <div>
        <div className={style.wrapper}>{props.children}</div>
      </div>
    </section>
  );
};

const Overlay = () => {
  const scroll = useScroll();
  const dispatch = useDispatch();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);
  const [opacityFourthSection, setOpacityFourthSection] = useState(1);
  const [opacityFifthSection, setOpacityFifthSection] = useState(1);
  const [opacitySixthSection, setOpacitySixthSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);
  const [color, setColor] = useState({
    hsl: {
      h: 358.8235294117647,
      s: 1,
      l: 0.5,
      a: 1,
    },
    hex: "#ff0005",
    rgb: {
      r: 255,
      g: 0,
      b: 5,
      a: 1,
    },
    hsv: {
      h: 358.8235294117647,
      s: 1,
      v: 1,
      a: 1,
    },
    oldHue: 358.8235294117647,
    source: "hsv",
  });
  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 12));
    setOpacitySecondSection(scroll.curve(1 / 12, 1 / 6));
    setOpacityThirdSection(scroll.curve(3 / 12, 1 / 6));
    setOpacityFourthSection(scroll.curve(5 / 12, 1 / 6));
    setOpacityFifthSection(scroll.curve(7 / 12, 1 / 6));
    setOpacitySixthSection(scroll.curve(9 / 12, 1 / 6));
    setOpacityLastSection(scroll.range(22 / 24, 1 / 12));
  });

  const changeBodyColor = (color) => {
    setColor(color);
    dispatch(colorControl(color.hex));
  }
  const changeBodyHeight = (height) => {
    dispatch(suspensionControl(height))
  }

  const changeCarWheels = (wheel) => {
    dispatch(wheelsControl(wheel))
    console.log(wheel)
  }

  return (
    <Scroll html>
      <div className={style.Overlay}>
        <Section opacity={opacityFirstSection}>
          <div className={style.First}>
            <h1>{`<h1>Hello, I'm Eduard Murtazin<h1/>`}</h1>
            <hr />
            <div className={style.subtitle}>
              <div className={style.gradient__divider} />
              <span>Middle Frontend Developer</span>
              <div className={style.gradient__divider} />
            </div>
            <div className={style.subtitle}>
              <h2>{`<h2>I'm glad to present you my portfolio<h2/>`}</h2>
              <div className={style.gradient__divider2} />
            </div>
            <span>About Me:</span>
            <ul>
              <li>Hi, I'm Programmer 👨</li>
              <li>23 years Old 🧍‍♂️</li>
              <li>3 years of Experience💪</li>
              <li>Eternal Student🎓</li>
              <li>Location Is Nizhnevartovsk🏠</li>
              <li>Ready to Relocate✌️</li>
            </ul>
            <div className={style.gradient__divider3} />
          </div>
        </Section>
        <Section opacity={opacitySecondSection}>
          <div className={style.Second}>
            <h1>Here are my skillsets 🔥</h1>
            <div className={style.title}>
              <div className={style.gradient__divider3} />
              <p>Frontend 🚀</p>
              <div className={style.gradient__divider3} />
            </div>
            <ul>
              <li>ReactJS/Redux</li>
              <li>MobX</li>
              <li>VueJS/VueX</li>
              <li>THREE.js</li>
              <li>i18n</li>
              <li>MUI</li>
              <li>Vite</li>
            </ul>
            <div className={style.title}>
              <div className={style.gradient__divider2} />
              <p>Backend 🔬</p>
              <div className={style.gradient__divider2} />
            </div>
            <ul>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>WebPack</li>
            </ul>
          </div>
        </Section>
        <Section opacity={opacityThirdSection}>
          <div className={style.Third}>
            <h1>Choose the color 🌠</h1>
            <div className={style.picker}>
              <ChromePicker disableAlpha onChange={(e) => changeBodyColor(e)} color={color} />
            </div>
          </div>
        </Section>
        <Section opacity={opacityFourthSection}>
          <div className={style.Fourth}>
            <h1>Choose the rims 🛞 💿</h1>
            <FormControl >
              <span>Rims:</span>
              <RadioGroup onChange={(e) => changeCarWheels(e.target.value)}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="lambo"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="lambo"
                  control={<Radio color="secondary" />}
                  label="Lambo"
                />
                <FormControlLabel
                  value="classic"
                  control={<Radio color="secondary" />}
                  label="Classic"
                />
              </RadioGroup>
            </FormControl>
            <div className={style.gradient__divider3} />
          </div>
        </Section>
        <Section opacity={opacityFifthSection}>
          <div className={style.Fifth}>
            <h1>Suspension Height👻🔝</h1>
            <div className={style.slider}>
              <Slider
                onChange={(e) => changeBodyHeight(e.target.value)}
                aria-label="Temperature"
                min={-0.05}
                max={0.15}
                step={0.01}
                /* getAriaValueText={valuetext} */
                color="secondary"
              />
              🔩
            </div>

            <div className={style.gradient__divider2} />
          </div>
        </Section>
        <Section opacity={opacitySixthSection}>
          <div className={style.Sixth}>
            <h1>Plate Numbers✍</h1>
            <input placeholder="Enter Your Number" />
            <div className={style.gradient__divider3} />
          </div>
        </Section>
        <Section opacity={opacityLastSection}>
          <div className={style.Seventh}>
            <h1>Call Me</h1>
            <h2>My contacts:</h2>
            <ul>
              <li>
                Telegram:
                <a target='_blank' href="https://t.me/edwardggg"> @edwardggg</a>
              </li>
              <li>Email: noobas2016@inbox.ru</li>
              <li>Git: <a target='_blank' href="https://github.com/MurtazinEduard">Click</a></li>
            </ul>
            <div className={style.gradient__divider} />
          </div>
        </Section>
      </div>
    </Scroll>
  );
};

export default Overlay;
