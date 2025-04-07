import { useDynamicAdapt } from './dynamicAddapt.js'
import { sliderConstructor, mainsSlider,cardSlider, cardExamples } from "./components/slider.js";
import { buttonsClickFn, busketFn } from "./components/buttons.js";
import { inputMask, inputPasswordFn } from "./components/input.js";
import modal from "./components/modal.js";
import { textResize } from './components/textResize.js';

useDynamicAdapt()
sliderConstructor();
mainsSlider();
buttonsClickFn();
inputMask();
inputPasswordFn();
busketFn();
cardSlider();
cardExamples();
modal();
textResize();