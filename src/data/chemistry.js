import { aImg, bImg, cImg, dImg, eImg, fImg, gImg, hImg, iImg, jImg, kImg, lImg, mImg, nImg, oImg, pImg, qImg, rImg, sImg, tImg, uImg, vImg, wImg, xImg, yImg, zImg } from "../assets/chemistry";
const CHEMISTRY_DATA = [
  {
    letter: "A",
    keywords: ["activation energy", "activation energies"],
    hint: "The minimum energy required for a collision to result in a reaction",
    image: aImg,
    questions: [
      "A student claims that adding a catalyst increases the activation energy of the forward reaction. Explain why this is incorrect and describe what actually happens.",
      "Write the Arrhenius equation and explain how it can be used to determine the activation energy of a reaction from experimental data.",
      "Sketch two Maxwell-Boltzmann curves: one at temperature T and one at T+10°C. Mark the activation energy and shade the area representing molecules with sufficient energy to react at each temperature.",
    ],
  },
  {
    letter: "B",
    keywords: ["born-haber cycle", "born haber cycle", "born-haber", "born haber"],
    hint: "An application of Hess's law used to calculate lattice enthalpies",
    image: bImg,
    questions: [
      "A student calculates a lattice enthalpy using a Born-Haber cycle and then compares it to the value from a theoretical ionic model. The experimental value is more negative. What does this tell you about the bonding in the compound?",
      "Explain why the enthalpy of atomisation of chlorine is exactly half the bond dissociation enthalpy of Cl₂.",
      "Draw a Born-Haber cycle for the formation of MgO(s) from Mg(s) and O₂(g), including all relevant enthalpy changes. Use this cycle to derive an expression for the lattice enthalpy of MgO in terms of the other enthalpy changes.",
    ],
  },
  {
    letter: "C",
    keywords: ["chirality", "chiral", "optical isomerism", "enantiomers", "enantiomer"],
    hint: "A property of molecules with a non-superimposable mirror image",
    image: cImg,
    questions: [
      "2-bromobutane has a chiral centre. Draw the structures of the two enantiomers and explain how they differ in their interaction with plane-polarised light.",
      "Explain why the reaction of butanone with NaBH₄ produces a racemic mixture of butan-2-ol.",
      "Explain why a racemic mixture shows no overall rotation of plane-polarised light, even though each individual enantiomer does.",
    ],
  },
  {
    letter: "D",
    keywords: ["d-block", "d block", "transition metals", "transition metal"],
    hint: "Elements Ti–Cu that form ions with an incomplete d sub-level",
    image: dImg,
    questions: [
      "Copper is considered a transition metal but zinc is not. Explain this distinction between transition metal and d-block elements in terms of electron configuration and ion formation.",
      "Explain why [Cu(H₂O)₆]²⁺ is blue but [CuCl₄]²⁻ is yellow-green, even though both contain Cu²⁺.",
      "Iron can catalyse the reaction between I⁻ and S₂O₈²⁻ homogeneously. Write equations for the two steps and explain why variable oxidation state is essential for this catalytic role.",
    ],
  },
  {
    letter: "E",
    keywords: ["equilibrium constant", "equilibrium", "kc", "kp"],
    hint: "A chemical reaction where the rates of the forward and reverse reactions are equal.",
    image: eImg,
    questions: [
      "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), explain the effect on the position of equilibrium and the value of Kp when (a) the pressure is increased, (b) the temperature is increased, and (c) a catalyst is added.",
      "Write an expression for Kc for the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g). A student states that if the concentration of SO₂ is doubled, Kc will double. Explain why this is incorrect.",
      "For an endothermic reaction at equilibrium, predict whether Kc increases or decreases when temperature is raised. Explain your reasoning using Le Chatelier's principle.",
      "The reaction A ⇌ B has Kc = 10 at 298 K. Calculate the value of Kc for 2B ⇌ 2A at the same temperature and explain your calculation.",
    ],
  },
  {
    letter: "F",
    keywords: ["fractional distillation", "fractionation", "alkanes", "alkane"],
    hint: "The process used to separate crude oil into fractions based on differences in boiling point",
    image: fImg,
    questions: [
      "Explain why shorter-chain alkanes have lower boiling points than longer-chain alkanes, in terms of intermolecular forces.",
      "Cracking converts longer-chain alkanes into shorter, more useful products. Explain the economic reason for this and give one condition required for catalytic cracking.",
      "Complete combustion of octane produces CO₂ and H₂O. Write the balanced equation for the incomplete combustion of octane that produces a toxic gas. Explain why CO is a dangerous pollutant.",
    ],
  },
  {
    letter: "G",
    keywords: ["gibbs free energy", "gibbs energy", "free energy", "delta g"],
    hint: "The energy function that determines whether a reaction is thermodynamically feasible",
    image: gImg,
    questions: [
      "A reaction has ΔH = +50 kJ mol⁻¹ and ΔS = +200 J mol⁻¹ K⁻¹. Calculate the temperature above which the reaction becomes feasible.",
      "A student states that a reaction with a negative ΔG will always proceed rapidly. Explain why this reasoning is flawed.",
      "Explain why the decomposition of calcium carbonate (CaCO₃ → CaO + CO₂) is not feasible at room temperature despite producing a gas, which increases entropy.",
    ],
  },
  {
    letter: "H",
    keywords: ["hydrogen bonding", "hydrogen bond", "hydrogen bonds"],
    hint: "A strong intermolecular force between a hydrogen atom bonded to N, O, or F and a lone pair on another N, O, or F",
    image: hImg,
    questions: [
      "Ice is less dense than liquid water. Use hydrogen bonding to explain this anomaly at the molecular level.",
      "Ethanol (C₂H₅OH) has a much higher boiling point than dimethyl ether (CH₃OCH₃) despite having the same molecular formula. Explain this difference.",
      "A student claims that HF has stronger hydrogen bonds than water because fluorine is more electronegative. However, water has the higher boiling point per mole. Explain this apparent contradiction.",
    ],
  },
  {
    letter: "I",
    keywords: ["ionisation energy", "ionization energy", "ionisation energies", "first ionisation energy"],
    image: iImg,
    hint: "The energy required to remove one mole of electrons from one mole of gaseous atoms or ions",
    questions: [
      "The first ionisation energies across Period 3 generally increase from Na to Ar, but there are two anomalies. Identify these anomalies and explain them in terms of electron configuration.",
      "The successive ionisation energies of an element are: 738, 1451, 7733, 10540 kJ mol⁻¹. Identify the group of this element and explain your reasoning.",
      "Explain why the first ionisation energy of magnesium is higher than that of sodium.",
    ],
  },
  {
    letter: "J",
    keywords: ["joule", "joules", "energetics", "calorimetry"],
    image: jImg,
    hint: "The SI unit of energy; used in enthalpy, entropy and free energy calculations — watch out for kJ vs J unit conversions",
    questions: [
      "Using the equation q = mcΔT, calculate the enthalpy change of combustion of ethanol if burning 0.46 g raises the temperature of 200 g of water by 13.5°C. The specific heat capacity of water is 4.18 J g⁻¹ K⁻¹. Suggest two reasons why your answer is less exothermic than the data book value.",
      "A reaction has ΔH = −286 kJ mol⁻¹ and ΔS = −163 J mol⁻¹ K⁻¹. A student calculates ΔG = −286 − (298 × −163) and gets a very large positive number. Identify the error and calculate the correct value of ΔG at 298 K.",
      "Use the following mean bond enthalpies to calculate ΔH for the combustion of methane: C–H = +413 kJ mol⁻¹, O=O = +498 kJ mol⁻¹, C=O = +805 kJ mol⁻¹, O–H = +464 kJ mol⁻¹. Explain why your answer differs from the standard enthalpy of combustion found in data books.",
    ],
  },
  {
    letter: "K",
    keywords: ["ka", "acid dissociation constant", "pka", "dissociation constant"],
    image: kImg,
    hint: "The equilibrium constant for the partial dissociation of a weak acid in water",
    questions: [
      "Ethanoic acid has Ka = 1.7 × 10⁻⁵ mol dm⁻³. Calculate the pH of a 0.10 mol dm⁻³ solution. State the assumption you make and justify it.",
      "A student states that a lower pKa value means a weaker acid. Explain why this is incorrect.",
      "At the half-equivalence point in a titration of a weak acid with a strong base, pH = pKa. Derive this relationship from the Ka expression.",
    ],
  },
  {
    letter: "L",
    keywords: ["ligands", "ligand", "complex ions", "complex ion", "coordination"],
    image: lImg,
    hint: "Molecules or ions that donate a lone pair to a central transition metal ion to form a coordinate bond",
    questions: [
      "Explain why EDTA⁴⁻ forms more stable complexes with metal ions than six separate water ligands, using entropy and enthalpy to support your answer.",
      "When excess concentrated hydrochloric acid is added to [Cu(H₂O)₆]²⁺, the coordination number of copper changes from 6 to 4. Explain why this change occurs in terms of the relative sizes of the ligands.",
      "Cisplatin acts as an anticancer drug, but the trans isomer does not. Explain why only the cis isomer can bond to two nitrogen atoms on the same strand of DNA.",
      "Give the equation for the reaction when dilute sodium hydroxide is added to [Fe(H₂O)₆]³⁺.",
    ],
  },
  {
    letter: "M",
    keywords: ["mechanism", "mechanisms", "nucleophilic substitution", "reaction mechanism"],
    image: mImg,
    hint: "A step-by-step description of how electrons move during a chemical reaction, shown with curly arrows",
    questions: [
      "Compare the rates of hydrolysis of chloroethane, bromoethane, and iodoethane with aqueous NaOH. With reference to the mechanism, explain the trend in terms of bond enthalpy.",
      "Outline the mechanism for the reaction of 2-bromopropane with KOH in ethanol.",
      "Name and outline the mechanism for the reaction of ethanoic anhydride with methanamine.",
    ],
  },
  {
    letter: "N",
    keywords: ["nucleophilic addition", "nucleophile", "nucleophilic", "carbonyl"],
    image: nImg,
    hint: "A reaction in which a nucleophile attacks a polar carbonyl group, forming an addition product",
    questions: [
      "HCN adds to propanone to form a hydroxynitrile. Draw the full mechanism using curly arrows, and explain why the product is a racemic mixture.",
      "NaBH₄ reduces aldehydes and ketones. Write the overall equation for the reduction of ethanal, showing [H] as the reductant. Explain why tertiary alcohols cannot be made by this method.",
      "Explain why ketones are generally less reactive than aldehydes towards nucleophilic addition.",
    ],
  },
  {
    letter: "O",
    keywords: ["oxidation state", "oxidation states", "oxidation number", "redox"],
    image: oImg,
    hint: "A measure of the degree of oxidation of an atom in a compound, used to track electron transfer in redox reactions",
    questions: [
      "Calculate the oxidation state of manganese in KMnO₄, MnO₂, MnSO₄ and Mn.",
      "A student writes the following half-equation: Fe³⁺ + e⁻ → Fe²⁺. Identify the process occurring and use E° values to predict whether Fe³⁺ can oxidise I⁻ to I₂.",
      "Write a half-equation for the reduction of dichromate ions (Cr₂O₇²⁻) to chromium(III) ions (Cr³⁺) in acidic solution.",
    ],
  },
  {
    letter: "P",
    keywords: ["ph", "buffer", "buffer solution", "buffer solutions", "ph scale"],
    image: pImg,
    hint: "pH = −log₁₀[H⁺]; buffer solutions resist changes in pH when small amounts of acid or base are added",
    questions: [
      "A buffer is made from 0.10 mol dm⁻³ ethanoic acid and 0.10 mol dm⁻³ sodium ethanoate. A student adds a small amount of HCl. Explain, with equations, how the buffer resists a change in pH.",
      "Explain why a mixture of a strong acid and its salt does NOT form an effective buffer, but a weak acid and its salt does.",
      "Calculate the pH of a buffer solution containing 0.20 mol dm⁻³ ethanoic acid (Ka = 1.7 × 10⁻⁵ mol dm⁻³) and 0.10 mol dm⁻³ sodium ethanoate.",
    ],
  },
  {
    letter: "Q",
    keywords: ["quantitative analysis", "calculations", "quantitative"],
    image: qImg,
    hint: "Using chemical tests such as flame tests, precipitate formation, and gas tests to identify unknown ions",
    questions: [
      "Calculate the volume of 0.100 mol dm⁻³ H₂SO₄ required to completely react with 25.0 cm³ of 0.200 mol dm⁻³ NaOH.",
      "A sample of hydrated copper(II) sulfate is heated to constant mass. Before heating, the mass is 2.50 g; after heating, the mass is 1.60 g. Calculate the formula of the hydrated salt.",
      "Calculate the volume of NO₂ gas produced at room temperature and pressure when 5.00 g of copper reacts with excess concentrated nitric acid. (Mr: Cu = 63.5, NO₂ = 46.0)",
    ],
  },
  {
    letter: "R",
    keywords: ["rate equation", "rate equations", "rate constant", "rate constants", "orders of reaction", "order of reaction"],
    image: rImg,
    hint: "Rate = k[A]ᵐ[B]ⁿ; the orders m and n must be determined experimentally, not from the stoichiometric equation",
    questions: [
      "For the reaction A + B → C, doubling [A] doubles the rate, but doubling [B] has no effect. Write the rate equation and explain what it means in terms of mechanism.",
      "The Arrhenius equation is k = Ae^(−Ea/RT). If the activation energy of a reaction is 50 kJ mol⁻¹, calculate the factor by which the rate constant increases when the temperature is raised from 298 K to 308 K.",
      "For the reaction 2NO + O₂ → 2NO₂, determine the rate equation if the reaction is first order in NO and zero order in O₂. Give the units of the rate constant and explain how the rate would change if the concentration of O₂ were doubled.",
    ],
  },
  {
    letter: "S",
    keywords: ["entropy", "delta s", "disorder"],
    image: sImg,
    hint: "A measure of the dispersal of energy and matter; a positive ΔS indicates increasing disorder",
    questions: [
      "Explain why dissolving ammonium nitrate in water is endothermic yet spontaneous at room temperature, using entropy and Gibbs free energy in your answer.",
      "Place the following in order of increasing standard molar entropy and justify your ranking: NaCl(s), H₂O(l), CO₂(g), Ne(g).",
      "A reaction has ΔH < 0 and ΔS < 0. A student claims it will never be feasible at high temperatures. Explain whether this is correct using ΔG = ΔH − TΔS.",
    ],
  },
  {
    letter: "T",
    keywords: ["titration", "titrations", "titration curve", "titration curves", "indicators", "indicator"],
    image: tImg,
    hint: "Graphs showing pH change during acid–base titrations; indicators must change colour within the steep portion of the curve",
    questions: [
      "Sketch the pH curve for the titration of 25 cm³ of 0.1 mol dm⁻³ ethanoic acid with 0.1 mol dm⁻³ NaOH. Explain why the equivalence point is above pH 7.",
      "Methyl orange (range pH 3.1–4.4) is suitable for strong acid–strong base titrations but not for weak acid–strong base titrations. Explain why, with reference to the shape of the titration curve.",
      "Explain why a mixture of a weak acid and weak base does not show a steep section on its titration curve, making it unsuitable for indicator-based titrations.",
    ],
  },
  {
    letter: "U",
    keywords: ["unsaturation", "electrophilic addition", "alkene", "alkenes"],
    image: uImg,
    hint: "Alkenes are unsaturated hydrocarbons; the electron-rich C=C double bond undergoes electrophilic addition reactions",
    questions: [
      "Draw the mechanism for the addition of HBr to propene, showing the formation of both possible carbocation intermediates. Identify the major product and explain why it is formed.",
      "Bromine water is decolourised by alkenes but not by alkanes. Explain this observation in terms of bonding and mechanism.",
      "Poly(propene) is described as chemically inert. Explain why addition polymers do not undergo the same addition reactions as their monomer alkenes.",
    ],
  },
  {
    letter: "V",
    keywords: ["vsepr", "vsepr theory", "shapes of molecules", "molecular shape", "molecular shapes"],
    image: vImg,
    hint: "Valence Shell Electron Pair Repulsion: electron pairs arrange themselves to minimise repulsion, determining molecular shape",
    questions: [
      "Water has a bond angle of 104.5° rather than 109.5°. Explain this using VSEPR theory and the relative magnitudes of different types of electron pair repulsions.",
      "Draw the shape of PCl₅ and explain its geometry.",
      "Draw the shape of PF3 and use this to predict the strongest type of intermolecular force between PF3 molecules. Explain your reasoning.",
    ],
  },
  {
    letter: "W",
    keywords: ["weak acids", "weak acid", "kw", "ionic product of water", "ionic product"],
    image: wImg,
    hint: "Weak acids only partially dissociate in water; Kw = [H⁺][OH⁻] = 1×10⁻¹⁴ mol² dm⁻⁶ at 298 K",
    questions: [
      "At 25°C, Kw = 1.0 × 10⁻¹⁴ mol² dm⁻⁶. At 60°C, Kw = 9.6 × 10⁻¹⁴ mol² dm⁻⁶. Calculate the pH of pure water at 60°C and explain whether pure water at 60°C is acidic.",
      "Explain why a 0.1 mol dm⁻³ solution of ethanoic acid has a higher pH than a 0.1 mol dm⁻³ solution of HCl, even though both are the same concentration.",
      "Calculate the pH of a solution made by dissolving 0.01 mol of a weak acid in 1 dm³ of water, given that the acid dissociation constant Ka is 1.0 × 10⁻⁵ mol dm⁻³. State any assumptions you make.",
    ],
  },
  {
    letter: "X",
    keywords: ["xenon", "noble gas", "noble gases", "noble gas chemistry"],
    image: xImg,
    hint: "Noble gases can form compounds when the central atom has more than 4 bonding pairs — use VSEPR to predict shapes including lone pairs",
    questions: [
      "Draw the shape of XeF₂.",
      "Draw the shape of XeF₄ and explain its geometry.",
      "Noble gases were originally called 'inert gases' but this term has been abandoned. Using xenon as an example, explain why 'inert' is no longer considered accurate, and suggest why xenon forms compounds more readily than neon or argon.",
    ],
  },
  {
    letter: "Y",
    keywords: ["yield", "atom economy", "percentage yield", "% yield"],
    image: yImg,
    hint: "Percentage yield measures actual vs. theoretical product obtained; atom economy measures how efficiently atoms in reactants are incorporated into the desired product",
    questions: [
      "The synthesis of aspirin involves reacting salicylic acid (Mr = 138) with ethanoic anhydride (Mr = 102) to give aspirin (Mr = 180) and ethanoic acid (Mr = 60). Calculate the atom economy for aspirin production.",
      "A student obtains 3.6 g of ethyl ethanoate from 6.0 g of ethanoic acid. Calculate the percentage yield. (Mr: CH₃COOH = 60, CH₃COOC₂H₅ = 88)",
      "A pharmaceutical company prefers a reaction with high atom economy even if the percentage yield is moderate. Explain why high atom economy is important from both economic and environmental perspectives.",
    ],
  },
  {
    letter: "Z",
    keywords: ["zwitterion", "zwitterions", "amino acid", "amino acids", "isoelectric point"],
    image: zImg,
    hint: "A molecule carrying both a positive and a negative charge; amino acids exist as zwitterions at their isoelectric point",
    questions: [
      "Draw the structure of glycine (H₂NCH₂COOH) as it exists in (a) strongly acidic solution, (b) at its isoelectric point, and (c) strongly alkaline solution.",
      "Explain why amino acids have much higher melting points than would be expected for molecules of their molecular mass, and why they are more soluble in water than in non-polar solvents.",
      "Draw the tripeptide formed from the amino acids alanine (H₂NCH(CH₃)COOH), serine (H₂NCH(CH₂OH)COOH) and lysine (H₂NCH((CH₂)₄NH₂)COOH).",
    ],
  },
];


export default CHEMISTRY_DATA;