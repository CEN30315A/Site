import React from "react";

export default function AboutUs({ title, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>Juan Carlos Roig, M.D. is the inventor, co-founder, and chairman of XDG Technologies. Dr. Roig has more than 25 years of experience, and is board certified in pediatrics as well as in neonatal and perinatal medicine. He is an Assistant Professor at the University of Florida College of Medicine, Department of Pediatrics (Neonatal Division), and the Medical Director for the Neonatal Intensive Care Unit at Munroe Regional Medical Center in Ocala, FL. He also provides services at other hospitals, including the UF Health Shands Hospital in Gainesville, FL. Dr. Roig is a Fellow with the American Academy of Pediatrics and has extensive experience in managing pediatric intensive care units in public and private hospitals.</p>
      </div>
    </div>
  );
}
