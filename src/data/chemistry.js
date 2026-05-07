import { aImg, bImg, cImg, dImg, eImg, fImg, gImg, hImg, iImg, jImg, kImg, lImg, mImg, nImg, oImg, pImg, qImg, rImg, sImg, tImg, uImg, vImg, wImg, xImg, yImg, zImg } from "../assets/chemistry";
const CHEMISTRY_DATA = [
  {
    letter: "A",
    keywords: ["activation energy", "activation energies"],
    hint: "The minimum energy required for a collision to result in a reaction",
    image: aImg,
    questions: [
      "What is activation energy?",
      "How does a catalyst affect activation energy?",
      "What happens to reaction rate if activation energy is lowered?",
    ],
  },
  {
    letter: "B",
    keywords: ["born-haber cycle", "born haber cycle", "born-haber", "born haber"],
    hint: "An application of Hess's law used to calculate lattice enthalpies",
    image: bImg,
    questions: [
      "What is a Born-Haber cycle used for?",
      "What law is a Born-Haber cycle based on?",
      "What quantity can be found from a Born-Haber cycle?",
    ],
  },
  {
    letter: "C",
    keywords: ["chirality", "chiral", "optical isomerism", "enantiomers", "enantiomer"],
    hint: "A property of molecules with a non-superimposable mirror image",
    image: cImg,
    questions: [
      "What makes a carbon atom chiral?",
      "What are enantiomers?",
      "Why does a racemic mixture show no overall optical rotation?",
    ],
  },
  {
    letter: "D",
    keywords: ["d-block", "d block", "transition metals", "transition metal"],
    hint: "Elements Ti–Cu that form ions with an incomplete d sub-level",
    image: dImg,
    questions: [
      "What defines a transition metal?",
      "Why is Zn not a transition metal?",
      "What property makes many transition metals good catalysts?",
    ],
  },
  {
    letter: "E",
    keywords: ["equilibrium constant", "equilibrium", "kc", "kp"],
    hint: "A chemical reaction where the rates of the forward and reverse reactions are equal.",
    image: eImg,
    questions: [
      "What does it mean when a reaction is at equilibrium?",
      "What is Kc used to describe?",
      "Does a catalyst change the value of Kc?",
    ],
  },
  {
    letter: "F",
    keywords: ["fractional distillation", "fractionation", "alkanes", "alkane"],
    hint: "The process used to separate crude oil into fractions based on differences in boiling point",
    image: fImg,
    questions: [
      "How does fractional distillation separate hydrocarbons?",
      "Where are lower-boiling fractions collected in the column?",
      "Why is cracking used after fractional distillation?",
    ],
  },
  {
    letter: "G",
    keywords: ["gibbs free energy", "gibbs energy", "free energy", "delta g"],
    hint: "The energy function that determines whether a reaction is thermodynamically feasible",
    image: gImg,
    questions: [
      "What equation links ΔG, ΔH, and ΔS?",
      "What sign of ΔG indicates a feasible reaction?",
      "Does negative ΔG mean a reaction is fast?",
    ],
  },
  {
    letter: "H",
    keywords: ["hydrogen bonding", "hydrogen bond", "hydrogen bonds"],
    hint: "A strong intermolecular force between a hydrogen atom bonded to N, O, or F and a lone pair on another N, O, or F",
    image: hImg,
    questions: [
      "Between which atoms can hydrogen bonding occur?",
      "Why does hydrogen bonding raise boiling point?",
      "Why is ice less dense than liquid water?",
    ],
  },
  {
    letter: "I",
    keywords: ["ionisation energy", "ionization energy", "ionisation energies", "first ionisation energy"],
    image: iImg,
    hint: "The energy required to remove one mole of electrons from one mole of gaseous atoms or ions",
    questions: [
      "Define first ionisation energy.",
      "Why does first ionisation energy generally increase across a period?",
      "Why is there a large jump between successive ionisation energies?",
    ],
  },
  {
    letter: "J",
    keywords: ["joule", "joules", "energetics", "calorimetry"],
    image: jImg,
    hint: "The SI unit of energy; used in enthalpy, entropy and free energy calculations — watch out for kJ vs J unit conversions",
    questions: [
      "What is the SI unit of energy?",
      "In q = mcΔT, what does c represent?",
      "Why must kJ and J units be made consistent in calculations?",
    ],
  },
  {
    letter: "K",
    keywords: ["ka", "acid dissociation constant", "pka", "dissociation constant"],
    image: kImg,
    hint: "The equilibrium constant for the partial dissociation of a weak acid in water",
    questions: [
      "What does Ka measure?",
      "How does pKa relate to acid strength?",
      "Does a larger Ka mean a stronger or weaker acid?",
    ],
  },
  {
    letter: "L",
    keywords: ["ligands", "ligand", "complex ions", "complex ion", "coordination"],
    image: lImg,
    hint: "Molecules or ions that donate a lone pair to a central transition metal ion to form a coordinate bond",
    questions: [
      "What is a ligand?",
      "What type of bond forms between a ligand and a metal ion?",
      "What is the coordination number?",
    ],
  },
  {
    letter: "M",
    keywords: ["mechanism", "mechanisms", "nucleophilic substitution", "reaction mechanism"],
    image: mImg,
    hint: "A step-by-step description of how electrons move during a chemical reaction, shown with curly arrows",
    questions: [
      "What does a reaction mechanism show?",
      "What do curly arrows represent in mechanisms?",
      "Why are mechanisms useful in chemistry?",
    ],
  },
  {
    letter: "N",
    keywords: ["nucleophilic addition", "nucleophile", "nucleophilic", "carbonyl"],
    image: nImg,
    hint: "A reaction in which a nucleophile attacks a polar carbonyl group, forming an addition product",
    questions: [
      "What is a nucleophile?",
      "Which bond in a carbonyl group is attacked in nucleophilic addition?",
      "Do aldehydes or ketones react faster in nucleophilic addition?",
    ],
  },
  {
    letter: "O",
    keywords: ["oxidation state", "oxidation states", "oxidation number", "redox"],
    image: oImg,
    hint: "A measure of the degree of oxidation of an atom in a compound, used to track electron transfer in redox reactions",
    questions: [
      "What does oxidation state help you track in a reaction?",
      "What is the oxidation state of an element in its standard form?",
      "In redox, what happens during oxidation?",
    ],
  },
  {
    letter: "P",
    keywords: ["ph", "buffer", "buffer solution", "buffer solutions", "ph scale"],
    image: pImg,
    hint: "pH = −log₁₀[H⁺]; buffer solutions resist changes in pH when small amounts of acid or base are added",
    questions: [
      "Write the formula used to calculate pH from [H+].",
      "What is a buffer solution?",
      "Which two components make an acidic buffer?",
    ],
  },
  {
    letter: "Q",
    keywords: ["quantitative analysis", "calculations", "quantitative"],
    image: qImg,
    hint: "Using chemical tests such as flame tests, precipitate formation, and gas tests to identify unknown ions",
    questions: [
      "What does quantitative analysis involve?",
      "What units are typically used for concentration in chemistry?",
      "Name one test used to identify ions.",
    ],
  },
  {
    letter: "R",
    keywords: ["rate equation", "rate equations", "rate constant", "rate constants", "orders of reaction", "order of reaction"],
    image: rImg,
    hint: "Rate = k[A]ᵐ[B]ⁿ; the orders m and n must be determined experimentally, not from the stoichiometric equation",
    questions: [
      "What does a rate equation show?",
      "How is reaction order determined?",
      "If a reactant is zero order, does changing its concentration change rate?",
    ],
  },
  {
    letter: "S",
    keywords: ["spectroscopy", "spectrometry", "ir", "infrared", "nsr", "nmr"],
    image: sImg,
    hint: "Methods used to identify compounds from spectra, especially IR and NSR/NMR data",
    questions: [
      "What does an IR spectrum tell you about a molecule?",
      "In NSR, what does the number of peaks usually represent?",
      "Which type of hydrogen causes peaks in NSR/NMR spectra?",
    ],
  },
  {
    letter: "T",
    keywords: ["titration", "titrations", "titration curve", "titration curves", "indicators", "indicator"],
    image: tImg,
    hint: "Graphs showing pH change during acid–base titrations; indicators must change colour within the steep portion of the curve",
    questions: [
      "What does a titration curve plot?",
      "What is the equivalence point in a titration?",
      "Why must an indicator change color in the steep part of the curve?",
    ],
  },
  {
    letter: "U",
    keywords: ["unsaturation", "electrophilic addition", "alkene", "alkenes"],
    image: uImg,
    hint: "Alkenes are unsaturated hydrocarbons; the electron-rich C=C double bond undergoes electrophilic addition reactions",
    questions: [
      "What does unsaturation mean in organic chemistry?",
      "Which bond in alkenes reacts in electrophilic addition?",
      "Why does bromine water decolorize with alkenes?",
    ],
  },
  {
    letter: "V",
    keywords: ["vsepr", "vsepr theory", "shapes of molecules", "molecular shape", "molecular shapes"],
    image: vImg,
    hint: "Valence Shell Electron Pair Repulsion: electron pairs arrange themselves to minimise repulsion, determining molecular shape",
    questions: [
      "What does VSEPR stand for?",
      "According to VSEPR, why do electron pairs spread out?",
      "What shape is formed by four bonding pairs and no lone pairs?",
    ],
  },
  {
    letter: "W",
    keywords: ["weak acids", "weak acid", "kw", "ionic product of water", "ionic product"],
    image: wImg,
    hint: "Weak acids only partially dissociate in water; Kw = [H⁺][OH⁻] = 1×10⁻¹⁴ mol² dm⁻⁶ at 298 K",
    questions: [
      "What is a weak acid?",
      "What does Kw represent?",
      "At 25 degrees C, what is the value of Kw?",
    ],
  },
  {
    letter: "X",
    keywords: ["xenon", "noble gas", "noble gases", "noble gas chemistry"],
    image: xImg,
    hint: "Noble gases can form compounds when the central atom has more than 4 bonding pairs — use VSEPR to predict shapes including lone pairs",
    questions: [
      "Name one noble gas that forms compounds.",
      "What is the shape of XeF2?",
      "Why are noble gases generally unreactive?",
    ],
  },
  {
    letter: "Y",
    keywords: ["yield", "atom economy", "percentage yield", "% yield"],
    image: yImg,
    hint: "Percentage yield measures actual vs. theoretical product obtained; atom economy measures how efficiently atoms in reactants are incorporated into the desired product",
    questions: [
      "What is percentage yield?",
      "What is atom economy?",
      "Why is high atom economy desirable?",
    ],
  },
  {
    letter: "Z",
    keywords: ["zwitterion", "zwitterions", "amino acid", "amino acids", "isoelectric point"],
    image: zImg,
    hint: "A molecule carrying both a positive and a negative charge; amino acids exist as zwitterions at their isoelectric point",
    questions: [
      "What is a zwitterion?",
      "At the isoelectric point, what overall charge does an amino acid have?",
      "In acidic conditions, which group on an amino acid is protonated?",
    ],
  },
];


export default CHEMISTRY_DATA;