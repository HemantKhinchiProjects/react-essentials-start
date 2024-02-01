Q3. What is Props?
Ans - Props are special things you can pass to React building blocks (called components) to tell them what to look like and what to do.
They are like instructions for the components, telling them things like "show this text" or "use this color."
You can't change the props once you give them to a component, just like you can't change the color of a Lego block after it's snapped in place.
Imagine props as arguments passed to a function. Just like functions receive arguments and use them for calculations, React components receive props and use them to customize their behavior and appearance.
Props are read-only, meaning they cannot be changed within the receiving component. This ensures that data flows in a predictable and controlled manner throughout your React application.
Props are similar to HTML attributes, but they are more powerful and flexible. They can hold any type of data, including numbers, strings, objects, arrays, and even other React components.

Q4. When we should use children👶 prop in React?\
Ans. React में, children prop का उपयोग component के opening और closing tags के बीच content को pass करने के लिए किया जाता है|\
1- यह approach खासतौर पर जब component को एक single piece of renderable content receive करने के लिए design किया गया हो, तब beneficial होता है \
2- children prop को opaque data structure माना जाता है, इसका मतलब है कि आपको इसके structure पर निर्भर नहीं होना चाहिए। आप Children methods का उपयोग transform, filter, या count children करने के लिए कर सकते हैं|\
3- Children methods आपको JSX को manipulate और transform करने देते हैं जो आपने children prop के रूप में receive किया है 1. यहाँ कुछ common use cases children prop के लिए हैं:\
A. Passing text: आप text को component के children prop के रूप में pass कर सकते हैं। उदाहरण के लिए, <Button>Click me!</Button>\
B. Passing components: आप components को component के children prop के रूप में pass कर सकते हैं। उदाहरण के लिए, <Card><Image /><Text /></Card>\
C. Passing functions: आप functions को component के children prop के रूप में pass कर सकते हैं। उदाहरण के लिए, <Toggle>{(on) => <Switch on={on} />}</Toggle>\

Q5. What is State?
Ans - Lives inside the component.
Can change over time due to user interactions or other events.
Controls how the component looks and behaves (what it renders).
Causes the component to re-render whenever it changes, reflecting the new state in the UI.
Key points:

State is private to the component and should not be accessed directly from outside.
Use this.setState() to update state, which triggers a re-render.
Think of state as the dynamic, changeable data that makes your React components come alive!
I hope this analogy helps!
