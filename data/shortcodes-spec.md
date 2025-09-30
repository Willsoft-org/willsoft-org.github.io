# Course Short-Code Specification

## General Format

Course short-codes follow the pattern: **[Track][Extra][Level]**

- **Track** = up to 3 letters (course family/series)
- **Extra** = up to 3 letters (specific attributes or topics)
- **Level** = 1 letter (F = Foundations, A = Advanced, R = Research)

This results in compact 4-7 letter codes that are easily recognizable.

---

## Track Prefixes

| Code | Track Name |
|------|------------|
| PL | Programming Languages |
| PAR | Programming Paradigms |
| TT | Type Theory |
| JC | JIT Compilers |
| VM | Virtual Machines |
| SEC | Security |
| OS | Operating Systems |
| LOG | Logic & Declarative Programming |
| FM | Formal Methods |
| AI | Artificial Intelligence |
| ML | Machine Learning |
| PC | Parallel Computing |
| CC | Compiler Construction |

---

## Extra Modifiers

| Code | Modifier Name |
|------|---------------|
| WIN | Windows |
| LNX | Linux |
| PA | Proof Assistants |
| SYN | Program Synthesis |
| EQS | Equality Saturation |
| WA | WebAssembly |
| DTT | Dependent Types |
| CO | Compiler Optimization |
| RT | Refinement Types |
| GPU | GPU/Accelerators |
| QNT | Quantum Computing |
| HTT | Homotopy Type Theory |
| VER | Verification |
| MP | Metaprogramming |
| DSL | Domain Specific Languages |
| CNC | Concurrency |
| SEC | Security |

---

## Level Indicators

| Code | Level |
|------|-------|
| F | Foundations |
| A | Advanced |
| R | Research |

---

## Example Short-Codes

- **PLF** = Foundations of Programming Languages
- **PLCOA** = Advanced Compiler Construction & Optimization
- **VMF** = Foundations of Interpreters & Virtual Machines
- **FMPAR** = Formal Methods & Proof Assistants (Research level)
- **PLWAR** = WebAssembly & Polyglot Runtimes (Research level)
- **SECF** = Systems Security (Foundations)
- **OSWINF** = Windows Internals (Foundations)
- **PLEQSR** = E-Graphs & Equality Saturation (Research)
- **FMRTR** = Program Synthesis with Refinement Types (Research)

---

## Rule of Redundancy

For courses focusing on a single specialized topic, it may be redundant to add a general track prefix. In such cases, use the topic as the main identifier.

**Example:** A course about only dependent types would be coded as **DTTF/DTTA/DTTR** rather than **TTDTTF**, since the topic itself is specific enough.

---

## Display Guidelines

Short-codes should be displayed on course cards:
- Position: First in sequence before price or duration
- Style: Similar to existing course metadata badges
- Format: Uppercase, compact display
