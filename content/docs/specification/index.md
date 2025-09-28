+++
title = "Specification"
date = 2024-10-20T15:12:37+02:00
nowrap = true
+++

# Formal Specification

Read the latest version of the language specification on [Google Docs](https://docs.google.com/document/d/11YPY_ghoEEmZSWh8hA_zNTzjiD1p2QWrjE39nnOVSlA/edit?usp=sharing) or the [PDF version](language_specification_v1.pdf).

# Abstract

In this specification we describe the syntax, structure and implementation requirements of the Lento programming language.

*The Lento language* is a **strong statically typed**, **lazy evaluated** **functional** programming language with support for **object oriented** and **generic data types**.

It is intended to be interpreted or, compiled and executed on most modern target platforms such as Windows, Mac, Linux and the Web (WebAssembly + JS) using existing virtual machines and runtimes like .NET, LLVM, JVM or BEAM (Erlang). Due to any different implementation architectures, the language can support a rich set of libraries written in any of the *other* runtime or VM *languages* using different compilers. For the moment an official interpreter is developed using C# and the .NET Core runtime meant as a springboard for the upcoming official compiler.

# Methodology

## Expressive

Lento aims to be [expressive](https://en.wikipedia.org/wiki/Comparison_of_programming_languages#Expressiveness) and intuitive to write. As close to no templating code should be needed.

## Exceptions

Unlike Java or other error prone languages. Lento does not support developing code that trust exception handling using the try-catch method. We think in a more pure way, using a return type specifying the status of an unsafe operation, like in Elixir. This could be done utilizing enums or atoms for example. Take a look at the practical example below.

```hs
enum Status = Success | FileNotFound | InvalidPermissions
Status.Success
```

For larger projects where an unsafe operation is often used, consider adding a handler function for error cases.

# Community

Inspired by TypeScript.

Lento should have a close relation with its users being developed open-source on Github, enabling users to give immediate feedback on features and report bugs, as well as following the development of the language.

# Ecosystem

Read more about the intended services, tools and libraries around the Lento lang in the [Tooling](#heading=h.y9gk4ctlxdcc) chapter.

# Language Design

## Introduction

The design is inspired by C#, Haskell and Elixir.

## Variables

Variables are parameterless functions. Referencing to a variable in code will be the same as invoking the variable as a function.

```cs
x = 10 // A function generating the constant (inferred integer) 10
string y = "Foo"
char z = 'A'
z = 'B' // Variables are re-assignable with values of the same type
```

Using the variables

```js
Console.WriteLine y() + z + x() // Prints FooB10 to the console
```

This works due to parenthesis can be omitted for function calls.

### Identifier

A variable has an identifier following the pattern: `[\w\_]+[\d\w\_]*`.

For example: `my_var`, `_1`, `test`, `c1`, `camelCase` and `snake_case`.

If a variable name is beginning with an underscore, it is interpreted as a match everything / ignores in pattern matching and is not saved in the environment.

### Immutability

Because a variable is not itself a data structure, but more like a memory cell, we are only sure that one type of data structure fits in there, one at a time. Therefore we are only able to read- and write to that variable if it is of the same type. For a memory cell that’s ones and zeros, but in Lento we can write anything with the same type declared for the variable.

Any other data structures in Lento are fully immutable, though mutability can *probably* be simulated but is not encouraged to do.

## Functions

Follows “everything is a function” closely.

Functions are located in a separate register in the environment.

Invoked using trailing parenthesis and arguments, or no parenthesis.

Functions are stored in a separate list in the application environment (Elixir?).

All function declarations support pattern matching in their parameter list.

### Semantics

Function declarations can have parameters with surrounding parentheses or without, same with function invocation providing arguments. A function might have an explicit [type signature](https://wiki.haskell.org/Type_signature), unless it is inferred.

### Function body

A function body is a single expression or a sequence of statements surrounded by curly brackets. Can be inlined using a separating semi-colon. Functions are denoted as a function name, parameter vector, equal sign and lastly a function body.

Functions may have multiple declarations for different parameter list matches. All of which must share the same return type. Therefore it is good practice to use a precessing type signature which enforces the varying functions to return the same types. Unless a type signature is given, the first function declaration will control what will be the shared return type.

### Code block

A code block is a sequence of statements surrounded by curly-braces ‘`{}`’, containing one or more **<code>return </code></strong>calls to produce a final result value (unless it is <strong><code>void</code></strong>) and return to the default code branch. The statements in the block may be inlined using a separating semi-colon ‘<code>;</code>’ (like all C-like languages).

#### Return

The value returned by the code block is per default always the result of the last expression.

```js
result = {
    a = cond {
        10 - x > 5 -> true
        2 * x < 100 -> false
        true -> false
    }
    !(false || a) // This expression is what is returned by the block
}
```

A return statement may be inserted before the expression on the last line to clarify that the value is indeed returned, but this is otherwise unnecessary. Return is a built-in macro that sets the return value of the context and immediately exits. The purpose of this *‘keyword’* is mainly to give more control to developers to manage the flow of the program. Read more about [return](#heading=h.s0bni7n0mkdy) and other similar keywords like break and continue.

### Declaration

Functions are overridable, meaning the most recent declaration of a function with a matching parameter list will be used. This is the same for variables, where any variable can be reassigned anytime.

#### Type signature

A function may declare an explicit type signature to specify a formal function interface. This could also be inferred.

The signatures for parameterless functions are simply nothing. They are only generating output, and is denoted like:

```hs
sayHi : string
string sayHi = "Hi"
```

#### Named functions with single expression

```js
int myAdd int a, int b = a + b
```

Function with type signature (similar to Haskell). The last **<code>int</code></strong> shows the function return type.

```js
myAdd : int, int -> int
myAdd a, b = a + b
```

#### Named functions with body

A function body is a sequence of statements and expressions surrounded by curly brackets.

```js
int myAdd int a, int b = {
    int c = a + b
    return c
}
```

### Invocation

Function applications are done by specifying a function identifier, and any parameters separated by whitespace. This is called function application by adjacency, applying a function to one or more arguments.

```js
myFunc 1 "hello"
```

Function application can also be formatted using a direct trailing tuple for each parameter.

```js
myFunc(1, "hello")
```

The elements in the parameter vector tuple will be mapped to the arguments of the function.

Listen to why Anders Hejlsberg says this might be useful on his [TSConf 2019 Keynote](https://youtu.be/jmPZztKIFf4?t=2083).

A space between the function identifier and the tuple indicates that the tuple is passed as parameter to the function. Meaning the line below would throw an error for the same function used in the previous example.

```js
myFunc (1, "hello") // Invalid Parameter Type: tuple of (int, string)
```

### Function varying

If a function has multiple declarations with similar parameter list types. The first successful pattern match from arguments to parameter list will be invoked. Otherwise, a new curried function will be returned taking the rest of the arguments. The method to select which declaration to use to curry, is the first least matching. Meaning that if a function declaration takes n parameters, and the function is given m arguments, where m &lt; n. If those n number of arguments successfully match with n parameters of that declaration (from top to bottom), that function will be curried and returned.

A function cannot have two declarations with the same parameter vector! This breaks the matching property as the first occurrence will always match, and this is therefore omitted from the language as is seen as an error.

#### Currying

Functions are using [currying](https://en.wikipedia.org/wiki/Currying). Meaning if a function gets partially applied to a set of parameters, it returns a new function taking the rest of the defined parameters.

```cs
myFunc2 : string -> string
myFunc2 = myFunc 1
myFunc2 "hello" // This is ok!
```

## Lambda Expressions

A lambda expression is an unnamed, or “anonymous” function. They are **higher order** functions, which are stored in the environment (heap) as a function object. This results in **<code>myFunc</code></strong> referencing a function-object stored on the heap.

The declaration for a lambda function follows the pattern: parameter vector followed by a thick arrow and lastly a single expression or code block. The parameter vector could be formatted just as a normal function, the only difference is that the type of lambda expressions are denoted using a surrounding ‘()’ specifying a new ‘generator’. So a function talong ánother function would have a similar type signature as the following.

```cs
myHello : (string -> string), string -> string
string myHello (string -> string) nameGenerator string title = "Hello" + nameGenerator(title)
myHello(string title -> title + ". William", "Mr") // "Hello Mr. William"
```

Lambda functions are invoked just like all other functions unlike other languages such as Elixir. This is for the sake of continuity and cohesion.

If an anonymous function is assigned to a named variable, the result is a regular function and has the same type signature (without the extra ’()’)

```js
myHello : string
string myHello = () -> {
    return "Hello"
}
myHello // "Hello" (No arguments)
myHello() // "Hello" (Empty tuple => no arguments)
```

Or with no surrounding parentheses and single statement body.

```cs
string myHello = string name -> "Hello " + name
```

The code below is not a lambda function, but a regular one.

```cs
string myHello string name = "Hello" + name
```

Both functions are invoked as shown below.

```js
myHello "Bob"  // "Hello Bob"
myHello("Bob") // "Hello Bob"
```

## Decorators

Function decorators change the behavior syntactically and/or logically.

Decorators are macros behind the scenes.

They work similar to decorators in Python.

```cs
decorator Infix<T1, T2> Function operator {
    register [T1, operator.Name, T2]
    transform AST expr {
        return [operator.Name, T1, T2]
    }
}

@Infix
+ : Num n => n, n -> n
Num + lhs rhs = Kernel.add(lhs, rhs)

Console.WriteLine 5 + 10 // Invokes +(5,10) -> Kernel.add(5,10) -> 15
```

## Classes

Define a new object structure protocol.

A classification for objects structures instantiated by the class. All objects are value-based, i.e. non-referenced. A class can implement a predefined protocol.

Classes may inherit from other classes.

```cs
class A : B {
   // A now contains the fields and methods in B
}
A == B // false
```

## Protocols

A specification of data structure requirements. A protocol accepts any data structure or object instantiated by a class, containing all fields or properties that are required.

## Objects

Lento should support a syntactic sugar for creating classes (structs) and objects.

Inspired by [Object Initializer in C#](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/how-to-initialize-objects-by-using-an-object-initializer).

```php
class Car {
    // Fields
    string Brand: :unknown,
    int Model, // Use null as default
    int Speed: 0
}
// Methods
Car Car.New string brand = Car{
    Brand: brand,
    Model: 1
    // Use default Speed value
}
Car Car.Drive Car car, int speed = modify car {
    Speed: speed
}
string Car.BrandModel1 Car car {
    Car { Brand: brand, Model: model } = car
    return brand + model
}
string Car.BrandModel2 Car{ Brand: brand, Model: model } = brand + model // Pattern matching
string Car.BrandModel3 Car car = car.Brand + car.Model // Access class map fields

Car car = Car.New("Volvo") // Hides class instantiation
car.Drive(50) // Syntactic sugar for the statement below
Car.Drive(car, 0)

car.Brand // "Volvo"
car.BrandModel1 // "Volvo"
car.BrandModel2 // "Volvo"

// Structs can also be immediately created from a class
Car car2 = Car{
    Brand: "Fiat",
    Model: 2,
    Speed: 5
}
```

In this code example, we specify a new class for objects/structs which provide a set of two public methods. There are no static keyword as in C# or Java due to all functions being pattern matched with the passed parameters, thus all functions are static by default. If there is a function/method in a class body that takes a reference to a class instance as its first argument, it will be callable using the `.` syntax. Meaning you can write instance, followed by a dot, followed by the method that takes (a reference to) a struct/object. This is shown on the last two lines in the example.

### Class

Define a new object structure protocol.

### Modify

Takes an instance and returns a modified copy with just the specified fields updated to new values.

Works like partial types in TypeScript.

### Fields

All fields in a class are public, meaning they are accessible on objects using dot notation. The reason for this is that you don't have to write getters for each field, and because they are immutable there is no reason not to expose them.

See **Car.BrandModel3** for an example.

### Methods

Each method has an **inferred return type** of the parent class unless anything else is specified. All public methods must return a new or modified structure of the class described.

All methods act like extension methods to an object or protocol, similar to [the C# implementation](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods).

#### Static

Every method in a class is per default static. But if a method on a class takes an object of that class as the first argument, you can use dot notation to pass the object as the first argument to the method call and the rest of the arguments are written as parameters to that method call.

See **Car.Drive** for an example.

Unless a method on a class doesn’t take an instantiated object as first argument, then the method is only accessible from the class using dot notation as well.

See **Car.New**.

These types of methods are called static methods and specify that the function is only accessible on the class itself and not objects instantiating the class. These are most used when creating custom constructors.

*TL;DR. Static methods are functions that don't take a class object as the first argument*.

### Pattern matching

Classes are pattern matched as shown in the example below.

```js
Car car = Car.New("Volvo")
Car { Brand: brand } = car
brand // "Volvo"

// or using the get methods
car.GetBrand1() // "Volvo"
car.GetBrand2() // "Volvo"
```

## Pattern Matching

This works in general exactly like Elixir if nothing else is specified in this documentation. Not written yet

## Keywords

With keywords, we do not mean the hardcoded non overloadable keywords you see in other languages. No, in Lento keywords are functions that come prepackaged, but may be overloaded with a simple function or macro declaration in your code.

### Case

Compare a value against many patterns until we find a matching one. Clauses also allow extra conditions to be specified via guards. Keep in mind errors in guards do not leak but simply make the guard fail.

```elixir
case {1, 2, 3} {
     {4, 5, 6} -> "This clause won't match"
     {1, x, 3} when x > 10 -> "This clause won't match, x = 2 < 10"
     {1, x, 3} -> "This clause will match and bind x to 2"
     _ -> "This clause would match any value"
}
```

[https://elixir-lang.org/getting-started/case-cond-and-if.html](https://elixir-lang.org/getting-started/case-cond-and-if.html)

### Cond

The condition statement is a subset and alias for the case statement. Meaning instead of matching any value, the logic is limited to the `true` boolean. Every clause will be evaluated and if the result matches with `true`, that clause is evaluated and the cond returns.

```rs
cond {
    1+1 == 3 -> "We live in a simulation"
    true -> {
         // This will always match, like 'else'
         return 42
    }
}

cond !false == true -> "Always true" // One-liner
```

A condition with only one clause can be inlined as seen above. This will return `null` if the expression does not match, or is not evaluated to `true`.

### Return

The return keyword does whatever you expect it to do. It returns from the current context with no or a single value. The function sets the return value “register” and exits out of the code block. Read more about [return](#heading=h.fgh5o6teiaf4).

### Enum

An enum is a type specification that limits the value to a set of given unique values.

### Type

Custom types are created using the type keyword.

```hs
type Numeric = int | float | decimal
add : Numeric, Numeric -> Numeric
add a b = a + b
```

### More operators

[http://hackage.haskell.org/package/cond-0.1/docs/Control-Cond.html](http://hackage.haskell.org/package/cond-0.1/docs/Control-Cond.html)

[https://elixir-lang.org/getting-started/case-cond-and-if.html](https://elixir-lang.org/getting-started/case-cond-and-if.html)

## Concurrent Model

Message passing between processes, should support network abstraction.

Inspired by Elixir and C#.

Modified **Asynchronous Communicating Sequential Processes** (ACSP), messages are sent through channels, a process can choose to read a message from one or more channels.

### Synchronous Channel

This will be the “main” channel for the process.

```elixir
IO.puts "Receiving..."
receive {
	{:msg, message} -> IO.puts message
	_ -> IO.puts "No message received!"
}
IO.puts "Sending"
send(self(), {:msg, "My message"})
IO.puts "Done"
```

Output:

```plaintext
Receiving...
-> Stuck in infinite loop
```

### Asynchronous Channels

```elixir
IO.puts "Receiving..."
receive :channel1 {
	{:msg, message} -> IO.puts message
	_ -> IO.puts "No message received!"
}
IO.puts "Sending"
send(self(), :channel1, {:msg, "My message"})
IO.puts "Done"
```

Output:

```plaintext
Receiving...
Sending
My message
Done
```

## Type-system

Inspired by Haskell, Ocaml, Rust, C#/F#, Ada and TypeScript.

Nominal type system.

Allows for specifying new type aliases and custom type-formats and how they are stored in binary, classes, generics, structs, tuples (varying length), maps.

It follows a [parametric polymorphism](https://en.wikipedia.org/wiki/Parametric_polymorphism).

## Macros

Should support a **powerful macro system** like Elixir, but with the possibility to implement anything (Infix operators, keywords, etc...).

Macros run during the post-process phase, meaning the file will be fully parsed into an AST before a first pass of macro transformation. Macros are extracted and evaluated before the rest of the code is executed.

## Namespaces

Everything is located in the root namespace

### Modules

Module packages must have unique identifying module names exactly the same as in C#.

Two packages are allowed to share the same namespace but with unique module names. Ie **<code>import Core.Generics.List</code></strong> and <strong><code>import Core.Generics.HashMap</code></strong>. These would share the <code>Core.Generics</code> namespace but import different classes from the <code>Generics</code> module.

## Primitive Types

<table>
  <tr>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Syntax</strong>
   </td>
   <td><strong>Identifier</strong>
   </td>
  </tr>
  <tr>
   <td>Atom
   </td>
   <td>An atom
   </td>
   <td>:\w[\w\d]*
   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>Binary
   </td>
   <td>Bit sequence
   </td>
   <td>[01]+b
   </td>
   <td>-
   </td>
  </tr>
  <tr>
   <td>Int
   </td>
   <td>32 bit integer
   </td>
   <td>\d+
   </td>
   <td>int
   </td>
  </tr>
  <tr>
   <td>Long
   </td>
   <td>64 bit integer
   </td>
   <td>\d+
   </td>
   <td>int64
   </td>
  </tr>
  <tr>
   <td>long int
   </td>
   <td>32 + 64
   </td>
   <td>
   </td>
   <td>int96
   </td>
  </tr>
  <tr>
   <td>long long
   </td>
   <td>64 + 64
   </td>
   <td>
   </td>
   <td>int128
   </td>
  </tr>
  <tr>
   <td>Float
   </td>
   <td>IEEE Floating point number. Single precision.
   </td>
   <td>\d*.\d+
   </td>
   <td>float
   </td>
  </tr>
  <tr>
   <td>Double
   </td>
   <td>Double precision.
   </td>
   <td>
   </td>
   <td>float64
   </td>
  </tr>
  <tr>
   <td>Decimal
   </td>
   <td>128-bit floating point.
   </td>
   <td>
   </td>
   <td>float128
   </td>
  </tr>
</table>

## Collection Types

<table>
  <tr>
   <td><strong>Type</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Syntax</strong>
   </td>
   <td><strong>Read complexity</strong>
   </td>
   <td><strong>Space complexity</strong>
   </td>
  </tr>
  <tr>
   <td>Vector/Tuple
   </td>
   <td>An array of elements with a fixed length and fixed positions. Possible to index into.
   </td>
   <td>( a, b, c, ... )
   </td>
   <td><strong>1</strong> using pattern matching and indexing
   </td>
   <td><strong>N</strong>
   </td>
  </tr>
  <tr>
   <td>List
   </td>
   <td>Linked list or varying length but fixed positions using tuples. Possible to index into.
   </td>
   <td>[ a, b, c ]
   </td>
   <td><strong>1</strong> using pattern matching.
<p>
<strong>N</strong> when indexing.
   </td>
   <td><strong>N</strong>
   </td>
  </tr>
  <tr>
   <td>Map
   </td>
   <td>Hashmap of varying length and floating positions. \
See <a href="https://en.wikipedia.org/wiki/Associative_array#Comparison">Associative array</a> and <a href="https://hexdocs.pm/elixir/Map.html">Elixir map</a>.
   </td>
   <td>(a:<em> A</em>, b: <em>B</em>)
   </td>
   <td><strong>log N</strong>
   </td>
   <td><strong> N</strong>
   </td>
  </tr>
</table>

Container objects are created dynamically and are considered value-based data types/structures.

[https://www.jeremyshanks.com/c-variables-primitive-nonprimitive-types/](https://www.jeremyshanks.com/c-variables-primitive-nonprimitive-types/)

### More about Tuples and Vectors

The difference between a tuple and vector definitions is the context. It is often called a tuple when dealing with set theory, and a vector in mathematics. But in theory, they are representing the same core concept. *“Mathematicians usually write tuples by listing the elements within parentheses "( )" and separated by commas”* and similarly *“a vector in mathematics is a one-dimensional array of numbers, symbols, or expressions. The elements of a vector are often referred to as scalars.”* *It can be specified using an ordered set of components, enclosed in either parentheses or angle brackets.”*

In **Lento**, a tuple and vector are referring to **the same thing**, representing the same concept.

An interesting use case for tuples may be functions returning multiple values, see example below.

```hs
enum Status = Succeeded | Failed
myFunc : int, int -> (int, Status)
myFunc a b = (a + b, Status.Succeeded)
```

Here the type of each element in the return tuple is directly inferred from the function type signature. This could be inferred as well for variables for example.

```ts
myVar = (10, Status.Succeeded) // Inferred type: (int, Status)
```

Or explicitly.

```ts
(int, Status) myVar = (10, Status.Succeeded) // Explicit
```

### More about Maps

In theory a map is a tuple with named elements.

A map could be created in many ways. Using implicit type inference for each element, or explicit, a type signature or not.

All keys in a map must be unique, value types may vary.

```js
myVar = (value: 10, status: Status.Succeeded)
// Inferred type (implicit): (a: int, b: Status)
```

Or explicitly.

```js
myVar : (status: Status, value: int) // Explicit
myVar = (value: 10, status: Status.Succeeded)
```

## Garbage Collector

Because Lento aims to be as pure functional as possible, meaning that we don’t need references. Objects are sent as values and methods are static functions taking a this struct, and returns a new modified.

The purpose of a garbage collector in most other object-oriented languages is mainly to clean up any memory with objects without any references to it. This is not the case for Lento, on the other hand, we might want to add any behaviour to Lento that moves away from the fully pure functional paradigm a bit, meaning this might be a feature added anyways to support a certain syntax or control flow in the future.

### Supervisor aware

This means that each data structure stored in memory occupies a section starting from a certain address. This system uses a 8 bit header that specifies how many references that particular object has. When a supervisor removes its reference to that part of memory, the value is decreased and a small GC adds that part to the free-memory block list, or gives it back to the operating system.

For supervisors to know when they should stop referencing other parts of memory, we use Dispose functions. This enables us to tell the runtime/system when we are done with different parts of the memory. These dispose function calls are abstracted away from the regular user, and are handled by the compiler to generate code that frees the memory location of a, e.g re-assigned variable value.

This method is used instead of the mark stage in a regular mark- and sweep garbage collector.

### Sweep stage

Because we use a top down approach, instead of a backtrack reference lookup approach. The sweep stage becomes a lot simpler, only requiring us to add parts of the memory which have no current supervisors to the free memory list, meaning nothing in the program is referencing that object anymore and has been disposed of. This can therefore run concurrently with the main thread and never interrupt the execution to stop for garbage collection suddenly. Instead, the main thread marks the parts in memory when a supervisor frees its reference, and if the total number of supervisors for a memory block is zero, the garbage collector could either directly add it to the free memory list, or make a single pass over the whole memory later, collecting every free memory section.

### When to dispose?

There are several suitable occasions to dispose of memory references, most listed below.

* Variable reassignment: When a variable is reassigned, the previous value is no longer used.
* Function return: After a function returns, the local scoped variables are no longer going to be used.

### Program exit

After the main thread of the program process finishes, all references to any memory is released.

## Standard library

### System

Contains modules with functions for interacting with the local operating system. Example modules would be:

* Console
* Processes
* File I/O
* Network I/O, Sockets, Protocols
* Parsers for JSON, XML, HTML, (Command-line arguments?)
* String formatting

### Standard Library (STD)

### Lento

Often used when building macros. Contains core kernel functions used by standard built-in functions such as the ‘`+`’ operator, which is a function calling the **<code>add</code></strong> core function.

## Dynamically linked library support

A nice addition would be to add support for DLL file, function importing. This would enable the use of libraries compiled and built using other programming languages and extend the domain of available libraries for developers.

## Comments

### Text

Comments in lento are denoted by a leading ‘<code><em>//</em></code>’ with a trailing message. Or alternatively a beginning ‘<code><em>/*</em></code>’ and ending ‘<code><em>*/</em></code>’ with a message in between.’

### Doc

Documentational comments describe code functionality on a more general level, such as specifications for functions and their parameters. An example doc-comment looks like the following:

```ts
/// description: A function that adds two numbers together
/// param a: First number to add
/// param b: Last number to add
/// return: The sum of the two numbers
add : Num, Num -> Num
add a b = a + b
```

## Configuration file

All projects may contain a single config file specifying information, scripts, pre-process and post-process stage execution.

## Backends

<table>
  <tr>
   <td><strong>Target</strong>
   </td>
   <td><strong>Implementation</strong>
   </td>
   <td><strong>Priority</strong>
   </td>
   <td><strong>Technology</strong>
   </td>
  </tr>
  <tr>
   <td>Cross Platform
   </td>
   <td>Interpreter
   </td>
   <td>1
   </td>
   <td>.NET Core, C#
   </td>
  </tr>
  <tr>
   <td>Web
   </td>
   <td>Interpreter
   </td>
   <td>2
   </td>
   <td>Emacs (JS), Webassembly, Scala, Rust or Elm
   </td>
  </tr>
  <tr>
   <td>Native Code Generator
   </td>
   <td>Compiler
   </td>
   <td>3
   </td>
   <td>LLVM, .NET Runtime, or JVM, C#, C++ or Java
   </td>
  </tr>
</table>

# Execution

Programs are executed by either being interpreted, or compiled. In case a compiler should compiler a program, it must first look for an entry point. Unless this is found, the whole program is runned from top to bottom like a script.

## Entry point

The entry point to a program is a function with the **<code><em>@EntryPoint</em></code></strong> decorator. There may only be one entry point to a program, otherwise it will be executed as a script running from top of the source file to the end. All other functions are seen as [subroutines](https://en.wikipedia.org/wiki/Subroutine).

[Read more about entry points](https://en.wikipedia.org/wiki/Entry_point).

Entry points are used in this way by other languages like [F#](https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/functions/entry-point).

https://dotnet.microsoft.com/learn/languages/fsharp-hello-world-tutorial/create

## File extension

| Extension | Description               |
| --------- | ------------------------- |
| `.lt`     | Default Lento source file |

## Tooling

| Type                             | Description                | Priority |
| -------------------------------- | -------------------------- | -------- |
| CLI tool                         | Command line interface     | 1        |
| Interpreter                      | Lento Interpreter (LI)     | 1        |
| REPL                             | Interactive shell          | 1        |
| Compiler                         | Lento Compiler (LC)        | 2        |
| Package management platform, LPM | Like NPM, Hex, NuGet       | 3        |
| Linter (Code completion)         | VS Code                    | 4        |
| Syntax Highlighting              | VS Code                    | 4        |
| Language Server                  | For text editors           | 5        |
| Playground                       | Online playground          | 6        |
| IDE                              | Support for Visual Studio? | 7        |
| Debugger                         | Support for Visual Studio? | 7        |

## LI

LI (Lento Interpreter) will be the official open source standard interpreter and interactive REPL environment for Lento.
A nice touch would be to add support for executing external files from the internet just by providing a URI link instead of a file location. Same goes for compiling files, this would make building *installers* redundant.

## LC

LC (Lento Compiler) will be the official open source standard compiler for the functional language Lento *written* in **Lento** itself, bootstrapping the language.
A nice addition would be to support compilation to DLL files, exporting functions for use in other languages or by the system.

[https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler](https://en.wikipedia.org/wiki/Glasgow_Haskell_Compiler),
[https://www.haskell.org/ghc/](https://www.haskell.org/ghc/)

## LPM

*Lento package manager*. Provides the service to download and publish code as packages that can be reused. All code should be published on some kind of repository on Github, Gitlab or self-hosted, meaning you could upload a package to your own website. Packages must be zipped, or single Lento files (that may include other files in the same package, or depend on other packages).

Packages will not be controlled by the manager, but only redistributing existing ones hosted by other services.
The package manager holds a register of known packages. New packages are added with just a link, title and description, which adds a new row to the registry.
Users should be able to upvote, downvote and comment on the package manager website, and warnings should be shown when installing new packages.

Inspired by the Rust Cargo and Go package manager.

# License

The official implementation is open source and licensed under the MIT software license.
See [LICENSE](/LICENSE.txt) for more information.

# Colors and Logos

Logo font: `Numans`

<div style="display: flex; align-items: baseline;">
	<p>Primary colors:</p>
	<div style="background-color: #2F292C; color: #FFFFFF; padding: 10px; border-radius: 5px; margin: 10px 0; max-width: 140px; font-family: monospace; text-align: center; margin-left: 8px">
		#2F292C
	</div>
	<div style="background-color: #FFFFFF; color: #2F292C; padding: 10px; border-radius: 5px; border: solid 1px black; margin: 10px 0; max-width: 140px; font-family: monospace; text-align: center; margin-left: 8px">
		#FFFFFF
	</div>
</div>

## Background explanation

When picking a logo, we thought about the true meaning of lento, which is a careful expression in music, hence we picked the majestic owl as it reflects on the musicality of birds, and the carefulness as the owl is one of the most silent flying birds ([Super Powered Owls | BBC](https://www.youtube.com/watch?v=d_FEaFgJyfA&ab_channel=BBCEarth)).

# Mockup code

## Hello, World!

```hs
include System.Console

@EntryPoint
main : string -> void
main string args = {
    Console.WriteLine "Hello, world!"
}
```

Execute through the command line:

```sh
# Run
> lt hello_world.lt
Hello, world!

# Compile and run
> lt c hello_world.lt
> hello_world
Hello, world!
```
