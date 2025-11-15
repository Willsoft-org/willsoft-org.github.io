+++
title = "Foundations of Programming Languages"
description = "Core principles of syntax, semantics, paradigms, and type systems, introducing how languages are defined and understood."
shortcode = "PLF"
duration = 8
price = 1200
level = "foundations"
field = "pl"
field_title = "Programming Languages"
difficulty = 2
new = true

prerequisites = [
  "Basic programming experience in any language",
  "Understanding of data structures",
  "Familiarity with recursion and functions"
]

overview = """
This foundational course provides a comprehensive introduction to the principles underlying programming languages. You'll explore how languages are designed, implemented, and reasoned about, gaining deep insights into syntax, semantics, type systems, and programming paradigms.

Perfect for developers wanting to understand the "why" behind language features, compiler engineers, or anyone interested in language design and implementation.
"""

outcomes = [
  "Understand core programming language concepts and terminology",
  "Analyze and compare different programming paradigms",
  "Design and implement basic interpreters",
  "Reason about program behavior using formal semantics",
  "Understand type systems and type inference",
  "Evaluate language design trade-offs"
]

tools = [
  "OCaml/Haskell",
  "Racket/Scheme",
  "Standard ML",
  "Type checkers",
  "Parsing tools"
]

[[modules]]
title = "Language Foundations"
description = "Introduction to programming language concepts, history, and design principles"
topics = [
  "History and evolution of programming languages",
  "Language design goals and trade-offs",
  "Syntax vs. semantics",
  "Language classification and paradigms"
]

[[modules]]
title = "Syntax and Parsing"
description = "Formal grammars, parsing techniques, and abstract syntax trees"
topics = [
  "Regular expressions and finite automata",
  "Context-free grammars and BNF notation",
  "Recursive descent parsing",
  "Abstract syntax trees (ASTs)",
  "Lexical analysis and tokenization"
]

[[modules]]
title = "Semantics"
description = "Operational, denotational, and axiomatic semantics"
topics = [
  "Small-step and big-step operational semantics",
  "Denotational semantics",
  "Structural induction and proofs",
  "Program equivalence",
  "Reduction strategies"
]

[[modules]]
title = "Type Systems"
description = "Static and dynamic typing, type inference, and polymorphism"
topics = [
  "Type safety and soundness",
  "Simple types and type checking",
  "Polymorphism (parametric and ad-hoc)",
  "Type inference and unification",
  "Subtyping and variance",
  "Dependent types (introduction)"
]

[[modules]]
title = "Programming Paradigms"
description = "Functional, imperative, object-oriented, and logic programming"
topics = [
  "Functional programming: lambda calculus, higher-order functions",
  "Imperative programming: state, mutation, control flow",
  "Object-oriented programming: classes, inheritance, polymorphism",
  "Logic programming: unification, backtracking",
  "Declarative vs. imperative approaches"
]

[[modules]]
title = "Lambda Calculus"
description = "The foundation of functional programming"
topics = [
  "Syntax and reduction rules",
  "Church-Rosser theorem",
  "Fixed-point combinators",
  "Church encodings",
  "Relation to modern functional languages"
]

[[modules]]
title = "Memory and Evaluation"
description = "Evaluation strategies, closures, and memory management basics"
topics = [
  "Call-by-value vs. call-by-name vs. call-by-need",
  "Environment models and closures",
  "Stack and heap memory",
  "Garbage collection (overview)",
  "Tail recursion optimization"
]

[[modules]]
title = "Language Implementation"
description = "Building interpreters and understanding language runtime"
topics = [
  "AST-based interpretation",
  "Environment-based evaluation",
  "Implementing lexical scoping",
  "Error handling and exceptions",
  "REPL construction"
]

[[testimonials]]
text = "This course completely changed how I think about programming. Understanding the foundations helped me become a better developer in every language I use."
author = "Sarah Chen"
role = "Senior Software Engineer"

[[testimonials]]
text = "The material is challenging but presented clearly. The hands-on interpreter projects really solidified my understanding of how languages work under the hood."
author = "Marcus Johnson"
role = "PhD Student in Computer Science"

[[testimonials]]
text = "Best course I've taken on programming languages. The instructor's depth of knowledge and practical examples made complex concepts accessible."
author = "Elena Rodriguez"
role = "Compiler Engineer"
+++
