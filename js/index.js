import { useDynamicAdapt } from './dynamicAddapt.js'
import { sliderConstructor, mainsSlider,resultModalSlier, cardSlider, cardExamples, cardSlider2 } from "./components/slider.js";
import { buttonsClickFn, busketFn, sliderBtnToPage,mobileMenuButtonFn, subscribeButton } from "./components/buttons.js";
import { inputMask, inputPasswordFn } from "./components/input.js";
import { modal, modalSearch} from "./components/modal.js";
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
subscribeButton();
modalSearch();
resultModalSlier();


Fancybox.bind('[data-fancybox="video"]');
Fancybox.bind("[data-fancybox]");