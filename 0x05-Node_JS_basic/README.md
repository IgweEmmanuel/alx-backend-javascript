# Node JS Basic

This Project is on nodejs, the server side javascript code.

[![cat](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240917%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240917T142234Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f91b5668f8c41c7a32337332282c40d76d12b08297004a6140603895477f308a)](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240917%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240917T142234Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f91b5668f8c41c7a32337332282c40d76d12b08297004a6140603895477f308a)

## Tasks

### 0. Executing basic javascript with Node JS

---

> In the file 0-console.js, create a function named displayMessage that prints in STDOUT the string argument.

```js
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
```

### Repo:

- GitHub repository: alx-backend-javascript
- Directory: 0x05-Node_JS_basic
- File: 0-console.js

---

### 1. Using Process stdin

---

> mandatory
> Create a program named 1-stdin.js that will be executed through command line:
>
> It should display the message Welcome to Holberton School, what is your name? (followed by a new line)
> The user should be able to input their name on a new line
> The program should display Your name is: INPUT
> When the user ends the program, it should display This important software is now closing (followed by a new line)
> Requirements:
>
> Your code will be tested through a child process, make sure you have everything you need for that

```js
bob@dylan:~$ node 1-stdin.js
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$
bob@dylan:~$ echo "John" | node 1-stdin.js
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$
```

### Repo:

- GitHub repository: alx-backend-javascript
- Directory: 0x05-Node_JS_basic
- File: 1-stdin.js
