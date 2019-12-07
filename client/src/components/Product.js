import React from "react";

//product information
export default function Product({ title, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>
        XDG Technologies has developed a proprietary, compact, handheld medical device for the treatment of Postaxial Polydactyly Type B in newborns with extra fingers and toes, and the removal of skin tags for people of all ages.
<br/><br/>
Postaxial Polydactyly Type B is a congenital malformation that causes a person to be born with extra fingers and toes that do not contain bone or ligaments. Skin tags are small outgrowths of skin that affect men and women of all ages, with increased incidence rates among obese, diabetic, and geriatric populations.
<br/><br/>
<b>Current Standards of Care</b><br/>
The current standard of care treatment for polydactyly is suture ligation where a thin thread is tightly tied to the base of the extra digit, restricting blood flow and causing the tissue to subsequently blacken, die and fall off over a period of seven to 10 days. At times, the extra digit may need to be surgically removed, requiring a surgical referral and general anesthesia for a newborn. Complications of the current standard treatment include: arterial bleeding, infection of the surgical site, and blackened digits that do not fall off after 10 days. Following even successful suture ligation procedures, people may experience pain, discomfort, and tingling, as well as intermittent bleeding, or ulceration, for many years after the treatment, or for their entire life.
<br/><br/>
Skin tags often occur in the neck, armpit and groin areas, causing both cosmetic and functional concerns. The current standard of care to remove skin tags is burning, cutting, or freezing the skin outgrowth, which may cause pain, bleeding, blistering, scarring, and pigmentation changes. In addition to uncomfortable results, these standard treatments may require multiple visits to resolve or completely remove the skin tag.
<br/><br/>
<b>The XDG Technologies Solution</b><br/>
An innovative solution from XDG Technologies will greatly improve the standard of care for polydactyly and skin tags. The device is a clamp that removes extra digits and skin tags through a procedure that takes approximately 10 minutes instead of 10 days. The process is less painful and has a shorter recovery time, making it more comfortable, as well as more time and cost effective for patients and care takers.
<br/><br/>
In the future, additional applications for the XDG clamp may include the treatment of moles, warts, hemorrhoids and scar tissue.
<br/><br/>
XDG holds the intellectual property along with the University of Florida, including patents and patents pending, for the device.

        </p>
      </div>
     
    </div>

  );
}
