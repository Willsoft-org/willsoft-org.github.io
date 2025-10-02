// Interactive Product Demos
// This file contains the logic for GSH, Quansy, and Lento demos

// ===== GSH Terminal Demo =====
let gshCommandHistory = [];
let gshHistoryIndex = -1;
let gshCurrentDir = '/home/user';
let gshFileSystem = {
	'/': ['home', 'usr', 'bin'],
	'/home': ['user'],
	'/home/user': ['documents', 'projects', 'readme.txt'],
	'/home/user/documents': ['report.pdf', 'notes.txt'],
	'/home/user/projects': ['website', 'app'],
};

const gshCommands = {
	help: () => 'Available commands: help, ls, pwd, cd [dir], echo [text], clear, date',
	ls: () => {
		const files = gshFileSystem[gshCurrentDir] || [];
		return files.length > 0 ? files.join('  ') : 'Empty directory';
	},
	pwd: () => gshCurrentDir,
	cd: (args) => {
		if (!args || args === '~') {
			gshCurrentDir = '/home/user';
			return '';
		}
		if (args === '..') {
			const parts = gshCurrentDir.split('/').filter(p => p);
			parts.pop();
			gshCurrentDir = '/' + parts.join('/');
			if (gshCurrentDir === '/') gshCurrentDir = '/';
			return '';
		}
		const newPath = args.startsWith('/') ? args : gshCurrentDir + '/' + args;
		if (gshFileSystem[newPath]) {
			gshCurrentDir = newPath;
			return '';
		}
		return `cd: ${args}: No such directory`;
	},
	echo: (args) => args || '',
	clear: () => {
		const output = document.querySelector('#gsh-terminal .terminal-output');
		if (output) output.innerHTML = '';
		return null;
	},
	date: () => new Date().toString(),
};

function initGSHDemo() {
	const input = document.getElementById('gsh-input');
	if (!input) return;

	input.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			const command = input.value.trim();
			if (command) {
				gshCommandHistory.push(command);
				gshHistoryIndex = gshCommandHistory.length;
				executeGSHCommand(command);
			}
			input.value = '';
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			if (gshHistoryIndex > 0) {
				gshHistoryIndex--;
				input.value = gshCommandHistory[gshHistoryIndex];
			}
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			if (gshHistoryIndex < gshCommandHistory.length - 1) {
				gshHistoryIndex++;
				input.value = gshCommandHistory[gshHistoryIndex];
			} else {
				gshHistoryIndex = gshCommandHistory.length;
				input.value = '';
			}
		}
	});

	// Display welcome message
	appendGSHOutput('Welcome to GSH Terminal Demo! Type "help" for available commands.', 'system');
}

function executeGSHCommand(cmdString) {
	const output = document.querySelector('#gsh-terminal .terminal-output');
	if (!output) return;

	// Display command
	const cmdDiv = document.createElement('div');
	cmdDiv.className = 'terminal-line command';
	cmdDiv.innerHTML = `<span class="terminal-prompt">$ </span>${cmdString}`;
	output.appendChild(cmdDiv);

	// Parse command
	const parts = cmdString.split(' ');
	const cmd = parts[0];
	const args = parts.slice(1).join(' ');

	// Execute command
	if (gshCommands[cmd]) {
		const result = gshCommands[cmd](args);
		if (result !== null && result !== '') {
			appendGSHOutput(result, 'output');
		}
	} else {
		appendGSHOutput(`Command not found: ${cmd}. Type "help" for available commands.`, 'error');
	}

	// Auto-scroll
	output.scrollTop = output.scrollHeight;
}

function appendGSHOutput(text, type = 'output') {
	const output = document.querySelector('#gsh-terminal .terminal-output');
	if (!output) return;

	const line = document.createElement('div');
	line.className = `terminal-line ${type}`;
	line.textContent = text;
	output.appendChild(line);
}

function resetGSHDemo() {
	gshCurrentDir = '/home/user';
	gshCommandHistory = [];
	gshHistoryIndex = -1;
	const output = document.querySelector('#gsh-terminal .terminal-output');
	if (output) output.innerHTML = '';
	const input = document.getElementById('gsh-input');
	if (input) input.value = '';
	appendGSHOutput('Welcome to GSH Terminal Demo! Type "help" for available commands.', 'system');
}

// ===== Quansy Schema Evolution Demo =====
let quansyMigrationCount = 0;

function initQuansyDemo() {
	const tables = document.querySelectorAll('.schema-table');
	const dropZone = document.querySelector('.drop-zone');

	tables.forEach(table => {
		table.addEventListener('dragstart', handleDragStart);
		table.addEventListener('dragend', handleDragEnd);
	});

	if (dropZone) {
		dropZone.addEventListener('dragover', handleDragOver);
		dropZone.addEventListener('drop', handleDrop);
		dropZone.addEventListener('dragleave', handleDragLeave);
	}
}

function handleDragStart(e) {
	e.target.classList.add('dragging');
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/plain', e.target.dataset.table);
}

function handleDragEnd(e) {
	e.target.classList.remove('dragging');
}

