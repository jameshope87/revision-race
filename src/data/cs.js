import { aImg, bImg } from "../assets/compsci";

const CS_DATA = [
  {
    letter: "A",
    keywords: ["algorithm", "algorithms"],
    hint: "A finite, ordered set of unambiguous instructions that solves a problem or performs a computation.",
    image: aImg,
    questions: [
      "State four key properties that a good algorithm must have.",
      "Describe the difference between a linear search algorithm and a binary search algorithm.",
      "Write pseudocode for a simple algorithm that finds the largest value in a list.",
    ],
  },
  {
    letter: "B",
    keywords: ["binary", "binary number system", "base 2"],
    hint: "A base-2 number system using only the digits 0 and 1, which forms the foundation of all digital computing.",
    image: bImg,
    questions: [
      "Convert the binary number 10110101 to denary.",
      "Explain why computers use binary rather than denary internally.",
      "Add the binary numbers 01101010 and 00111101, showing your working.",
    ],
  },
  {
    letter: "C",
    keywords: ["compression", "data compression", "lossy compression", "lossless compression", "huffman coding"],
    hint: "The process of reducing the size of a file by encoding data more efficiently, either losslessly or with some data loss.",
    image: null,
    questions: [
      "Distinguish between lossy and lossless compression, giving an example of each.",
      "Describe how run-length encoding compresses data.",
      "Explain why lossy compression is acceptable for images but not for executable programs.",
    ],
  },
  {
    letter: "D",
    keywords: ["data structure", "data structures", "stack", "queue", "linked list", "binary tree", "array"],
    hint: "A way of organising and storing data in a computer so that it can be accessed and modified efficiently.",
    image: null,
    questions: [
      "Describe the difference between a stack and a queue, stating the operations associated with each.",
      "Explain one advantage of using a linked list over an array.",
      "Draw a binary search tree containing the values 5, 3, 8, 1, 4 inserted in that order.",
    ],
  },
  {
    letter: "E",
    keywords: ["encryption", "cryptography", "cipher", "public key", "private key", "rsa"],
    hint: "The process of transforming plaintext into ciphertext using a key, so that only authorised parties can read the original data.",
    image: null,
    questions: [
      "Explain the difference between symmetric and asymmetric encryption.",
      "Describe how a public key and private key are used in RSA encryption.",
      "State two reasons why encryption is important for e-commerce.",
    ],
  },
  {
    letter: "F",
    keywords: ["finite state machine", "fsm", "finite automaton", "state machine", "state transition diagram"],
    hint: "A computational model consisting of a finite set of states, transitions between those states, and inputs that trigger transitions.",
    image: null,
    questions: [
      "Draw a simple finite state machine that accepts binary strings ending in '01'.",
      "Distinguish between a Mealy machine and a Moore machine.",
      "State the components needed to define a finite state machine formally.",
    ],
  },
  {
    letter: "G",
    keywords: ["graph", "graph data structure", "node", "edge", "directed graph", "undirected graph", "weighted graph"],
    hint: "A data structure consisting of vertices (nodes) connected by edges, used to represent networks and relationships.",
    image: null,
    questions: [
      "Distinguish between a directed and an undirected graph.",
      "Describe how a graph can be represented using an adjacency matrix.",
      "State one application of a weighted graph in computing.",
    ],
  },
  {
    letter: "H",
    keywords: ["hashing", "hash function", "hash table", "hash collision", "hash"],
    hint: "The process of mapping data of arbitrary size to a fixed-size value using a hash function, commonly used for fast data lookup.",
    image: null,
    questions: [
      "Explain how a hash table stores and retrieves data.",
      "Describe what a hash collision is and one method to resolve it.",
      "State why hashing is used for password storage.",
    ],
  },
  {
    letter: "I",
    keywords: ["ip address", "internet protocol", "ipv4", "ipv6"],
    hint: "A unique numerical label assigned to each device on a network that uses the Internet Protocol for communication.",
    image: null,
    questions: [
      "State the difference between IPv4 and IPv6 addresses.",
      "Explain the role of an IP address in routing data across the internet.",
      "Convert the IPv4 address 192.168.1.1 into binary.",
    ],
  },
  {
    letter: "J",
    keywords: ["json", "javascript object notation", "data interchange format"],
    hint: "A lightweight, human-readable text format for representing structured data as key-value pairs, widely used in web APIs.",
    image: null,
    questions: [
      "Write a valid JSON object representing a student with a name, age, and list of subjects.",
      "State two advantages of JSON over XML for data interchange.",
      "Explain how JSON differs from a JavaScript object literal.",
    ],
  },
  {
    letter: "K",
    keywords: ["kernel", "operating system kernel", "os kernel"],
    hint: "The core component of an operating system that manages hardware resources and provides services to processes.",
    image: null,
    questions: [
      "State four functions of an operating system kernel.",
      "Distinguish between a monolithic kernel and a microkernel.",
      "Explain what is meant by 'kernel mode' and 'user mode'.",
    ],
  },
  {
    letter: "L",
    keywords: ["logic gates", "logic gate", "boolean logic", "boolean algebra", "and gate", "or gate", "not gate"],
    hint: "Electronic components that implement Boolean operations on binary inputs to produce a binary output.",
    image: null,
    questions: [
      "Draw the truth table for a NAND gate.",
      "Simplify the Boolean expression A·(A+B) using Boolean algebra laws.",
      "Explain why NAND gates are described as 'universal gates'.",
    ],
  },
  {
    letter: "M",
    keywords: ["machine code", "assembly language", "low level language", "fetch decode execute"],
    hint: "The lowest-level programming language consisting of binary instructions directly executed by the CPU.",
    image: null,
    questions: [
      "Describe each stage of the fetch-decode-execute cycle.",
      "State two differences between machine code and assembly language.",
      "Explain why high-level language programs must be translated before they can be executed.",
    ],
  },
  {
    letter: "N",
    keywords: ["network topology", "topology", "bus topology", "star topology", "mesh topology", "ring topology"],
    hint: "The physical or logical arrangement of devices and connections in a computer network.",
    image: null,
    questions: [
      "Compare star and bus network topologies, stating one advantage of each.",
      "Explain why a mesh topology provides high fault tolerance.",
      "State the role of a switch in a star topology network.",
    ],
  },
  {
    letter: "O",
    keywords: ["object-oriented programming", "oop", "object oriented", "class", "inheritance", "encapsulation", "polymorphism"],
    hint: "A programming paradigm that organises software around objects — instances of classes — which bundle data and methods together.",
    image: null,
    questions: [
      "Define the terms encapsulation, inheritance, and polymorphism in OOP.",
      "Explain the difference between a class and an object.",
      "Describe one benefit of using inheritance in object-oriented design.",
    ],
  },
  {
    letter: "P",
    keywords: ["pseudocode", "pseudo code", "algorithm design", "flowchart"],
    hint: "An informal high-level description of an algorithm using plain language and programming-like constructs, not tied to any specific language.",
    image: null,
    questions: [
      "Write pseudocode for a program that checks whether a number is prime.",
      "State two advantages of using pseudocode over a flowchart when designing an algorithm.",
      "Rewrite this pseudocode segment using a WHILE loop instead of a FOR loop: FOR i ← 1 TO 10 OUTPUT i NEXT i.",
    ],
  },
  {
    letter: "Q",
    keywords: ["queue", "fifo", "first in first out", "dequeue", "enqueue"],
    hint: "A linear data structure that operates on a first-in, first-out (FIFO) principle, where elements are added at the rear and removed from the front.",
    image: null,
    questions: [
      "State the operations associated with a queue data structure.",
      "Describe a real-world scenario where a queue is used in an operating system.",
      "Explain the difference between a linear queue and a circular queue.",
    ],
  },
  {
    letter: "R",
    keywords: ["recursion", "recursive function", "base case", "recursive case", "call stack"],
    hint: "A programming technique where a function calls itself with a smaller input until a base case is reached.",
    image: null,
    questions: [
      "Explain the importance of a base case in a recursive function.",
      "Trace the recursive calls for factorial(4).",
      "State one advantage and one disadvantage of recursion compared to iteration.",
    ],
  },
  {
    letter: "S",
    keywords: ["sorting algorithm", "sorting algorithms", "bubble sort", "merge sort", "quicksort", "insertion sort"],
    hint: "An algorithm that rearranges elements of a list into a defined order, such as ascending or descending.",
    image: null,
    questions: [
      "Trace bubble sort on the list [5, 3, 8, 1, 4], showing each pass.",
      "State the time complexity of merge sort in the worst case.",
      "Explain why merge sort is generally preferred over bubble sort for large datasets.",
    ],
  },
  {
    letter: "T",
    keywords: ["turing machine", "alan turing", "computability", "halting problem"],
    hint: "A theoretical computing device proposed by Alan Turing that manipulates symbols on an infinite tape according to a table of rules.",
    image: null,
    questions: [
      "Describe the components of a Turing machine.",
      "Explain what is meant by the halting problem and why it is significant.",
      "State why Turing machines are important to the theory of computation.",
    ],
  },
  {
    letter: "U",
    keywords: ["unicode", "utf-8", "utf-16", "character encoding", "ascii"],
    hint: "An international character encoding standard that assigns a unique code point to every character and symbol across all writing systems.",
    image: null,
    questions: [
      "State the main limitation of ASCII that Unicode was designed to overcome.",
      "Explain how UTF-8 achieves backward compatibility with ASCII.",
      "State how many bits are used to represent a character in UTF-16.",
    ],
  },
  {
    letter: "V",
    keywords: ["virtual machine", "vm", "virtualisation", "hypervisor"],
    hint: "A software emulation of a physical computer that runs an operating system and applications as if on dedicated hardware.",
    image: null,
    questions: [
      "Explain what a hypervisor does and state two types.",
      "State two benefits of using virtual machines in a server environment.",
      "Describe how a virtual machine allows programs compiled for one architecture to run on another.",
    ],
  },
  {
    letter: "W",
    keywords: ["world wide web", "www", "http", "https", "web browser", "hypertext"],
    hint: "An information system of interlinked hypertext documents and resources accessed via the internet using HTTP.",
    image: null,
    questions: [
      "Distinguish between the World Wide Web and the internet.",
      "Explain how HTTPS improves security over HTTP.",
      "Describe the role of a DNS server when a user types a URL into a browser.",
    ],
  },
  {
    letter: "X",
    keywords: ["xml", "extensible markup language", "markup language"],
    hint: "A markup language that defines rules for encoding documents in a format that is both human-readable and machine-readable.",
    image: null,
    questions: [
      "Write a valid XML document representing a book with title, author, and year.",
      "State two differences between XML and HTML.",
      "Explain what is meant by a 'well-formed' XML document.",
    ],
  },
  {
    letter: "Y",
    keywords: ["yottabyte", "data storage", "byte", "kilobyte", "megabyte", "gigabyte", "terabyte", "units of data"],
    hint: "The largest standard unit of digital storage in common use, equal to 10²⁴ bytes (or 2⁸⁰ bytes in binary notation).",
    image: null,
    questions: [
      "State the units of data from byte to yottabyte in ascending order.",
      "Calculate how many kilobytes are in 4 megabytes.",
      "Explain the difference between a kilobyte (kB) and a kibibyte (KiB).",
    ],
  },
  {
    letter: "Z",
    keywords: ["zero-day", "zero day", "zero-day exploit", "vulnerability", "cybersecurity"],
    hint: "A previously unknown software vulnerability that is exploited by attackers before the developer has had a chance to issue a fix.",
    image: null,
    questions: [
      "Explain why zero-day exploits are particularly dangerous.",
      "Describe two measures an organisation can take to reduce the impact of a zero-day attack.",
      "State the difference between a vulnerability and an exploit.",
    ],
  },
];

export default CS_DATA;