+++
heroTitle = "Products"
heroLead = "Solutions and SaaS Products"
heroClass = "products"
title = "Products"
+++

<div class="product-demos">

## GSH - Graphical Shell

<p class="product-description">
A modern, graphical shell environment that combines the power of traditional command-line interfaces with visual feedback and interactive elements.
</p>

<div class="demo-container" id="gsh-demo">
	<div class="demo-header">
		<span class="demo-title">GSH Terminal Demo</span>
		<button class="demo-reset" onclick="resetGSHDemo()">Reset</button>
	</div>
	<div class="terminal-window" id="gsh-terminal">
		<div class="terminal-output"></div>
		<div class="terminal-input-line">
			<span class="terminal-prompt">$ </span>
			<input type="text" class="terminal-input" id="gsh-input" placeholder="Try: help, ls, pwd, echo hello">
		</div>
	</div>
</div>

## Quansy - Schema Evolution

<p class="product-description">
An intelligent schema evolution system that visualizes and manages database migrations with interactive drag-and-drop functionality.
</p>

<div class="demo-container" id="quansy-demo">
	<div class="demo-header">
		<span class="demo-title">Schema Evolution Simulator</span>
		<button class="demo-reset" onclick="resetQuansyDemo()">Reset</button>
	</div>
	<div class="schema-workspace">
		<div class="schema-panel" id="schema-v1">
			<h4>Schema v1.0</h4>
			<div class="schema-table" draggable="true" data-table="users">
				<div class="table-name">users</div>
				<div class="table-fields">
					<div class="field">id: INT</div>
					<div class="field">name: VARCHAR</div>
				</div>
			</div>
			<div class="schema-table" draggable="true" data-table="posts">
				<div class="table-name">posts</div>
				<div class="table-fields">
					<div class="field">id: INT</div>
					<div class="field">title: VARCHAR</div>
				</div>
			</div>
		</div>
		<div class="migration-arrow">→</div>
		<div class="schema-panel" id="schema-v2">
			<h4>Schema v2.0</h4>
			<div class="drop-zone">Drop tables here to evolve</div>
		</div>
	</div>
	<div class="migration-log" id="migration-log"></div>
</div>

## Lento - Programming Language

<p class="product-description">
A modern programming language with an intuitive syntax and powerful features. Try the interactive code editor below with preloaded examples.
</p>

<div class="demo-container" id="lento-demo">
	<div class="demo-header">
		<span class="demo-title">Lento Code Editor</span>
		<div class="demo-controls">
			<select id="lento-examples" onchange="loadLentoExample(this.value)">
				<option value="hello">Hello World</option>
				<option value="fibonacci">Fibonacci</option>
				<option value="class">Class Example</option>
			</select>
			<button class="demo-run" onclick="runLentoCode()">Run</button>
		</div>
	</div>
	<div class="code-workspace">
		<div class="code-editor">
			<textarea id="lento-code" spellcheck="false">// Hello World in Lento
print("Hello, World!");</textarea>
		</div>
		<div class="code-output">
			<div class="output-header">Output:</div>
			<div class="output-content" id="lento-output"></div>
		</div>
	</div>
</div>

</div>

<script src="/js/product-demos.js" defer></script>
