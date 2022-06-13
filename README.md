# technical-test

Hello!
This is a technical-test to show my skills as a Junior QA Engineer for a very important company that is increasing its QA team 💪

The test consists of accessing this [page](https://todomvc.com/examples/vanillajs/#/) and
write automatic tests to test:
- The functionality of adding a to-do
- The functionality of completing a to-do
- The filters of to-do's (active / completed / all)



## TESTING PLAN

To carry out the task, I have prepared a small *test plan* intended to serve as a guide for the tests.


#### **Functionality of adding a to-do**

1. *Add a single to-do*:

    - input: write a single to-do,
    
    - output: the to-do list must have length 1.

2. *Add 3 to-dos*:

    - input: introduce 3 to-dos,
    
    - output: the to-do list must have length 3.

3. *The to-dos render the correct text within the app*:

    - input: introduce 3 to-dos,
    
    - output: every "li" label renders the text introduced.

4. *The footer or to-do-list do not display when there are no to-dos*:

    - input: no to-do introduced,
    
    - output: no to-do list or footer rendered within the app.
    

#### **Functionality to complete a to-do**

5. *When the to-do is completed, it gets a different class*:

    - input: introduce a to-do and mark as completed,
    
    - output: the class "completed" appears in the li(to-do) clicked.
    

#### **Filters of to-do's (active / completed / all)**

6. *Flow of typing 3 to-dos, mark one as completed and see what the filters show*:

    6.1
    - input: add 1 todo and mark as completed,
    - output: the to-do is crossed out.

    6.2
    - input: add other 2 to-dos and click the "All" filter,
    - output: the 3 to-dos are visible, the filter "All" is selected, and the counter must contain: "2 items left".

    6.3
    - input: click the "Active" filter,
    - output: 2 items are visible (not completed).

    6.4
    - input: click the "Completed" filter,
    - output: the list has just one item and the counter is still saying: "2 items left".

    6.5
    - input: click the "Clear completed" filter,
    - output: the list is empty and the input "new-todo" must be visible




## How to get the project started

🔹 Clone this project.

🔹 Run the command`npm run test` to run the tests and see the coverage.

🔹 Run the command `npm run cy:open`if you want to rely on the visual tool: 

the tool opens, but you must be sure that the server is running (use `npm run start` in other terminal). 

Then click the "todo.specs.js" and...
    
    
    
    
        
                                                 **ENJOY, IT IS MAGIC!**
        
        
        



