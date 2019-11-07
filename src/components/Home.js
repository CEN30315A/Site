import React from "react";

export default function Home({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>XDG Technologies LLC (XDG) has developed a proprietary, compact, hand-held medical device used to clamp and compress tissue during various surgical procedures. 
        In conjunction with an excision device, the clamp can be utilized during procedures such as skin tag removal and Type B polydactyly.
<br/><br/>
The XDG device is intended to impact the current standard of care in these types of surgical procedures which include surgical ligation and/or burning, cutting or 
freezing of the tissue subsequent to clamping. This impact is expected to be beneficial to the patient and the caretaker.
</p>
      </div>
    </div>
  );
}
