Q4. When we should use children prop in React?\
Ans. React में, children prop का उपयोग component के opening और closing tags के बीच content को pass करने के लिए किया जाता है|\
1- यह approach खासतौर पर जब component को एक single piece of renderable content receive करने के लिए design किया गया हो, तब beneficial होता है \
2- children prop को opaque data structure माना जाता है, इसका मतलब है कि आपको इसके structure पर निर्भर नहीं होना चाहिए। आप Children methods का उपयोग transform, filter, या count children करने के लिए कर सकते हैं|\
3- Children methods आपको JSX को manipulate और transform करने देते हैं जो आपने children prop के रूप में receive किया है 1. यहाँ कुछ common use cases children prop के लिए हैं:\
A. Passing text: आप text को component के children prop के रूप में pass कर सकते हैं। उदाहरण के लिए, <Button>Click me!</Button>\
B. Passing components: आप components को component के children prop के रूप में pass कर सकते हैं। उदाहरण के लिए, <Card><Image /><Text /></Card>\
C. Passing functions: आप functions को component के children prop के रूप में pass कर सकते हैं। उदाहरण के लिए, <Toggle>{(on) => <Switch on={on} />}</Toggle>\