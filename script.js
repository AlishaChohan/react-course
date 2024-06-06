import { createRoot } from "react-dom/client";

const para=<p>this is a paragraph</p>

const card=<div>

    <img src="/Users/alishachohan/Desktop/test/react-course/images.jpeg" alt=""/>
</div>

const root = createRoot(document.getElementById('root'));
root.render(card);