function handleDragOver(e) {
	e.preventDefault();
	e.dataTransfer.dropEffect = 'move';
	e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
	e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
	e.preventDefault();
	e.currentTarget.classList.remove('drag-over');

	const tableName = e.dataTransfer.getData('text/plain');
	const draggedElement = document.querySelector(`[data-table="${tableName}"]`);

	if (draggedElement) {
		// Clone the table to v2
		const clone = draggedElement.cloneNode(true);
		clone.classList.add('evolved');
		clone.removeAttribute('draggable');

		// Add evolved field
		const fields = clone.querySelector('.table-fields');
		const newField = document.createElement('div');
		newField.className = 'field new-field';
		newField.textContent = `created_at: TIMESTAMP`;
		fields.appendChild(newField);

		// Replace drop zone or add to v2 panel
		const v2Panel = document.getElementById('schema-v2');
		const dropZone = v2Panel.querySelector('.drop-zone');
		if (dropZone && dropZone.parentElement === v2Panel) {
			v2Panel.replaceChild(clone, dropZone);
		} else {
			v2Panel.appendChild(clone);
		}

		// Log migration
		quansyMigrationCount++;
		logQuansyMigration(tableName, quansyMigrationCount);

		// Animate
		setTimeout(() => {
			clone.classList.add('migration-complete');
		}, 100);
	}
}

function logQuansyMigration(tableName, migrationNum) {
	const log = document.getElementById('migration-log');
	if (!log) return;

	const entry = document.createElement('div');
	entry.className = 'migration-entry';
	entry.innerHTML = `
		<strong>Migration #${migrationNum}:</strong> 
		Evolved table "${tableName}" → Added timestamp field, updated indexes
	`;
	log.appendChild(entry);

	// Animate entry
	setTimeout(() => {
		entry.classList.add('visible');
	}, 50);
}

function resetQuansyDemo() {
	quansyMigrationCount = 0;
	const v2Panel = document.getElementById('schema-v2');
	if (v2Panel) {
		v2Panel.innerHTML = `
			<h4>Schema v2.0</h4>
			<div class="drop-zone">Drop tables here to evolve</div>
		`;
		const dropZone = v2Panel.querySelector('.drop-zone');
		if (dropZone) {
			dropZone.addEventListener('dragover', handleDragOver);
			dropZone.addEventListener('drop', handleDrop);
			dropZone.addEventListener('dragleave', handleDragLeave);
		}
	}
	const log = document.getElementById('migration-log');
	if (log) log.innerHTML = '';
}

// ===== Lento Code Editor Demo =====
const lentoExamples = {
	hello: `// Hello World in Lento
print("Hello, World!");`,
	fibonacci: `// Fibonacci sequence in Lento
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate first 10 numbers
for (let i = 0; i < 10; i++) {
    print("fib(" + i + ") = " + fibonacci(i));
}`,
	class: `// Class example in Lento
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        print("Hello, I'm " + this.name);
        print("I'm " + this.age + " years old");
    }
}

// Create and use instance
let person = new Person("Alice", 30);
person.greet();`
};

function initLentoDemo() {
	const editor = document.getElementById('lento-code');
	if (editor) {
		// Add line numbers effect
		editor.addEventListener('input', updateLentoLineNumbers);
		editor.addEventListener('scroll', syncLentoScroll);
	}
}

function loadLentoExample(exampleName) {
	const editor = document.getElementById('lento-code');
	const output = document.getElementById('lento-output');
	if (editor && lentoExamples[exampleName]) {
		editor.value = lentoExamples[exampleName];
	}
	if (output) {
		output.innerHTML = '';
	}
}

function runLentoCode() {
	const editor = document.getElementById('lento-code');
	const output = document.getElementById('lento-output');
	if (!editor || !output) return;

	const code = editor.value;
	output.innerHTML = '<div class="output-line system">Running code...</div>';

	// Simulate code execution
	setTimeout(() => {
		output.innerHTML = '';
		simulateLentoExecution(code, output);
	}, 500);
}

function simulateLentoExecution(code, outputEl) {
	// Simple simulation of Lento code execution
	const lines = code.split('\n');
	const printRegex = /print\s*\(\s*["'](.+?)["']\s*\)/;
	const printConcatRegex = /print\s*\((.+?)\)/;

	let hasOutput = false;

	lines.forEach((line, index) => {
		const trimmed = line.trim();
		
		// Check for print statements
		if (trimmed.includes('print(')) {
			hasOutput = true;
			let match = printRegex.exec(trimmed);
			if (match) {
				addLentoOutput(match[1], 'output');
			} else {
				// Handle concatenation
				match = printConcatRegex.exec(trimmed);
				if (match) {
					// Simplified: just show the expression
					const expr = match[1].replace(/"/g, '').replace(/'/g, '');
					addLentoOutput(`[Expression: ${expr}]`, 'output');
				}
			}
		}
		
		// Simulate fibonacci results
		if (code.includes('fibonacci') && trimmed.includes('for')) {
			hasOutput = true;
			const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
			fibs.forEach((f, i) => {
				addLentoOutput(`fib(${i}) = ${f}`, 'output');
			});
		}
		
		// Simulate class instantiation
		if (code.includes('class Person') && trimmed.includes('greet()')) {
			hasOutput = true;
			addLentoOutput("Hello, I'm Alice", 'output');
			addLentoOutput("I'm 30 years old", 'output');
		}
	});

	if (!hasOutput) {
		addLentoOutput('Code executed successfully (no output)', 'system');
	}
}

function addLentoOutput(text, type = 'output') {
	const output = document.getElementById('lento-output');
	if (!output) return;

	const line = document.createElement('div');
	line.className = `output-line ${type}`;
	line.textContent = text;
	output.appendChild(line);
}

function updateLentoLineNumbers() {
	// Placeholder for line numbers if needed
}

function syncLentoScroll() {
	// Placeholder for scroll sync if needed
}

// Initialize all demos when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
	if (document.getElementById('gsh-demo')) {
		initGSHDemo();
	}
	if (document.getElementById('quansy-demo')) {
		initQuansyDemo();
	}
	if (document.getElementById('lento-demo')) {
		initLentoDemo();
	}
});
