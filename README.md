

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is by getElementId we can access any tag of html by their id, and by getElementClass we can access an cklass of html by their class name , querySelector is for single query it can be for id or class and  querySelectorAll is basically fetch everything under same id or class.

### 2. How do you create and insert a new element into the DOM?
Ans: We can  create element by document.createElement() then customize according to requirement and then use various method like append child, insertbefore to insert into the page.

### 3. What is Event Bubbling? And how does it work?
Ans:Event bubbling is a machanism appeared when an event like click strats. cliccking the event and then moves up to its parent automatically. 

### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans:Event delegation মানে হলো  parent element দিয়ে তার সব child element-এর ইভেন্ট handle করা। প্রতিটি child-এর জন্য আলাদা listener দেওয়ার বদলে, শুধু parent-এর উপর একটি listener দেওয়া হয়, যা child-এর ইভেন্ট ঘটলে তা detect এবং handle করে।
### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:preventDefault() → ব্রাউজারের ডিফল্ট কাজ বন্ধ করে।

stopPropagation() → ইভেন্টের parent-এ যাওয়া বন্ধ করে।
