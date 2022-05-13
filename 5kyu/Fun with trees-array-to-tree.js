/*
5 kyu
--> Fun with trees: array to tree
You are given a non-null array of integers. 
Implement the method arrayToTree which creates a 
binary tree from its values in accordance to their order, while creating nodes by depth from left to right.

For example, given the array [17, 0, -4, 3, 15] you should create the following tree:

    17
   /  \
  0   -4
 / \
3   15 
The class TreeNode is available for you:

var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

https://www.codewars.com/kata/57e5a6a67fbcc9ba900021cd/train/javascript
*/


function arrayToTree(values, i = 0) {
    if (i >= values.length) return;
    return new TreeNode(values[i], arrayToTree(values, 2 * i + 1), arrayToTree(values, 2 * i + 2))
};

  

// function arrayToTree(a) {
//     a=a.map(x=>new TreeNode(x)); 
//     a.forEach((x,i)=>(x.left=a[2*i+1],x.right=a[2*i+2]));
//     return a[0];
// };
