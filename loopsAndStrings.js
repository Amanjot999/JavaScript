let user = " "
user = prompt("Enter your Full Name : ");
l = user.trim();
len = l.length;
username = l.toLowerCase().concat(len);
console.log("Username : @",username);