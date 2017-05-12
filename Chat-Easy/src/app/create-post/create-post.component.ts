import { PostService } from './../services/post.service';
import { Post } from '../models/post.model';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss', '../shared/common.scss']
})
export class CreatePostComponent implements OnInit {
  [name: string]: any;
  postBody: string;
  arrayOfWords = [
    '.NET',
    '/n',
    '/r',
    '1GL',
    '2GL',
    '3GL',
    '4GL',
    '5GL',
    'Abend',
    'Absolute address',
    'Absolute Coding',
    'Access violation',
    'ACM',
    'Action statement',
    'ActionScript',
    'ActiveX',
    'Ada',
    'Add',
    'Advanced SCSI Programming Interface',
    'Aggregation',
    'Agile development methods',
    'Agile Manifesto',
    'Alert',
    'Algol',
    'Algorithm',
    'Ambient Occlusion',
    'AOP',
    'API',
    'Applet',
    'Argument',
    'Arithmetic operator',
    'Array',
    'Array of pointers',
    'ASCII',
    'ASPI',
    'Assembler',
    'Assembly',
    'Associative operation',
    'AutoHotkey',
    'Automata-based programming',
    'Automated unit testing',
    'Babel',
    'Backend ',
    'Back-face culling',
    'Background thread',
    'Backpropagation neural network',
    'Base address',
    'Batch file',
    'Batch job',
    'BCPL',
    'Bean',
    'BeanShell',
    'Binary Search',
    'Bind',
    'Bit shift',
    'Bitwise operators',
    'Block',
    'Block-level element',
    'BOM',
    'Bool',
    'Boolean',
    'Boolean data type',
    'Bracket',
    'Branch',
    'Brooks',
    'Bug',
    'Bug tracking',
    'Bugfairy',
    'Build computer',
    'Bytecode',
    'C',
    'C sharp',
    'C++',
    'C#',
    'Camel book',
    'CamelCase',
    'Captured variable',
    'CC',
    'Chaos model',
    'Char',
    'Character code',
    'Character encoding',
    'Character set',
    'Chaos model',
    'Circuit satisfiability problem',
    'Class',
    'Class',
    'Classpath',
    'Clojure',
    'Closure',
    'CLR',
    'COBOL',
    'Cocoa',
    'Cocoa touch',
    'Code',
    'Code refactoring',
    'Codepage',
    'CoffeeScript',
    'Command language',
    'Comment',
    'Common business oriented language',
    'Common Gateway Interface',
    'Compilation',
    'Compile',
    'Compiler',
    'Complementarity ',
    'Compute',
    'Computer science',
    'Commutative operation',
    'Concat',
    'Concatenation',
    'Concurrency',
    'Conditional expression',
    'Conditional statement',
    'Constructor chaining',
    'Content migration',
    'Control flow',
    'CPAN',
    'CPL',
    'Crapplet',
    'CSAT',
    'CSS',
    'CSS compressor',
    'CSS editor',
    'Curly bracket',
    'Curry',
    'CVS',
    'Cygwin',
    'D',
    'DarkBASIC',
    'Dataflow Programming',
    'Data-flow analysis',
    'Data flow diagram',
    'Data source',
    'Data type',
    'Datalog',
    'DDE',
    'Dead code',
    'Debug',
    'Debugger',
    'Debugging',
    'Declaration',
    'Declarative programming',
    'Declare',
    'Decompiler',
    'Deductive database',
    'Dense matrix',
    'Dereference operator',
    'Dependent variable',
    'Developer',
    'DHTML',
    'Die',
    'Diff',
    'Direct address',
    'Discrete optimization',
    'Dissembler',
    'Django',
    'DML',
    'Do',
    'DOM',
    'Dragon book',
    'Dribbleware',
    'Dump',
    'Dword',
    'Dylan programming language',
    'Dynamic dump',
    'Eclipse',
    'ECMAScript',
    'Eight queens problem',
    'Element',
    'Ellipsis',
    'Else',
    'Else if',
    'Elsif',
    'Embedded Java',
    'Encapsulation',
    'Endian',
    'Endless loop',
    'EOF',
    'Epoch',
    'Eq',
    'Error',
    'Errorlevel',
    'Esac',
    'Escape',
    'Escape character',
    'Escape sequence',
    'Eval',
    'Event',
    'Event handler',
    'Event listener',
    'Event-driven programming ',
    'Exec',
    'Exception',
    'Exception handling',
    'Exists',
    'Exponential backoff',
    'Expression',
    'F programming language',
    'F#',
    'False',
    'Fifth generation language',
    'First generation language',
    'First-class object',
    'Flag',
    'Flat file',
    'Floating-point',
    'For',
    'Foreach',
    'Forth',
    'Forth generation language',
    'FORTRAN',
    'Framework',
    'Front end',
    'Function',
    'Functional programming',
    'Fuzz testing',
    'Game of Life',
    'Gang of four ',
    'Garbage collection',
    'Gaussian pyramid',
    'GCC',
    'Ge',
    'General-purpose language',
    'Generation language',
    'Genetic programming',
    'GIGO',
    'Glitch',
    'Glue code',
    'Go language',
    'Goto',
    'GPL',
    'GT',
    'GTK',
    'GW BASIC',
    'HAL',
    'Hard code',
    'Hash',
    'Haskell',
    'Heap',
    'Hello world',
    'Heuristic evaluation',
    'Hex editor',
    'HDML',
    'Hiew',
    'High-level language',
    'HTML',
    'HTML element',
    'HTML form element',
    'HTML head',
    'HTML validator',
    'Hungarian notation',
    'Hwclock',
    'Hypertext Markup Language',
    'IDE',
    'If else',
    'If statement',
    'Immutable object',
    'Imperative programming',
    'Implicit parallelism ',
    'Indirection operator',
    'Inherent error',
    'Inheritance',
    'Inline',
    'Input/output statement',
    'Instance',
    'Instantiation',
    'Instructions',
    'Int',
    'Integer',
    'Integrated Development Environment',
    'IntelliJ IDEA',
    'Intermediate language',
    'Interpreted',
    'Interpreter',
    'Invalid',
    'IPC',
    'ISAPI',
    'Iteration',
    'Java',
    'Java champion',
    'Java EE',
    'Java ME',
    'Java native language',
    'Java reserved words',
    'JavaBean',
    'Javac',
    'JavaFX',
    'JavaScript',
    'JavaScriptCore',
    'Javax',
    'JBuilder',
    'JCL',
    'JDBC',
    'JDK',
    'JIL',
    'JIT',
    'JHTML',
    'JNI',
    'JRE',
    'JScript',
    'JSON',
    'JSP',
    'JSR',
    'JVM',
    'Karel',
    'Kit',
    'Kludge',
    'Kluge',
    'Label',
    'Lambda calculus',
    'Language',
    'Language processor',
    'Lexical analysis',
    'Lexicon',
    'Linker',
    'LISP',
    'Live script',
    'Literal',
    'LLVM',
    'Local optimum',
    'Logic programming',
    'Logical operation',
    'LOGO',
    'Lookup table',
    'Loony bin',
    'Loop',
    'Loophole',
    'Loosely typed language',
    'Low-level language',
    'Library',
    'LT',
    'Lua',
    'LUT',
    'Machine language',
    'Magic quotes',
    'Map',
    'Markup language',
    'Math',
    'Matlab',
    'Mbean',
    'Memoization',
    'Mercurial',
    'Meta-character',
    'Metaclass',
    'Metalanguage',
    'Method',
    'Method overloading',
    'Middleware',
    'Module',
    'Monkey testing',
    'Monte Carlo Method',
    'MSDN',
    'MSVC',
    'Multi-pass compiler',
    'MUMPS',
    'Mutex',
    'NaN',
    'Ne',
    '.NET',
    'Native compiler',
    'Native language',
    'Natural language',
    'NBSP',
    'NDA',
    'Nested function',
    'Nested loop join',
    'Newline',
    'Nil pointer',
    'Node.js',
    'Nodelist',
    'Noncontiguous data structure',
    'Non-Disclosure Agreement',
    'Nonexecutable statement',
    'NO-OPeration instructions',
    'Null',
    'Null character',
    'Null pointer',
    'Object code',
    'Object file',
    'Object module',
    'Object-oriented programming',
    'Objective-C',
    'Obfuscated code',
    'OCaml',
    'Octave',
    'ODBC',
    'OOP',
    'One-pass compiler',
    'Opcode',
    'Open DataBase Connectivity',
    'OpenGL polygon',
    'Operand',
    'Operator',
    'Operator associatively',
    'Operator precedence',
    'OR operator',
    'Overflow error',
    'Overload',
    'P-code',
    'Package',
    'Parenthesis',
    'Parse',
    'Pascal',
    'Pascal case',
    'Pastebin',
    'PDL',
    'Perl',
    'Persistent memory',
    'PersonalJava',
    'PHP',
    'Phrase tag',
    'Pick',
    'Pickling',
    'PicoJava',
    'Pipe',
    'Pixel shader',
    'POD',
    'Pointer',
    'Polymorphism',
    'Pop',
    'Private',
    'Procedural language',
    'Procedure',
    'Process',
    'Program',
    'Program generator',
    'Program listing',
    'Programmable',
    'Programmer',
    'Programming',
    'Programming in logic',
    'Programming language',
    'Programming tools',
    'Prolog',
    'Pseudocode',
    'Pseudolanguage',
    'Pseudo-operation',
    'Public',
    'PureBasic',
    'Push',
    'Python',
    'Python pickling ',
    'Pythonic',
    'Qi',
    'QT',
    'Quick-and-dirty',
    'R programming language',
    'Race condition',
    'Racket',
    'RAD',
    'Random',
    'Random seed',
    'RCS',
    'RDF',
    'Real number',
    'Recursion',
    'Recursive',
    'Regex',
    'Regular expression',
    'Reia',
    'Relational algebra',
    'Religion of Chi',
    'REM',
    'Remark',
    'Repeat counter',
    'REPL',
    'Reserved character',
    'Reserved word',
    'Resource Description Framework ',
    'Return address',
    'Return statement',
    'Reverse engineering',
    'Revision control',
    'ROM BASIC',
    'Routine',
    'Routing algorithm',
    'RPG',
    'Ruby',
    'Run time',
    'Rust',
    'S-expression',
    'Safe font',
    'Sandbox',
    'Scala',
    'Scanf',
    'Schema matching',
    'Scheme programming language',
    'Scratch',
    'SDK',
    'Second generation language',
    'Section',
    'Security Descriptor Definition Language',
    'Seed',
    'Segfault',
    'Separator',
    'Server side',
    'Server side scripting',
    'Servlet',
    'SGML',
    'Shebang',
    'Shell scripts',
    'Shift',
    'Short-circuit operator',
    'Signedness',
    'Simulated annealing',
    'Single step',
    'Smalltalk',
    'SMIL',
    'Snippet',
    'SOAP',
    'Socket',
    'Soft',
    'Software development phases',
    'Software development process',
    'Software engineering',
    'Software library',
    'Software life cycle',
    'Source',
    'Source code',
    'Source computer',
    'Source data',
    'Spaghetti code',
    'Sparse matrix',
    'Sparsity',
    'Special purpose language',
    'SPL',
    'Spooling',
    'SQL',
    'Stack',
    'Stack pointer',
    'Standard attribute',
    'Statement',
    'Stdin',
    'Strong typed language',
    'Stubroutine',
    'Stylesheet',
    'Subprogram',
    'Subroutine',
    'Subscript',
    'Substring',
    'Subversion',
    'Superclass',
    'Switch statement',
    'Syntactic sugar',
    'Syntax error',
    'System development',
    'Systems Engineer',
    'Systems Programming Language',
    'Tail recursion',
    'Tcl',
    'Tcl/Tk',
    'Ternary operator',
    'Third-generation language',
    'Thread',
    'Thunk',
    'Tk',
    'Token',
    'Transcompiler',
    'True',
    'True BASIC',
    'Tuple',
    'Turbo Pascal',
    'Turing completeness',
    'Unary operator',
    'Undefined',
    'Undefined variable',
    'Underflow',
    'Unit test',
    'Unshift',
    'Value',
    'Variable',
    'VB',
    'VHDL',
    'VIM',
    'Visual Basic',
    'Visual Studio',
    'Void',
    'Web development',
    'WebGL',
    'While',
    'Whole number',
    'WML',
    'Workspace',
    'XHTML',
    'XML',
    'XNA',
    'XOR operator',
    'XOXO',
    'XSL',
    'XSLT',
    'Z-buffering',
    'Zombie'];

  constructor(
    public authService: AuthService,
    private postService: PostService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    try {
      const post = new Post({
        postBody: this.postBody,
        authorKey: this.authService.currentUserUid
      });
      if (this.postBody!=undefined && this.postBody!=null) {
        this.postService.add(post);
        this.postBody = "";
      }
    } catch (e) {
      console.log("Error on submit", e);
    }
  }

  photoSelected(event: any) {
    const file: File = event.target.files[0];
    const metadata = { "content-type": file.type };
    const storageRef: firebase.storage.Reference = firebase.storage().ref().child("photos").child(file.name);
    const uploadTask: firebase.storage.UploadTask = storageRef.put(file, metadata);
    uploadTask.then((uploadSnapShot: firebase.storage.UploadTaskSnapshot) => {
      const downloadUrl = uploadSnapShot.downloadURL;
      this.postBody = downloadUrl;
    })
  }

  triggerInput(inputEl) {
    inputEl.click();
  }
}
