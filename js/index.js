import { useDynamicAdapt } from './dynamicAddapt.js'
import { sliderConstructor, mainsSlider,cardSlider, cardExamples, cardSlider2 } from "./components/slider.js";
import { buttonsClickFn, busketFn, sliderBtnToPage, mobileMenuButtonFn } from "./components/buttons.js";
import { inputMask, inputPasswordFn } from "./components/input.js";
import modal from "./components/modal.js";
import { textResize } from './components/textResize.js';
import { headerScroll } from './components/headerScroll.js';

useDynamicAdapt()
sliderConstructor();
mainsSlider();
headerScroll();
buttonsClickFn();
inputMask();
inputPasswordFn();
busketFn();
cardSlider();
cardExamples();
modal();
textResize();
sliderBtnToPage();
cardSlider2();
mobileMenuButtonFn();


Fancybox.bind('[data-fancybox="video"]');
Fancybox.bind("[data-fancybox]");