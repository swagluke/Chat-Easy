export let autocompleteCS = () => {
var availableTags = [
   ".NET",
    "/n",
    "/r",
    "1GL",
    "2GL",
    "3GL",
    "4GL",
    "5GL",
    "Abend",
    "Absolute address",
    "Absolute Coding",
    "Access violation",
    "ACM",
    "Action statement",
    "ActionScript",
    "ActiveX",
    "Ada",
    "Add",
    "Advanced SCSI Programming Interface",
    "Aggregation",
    "Agile development methods",
    "Agile Manifesto",
    "Alert",
    "Algol",
    "Algorithm",
    "Ambient Occlusion",
    "AOP",
    "API",
    "Applet",
    "Argument",
    "Arithmetic operator",
    "Array",
    "Array of pointers",
    "ASCII",
    "ASPI",
    "Assembler",
    "Assembly",
    "Associative operation",
    "AutoHotkey",
    "Automata-based programming",
    "Automated unit testing",
    "Babel",
    "Backend ",
    "Back-face culling",
    "Background thread",
    "Backpropagation neural network",
    "Base address",
    "Batch file",
    "Batch job",
    "BCPL",
    "Bean",
    "BeanShell",
    "Binary Search",
    "Bind",
    "Bit shift",
    "Bitwise operators",
    "Block",
    "Block-level element",
    "BOM",
    "Bool",
    "Boolean",
    "Boolean data type",
    "Bracket",
    "Branch",
    "Brooks",
    "Bug",
    "Bug tracking",
    "Bugfairy",
    "Build computer",
    "Bytecode",
    "C",
    "C sharp",
    "C++",
    "C#",
    "Camel book",
    "CamelCase",
    "Captured variable",
    "CC",
    "Chaos model",
    "Char",
    "Character code",
    "Character encoding",
    "Character set",
    "Chaos model",
    "Circuit satisfiability problem",
    "Class",
    "Class",
    "Classpath",
    "Clojure",
    "Closure",
    "CLR",
    "COBOL",
    "Cocoa",
    "Cocoa touch",
    "Code",
    "Code refactoring",
    "Codepage",
    "CoffeeScript",
    "Command language",
    "Comment",
    "Common business oriented language",
    "Common Gateway Interface",
    "Compilation",
    "Compile",
    "Compiler",
    "Complementarity ",
    "Compute",
    "Computer science",
    "Commutative operation",
    "Concat",
    "Concatenation",
    "Concurrency",
    "Conditional expression",
    "Conditional statement",
    "Constructor chaining",
    "Content migration",
    "Control flow",
    "CPAN",
    "CPL",
    "Crapplet",
    "CSAT",
    "CSS",
    "CSS compressor",
    "CSS editor",
    "Curly bracket",
    "Curry",
    "CVS",
    "Cygwin",
    "D",
    "DarkBASIC",
    "Dataflow Programming",
    "Data-flow analysis",
    "Data flow diagram",
    "Data source",
    "Data type",
    "Datalog",
    "DDE",
    "Dead code",
    "Debug",
    "Debugger",
    "Debugging",
    "Declaration",
    "Declarative programming",
    "Declare",
    "Decompiler",
    "Deductive database",
    "Dense matrix",
    "Dereference operator",
    "Dependent variable",
    "Developer",
    "DHTML",
    "Die",
    "Diff",
    "Direct address",
    "Discrete optimization",
    "Dissembler",
    "Django",
    "DML",
    "Do",
    "DOM",
    "Dragon book",
    "Dribbleware",
    "Dump",
    "Dword",
    "Dylan programming language",
    "Dynamic dump",
    "Eclipse",
    "ECMAScript",
    "Eight queens problem",
    "Element",
    "Ellipsis",
    "Else",
    "Else if",
    "Elsif",
    "Embedded Java",
    "Encapsulation",
    "Endian",
    "Endless loop",
    "EOF",
    "Epoch",
    "Eq",
    "Error",
    "Errorlevel",
    "Esac",
    "Escape",
    "Escape character",
    "Escape sequence",
    "Eval",
    "Event",
    "Event handler",
    "Event listener",
    "Event-driven programming ",
    "Exec",
    "Exception",
    "Exception handling",
    "Exists",
    "Exponential backoff",
    "Expression",
    "F programming language",
    "F#",
    "False",
    "Fifth generation language",
    "First generation language",
    "First-class object",
    "Flag",
    "Flat file",
    "Floating-point",
    "For",
    "Foreach",
    "Forth",
    "Forth generation language",
    "FORTRAN",
    "Framework",
    "Front end",
    "Function",
    "Functional programming",
    "Fuzz testing",
    "Game of Life",
    "Gang of four ",
    "Garbage collection",
    "Gaussian pyramid",
    "GCC",
    "Ge",
    "General-purpose language",
    "Generation language",
    "Genetic programming",
    "GIGO",
    "Glitch",
    "Glue code",
    "Go language",
    "Goto",
    "GPL",
    "GT",
    "GTK",
    "GW BASIC",
    "HAL",
    "Hard code",
    "Hash",
    "Haskell",
    "Heap",
    "Hello world",
    "Heuristic evaluation",
    "Hex editor",
    "HDML",
    "Hiew",
    "High-level language",
    "HTML",
    "HTML element",
    "HTML form element",
    "HTML head",
    "HTML validator",
    "Hungarian notation",
    "Hwclock",
    "Hypertext Markup Language",
    "IDE",
    "If else",
    "If statement",
    "Immutable object",
    "Imperative programming",
    "Implicit parallelism ",
    "Indirection operator",
    "Inherent error",
    "Inheritance",
    "Inline",
    "Input/output statement",
    "Instance",
    "Instantiation",
    "Instructions",
    "Int",
    "Integer",
    "Integrated Development Environment",
    "IntelliJ IDEA",
    "Intermediate language",
    "Interpreted",
    "Interpreter",
    "Invalid",
    "IPC",
    "ISAPI",
    "Iteration",
    "Java",
    "Java champion",
    "Java EE",
    "Java ME",
    "Java native language",
    "Java reserved words",
    "JavaBean",
    "Javac",
    "JavaFX",
    "JavaScript",
    "JavaScriptCore",
    "Javax",
    "JBuilder",
    "JCL",
    "JDBC",
    "JDK",
    "JIL",
    "JIT",
    "JHTML",
    "JNI",
    "JRE",
    "JScript",
    "JSON",
    "JSP",
    "JSR",
    "JVM",
    "Karel",
    "Kit",
    "Kludge",
    "Kluge",
    "Label",
    "Lambda calculus",
    "Language",
    "Language processor",
    "Lexical analysis",
    "Lexicon",
    "Linker",
    "LISP",
    "Live script",
    "Literal",
    "LLVM",
    "Local optimum",
    "Logic programming",
    "Logical operation",
    "LOGO",
    "Lookup table",
    "Loony bin",
    "Loop",
    "Loophole",
    "Loosely typed language",
    "Low-level language",
    "Library",
    "LT",
    "Lua",
    "LUT",
    "Machine language",
    "Magic quotes",
    "Map",
    "Markup language",
    "Math",
    "Matlab",
    "Mbean",
    "Memoization",
    "Mercurial",
    "Meta-character",
    "Metaclass",
    "Metalanguage",
    "Method",
    "Method overloading",
    "Middleware",
    "Module",
    "Monkey testing",
    "Monte Carlo Method",
    "MSDN",
    "MSVC",
    "Multi-pass compiler",
    "MUMPS",
    "Mutex",
    "NaN",
    "Ne",
    ".NET",
    "Native compiler",
    "Native language",
    "Natural language",
    "NBSP",
    "NDA",
    "Nested function",
    "Nested loop join",
    "Newline",
    "Nil pointer",
    "Node.js",
    "Nodelist",
    "Noncontiguous data structure",
    "Non-Disclosure Agreement",
    "Nonexecutable statement",
    "NO-OPeration instructions",
    "Null",
    "Null character",
    "Null pointer",
    "Object code",
    "Object file",
    "Object module",
    "Object-oriented programming",
    "Objective-C",
    "Obfuscated code",
    "OCaml",
    "Octave",
    "ODBC",
    "OOP",
    "One-pass compiler",
    "Opcode",
    "Open DataBase Connectivity",
    "OpenGL polygon",
    "Operand",
    "Operator",
    "Operator associatively",
    "Operator precedence",
    "OR operator",
    "Overflow error",
    "Overload",
    "P-code",
    "Package",
    "Parenthesis",
    "Parse",
    "Pascal",
    "Pascal case",
    "Pastebin",
    "PDL",
    "Perl",
    "Persistent memory",
    "PersonalJava",
    "PHP",
    "Phrase tag",
    "Pick",
    "Pickling",
    "PicoJava",
    "Pipe",
    "Pixel shader",
    "POD",
    "Pointer",
    "Polymorphism",
    "Pop",
    "Private",
    "Procedural language",
    "Procedure",
    "Process",
    "Program",
    "Program generator",
    "Program listing",
    "Programmable",
    "Programmer",
    "Programming",
    "Programming in logic",
    "Programming language",
    "Programming tools",
    "Prolog",
    "Pseudocode",
    "Pseudolanguage",
    "Pseudo-operation",
    "Public",
    "PureBasic",
    "Push",
    "Python",
    "Python pickling ",
    "Pythonic",
    "Qi",
    "QT",
    "Quick-and-dirty",
    "R programming language",
    "Race condition",
    "Racket",
    "RAD",
    "Random",
    "Random seed",
    "RCS",
    "RDF",
    "Real number",
    "Recursion",
    "Recursive",
    "Regex",
    "Regular expression",
    "Reia",
    "Relational algebra",
    "Religion of Chi",
    "REM",
    "Remark",
    "Repeat counter",
    "REPL",
    "Reserved character",
    "Reserved word",
    "Resource Description Framework ",
    "Return address",
    "Return statement",
    "Reverse engineering",
    "Revision control",
    "ROM BASIC",
    "Routine",
    "Routing algorithm",
    "RPG",
    "Ruby",
    "Run time",
    "Rust",
    "S-expression",
    "Safe font",
    "Sandbox",
    "Scala",
    "Scanf",
    "Schema matching",
    "Scheme programming language",
    "Scratch",
    "SDK",
    "Second generation language",
    "Section",
    "Security Descriptor Definition Language",
    "Seed",
    "Segfault",
    "Separator",
    "Server side",
    "Server side scripting",
    "Servlet",
    "SGML",
    "Shebang",
    "Shell scripts",
    "Shift",
    "Short-circuit operator",
    "Signedness",
    "Simulated annealing",
    "Single step",
    "Smalltalk",
    "SMIL",
    "Snippet",
    "SOAP",
    "Socket",
    "Soft",
    "Software development phases",
    "Software development process",
    "Software engineering",
    "Software library",
    "Software life cycle",
    "Source",
    "Source code",
    "Source computer",
    "Source data",
    "Spaghetti code",
    "Sparse matrix",
    "Sparsity",
    "Special purpose language",
    "SPL",
    "Spooling",
    "SQL",
    "Stack",
    "Stack pointer",
    "Standard attribute",
    "Statement",
    "Stdin",
    "Strong typed language",
    "Stubroutine",
    "Stylesheet",
    "Subprogram",
    "Subroutine",
    "Subscript",
    "Substring",
    "Subversion",
    "Superclass",
    "Switch statement",
    "Syntactic sugar",
    "Syntax error",
    "System development",
    "Systems Engineer",
    "Systems Programming Language",
    "Tail recursion",
    "Tcl",
    "Tcl/Tk",
    "Ternary operator",
    "Third-generation language",
    "Thread",
    "Thunk",
    "Tk",
    "Token",
    "Transcompiler",
    "True",
    "True BASIC",
    "Tuple",
    "Turbo Pascal",
    "Turing completeness",
    "Unary operator",
    "Undefined",
    "Undefined variable",
    "Underflow",
    "Unit test",
    "Unshift",
    "Value",
    "Variable",
    "VB",
    "VHDL",
    "VIM",
    "Visual Basic",
    "Visual Studio",
    "Void",
    "Web development",
    "WebGL",
    "While",
    "Whole number",
    "WML",
    "Workspace",
    "XHTML",
    "XML",
    "XNA",
    "XOR operator",
    "XOXO",
    "XSL",
    "XSLT",
    "Z-buffering",
    "Zombie"
];

var faux = jQuery("#faux");
var arrayused;
var calcfaux;
var retresult;
var checkspace;
var contents = jQuery('#tags')[0];
var carpos;
var fauxpos;
var tier;
var startss;
var endss;

function getCaret(el) {
    if (el.selectionStart) {
        return el.selectionStart;
    } else if (document.selection) {
        el.focus();

        var r = document.selection.createRange();
        if (r == null) {
            return 0;
        }

        var re = el.createTextRange(),
            rc = re.duplicate();
        re.moveToBookmark(r.getBookmark());
        rc.setEndPoint('EndToStart', re);

        return rc.text.length;
    }
    return 0;
}

function split(val) {
    return val.split(/ \s*/);
}

function extractLast(term) {
    return split(term).pop();
}
jQuery("#tags")
    .on("keydown", function (event) {
        if (event.keyCode === jQuery.ui.keyCode.TAB &&
            jQuery(this).data("autocomplete").menu.active) {
            event.preventDefault();
        }
    })
    .click(function (event) {
        carpos = getCaret(contents);
        fauxpos = faux.text().length;
        if (carpos < fauxpos) {
            tier = "close";
            jQuery(this).autocomplete("close");
            startss = this.selectionStart;
            endss = this.selectionEnd;
            jQuery(this).val(jQuery(this).val().replace(/ *$/, ''));
            this.setSelectionRange(startss, endss);
        } else {
            tier = "open";
        }

    })
    .on("keyup", function (event) {
        calcfaux = faux.text(jQuery(this).val());
        fauxpos = faux.text().length;
        if (/ $/.test(faux.text()) || tier === "close") {
            checkspace = "space";
        } else {
            checkspace = "nospace";
        }


        if (fauxpos <= 1) {
            tier = "open";
        }
        carpos = getCaret(contents);
        if (carpos < fauxpos) {
            tier = "close";
            jQuery(this).autocomplete("close");
            startss = this.selectionStart;
            endss = this.selectionEnd;
            jQuery(this).val(jQuery(this).val().replace(/ *$/, ''));
            this.setSelectionRange(startss, endss);
        } else {
            tier = "open";
        }
    })
    //mouse caret position dropdown
    .autocomplete({
        minLength: 1,
        search: function (event, ui) {
            var input = jQuery(event.target);
            // custom minLength
            if (checkspace === "space") {
                input.autocomplete("close");
                return false;
            }
        },
        source: function (request, response) {

            var term = jQuery.ui.autocomplete.escapeRegex(extractLast(request.term))
                // Create two regular expressions, one to find suggestions starting with the user's input:
                ,
                startsWithMatcher = new RegExp("^" + term, "i"),
                startsWith = jQuery.grep(availableTags, function (value) {
                    return startsWithMatcher.test(value.label || value.value || value);
                })
                // ... And another to find suggestions that just contain the user's input:
                ,
                containsMatcher = new RegExp(term, "i"),
                contains = jQuery.grep(availableTags, function (value) {
                    return jQuery.inArray(value, startsWith) < 0 &&
                        containsMatcher.test(value.label || value.value || value);
                });

            // Supply the widget with an array containing the suggestions that start with the user's input,
            // followed by those that just contain the user's input.
            response(startsWith.concat(contains));
        },
        open: function (event, ui) {
            var input = jQuery(event.target),
                widget = input.autocomplete("widget"),
                style = jQuery.extend(input.css([
                    "font",
                    "border-left",
                    "padding-left"
                ]), {
                    position: "absolute",
                    visibility: "hidden",
                    "padding-right": 0,
                    "border-right": 0,
                    "white-space": "pre"
                }),
                div = jQuery("<div/>"),
                pos = {
                    my: "left top",
                    collision: "none"
                },
                offset = -7; // magic number to align the first letter
            // in the text field with the first letter
            // of suggestions
            // depends on how you style the autocomplete box

            widget.css("width", "");

            div
                .text(input.val().replace(/\S*$/, ""))
                .css(style)
                .insertAfter(input);
            offset = Math.min(
                Math.max(offset + div.width(), 0),
                input.width() - widget.width()
            );
            div.remove();

            pos.at = "left+" + offset + " bottom";
            input.autocomplete("option", "position", pos);

            widget.position(jQuery.extend({ of: input
            }, pos));
        },
        focus: function () {
            // prevent value inserted on focus
            return false;
        },
        select: function (event, ui) {
            var terms = split(this.value);
            startss = this.selectionStart;
            endss = this.selectionEnd;
            // remove the current input
            terms.pop();
            // add the selected item
            terms.push(ui.item.value);
            // add placeholder to get the comma-and-space at the end
            terms.push("");
            this.setSelectionRange(startss, endss);
            this.value = terms.join(" ");
            calcfaux = faux.text(jQuery(this).val());
            if (/ $/.test(faux.text())) {
                checkspace = "space";
            } else {
                checkspace = "nospace";
            }
            carpos = getCaret(contents);
            fauxpos = faux.text().length;
            return false;
        }
    });
};