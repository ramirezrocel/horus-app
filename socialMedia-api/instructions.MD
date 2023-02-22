    - Create a Task Management web application using React
    - Must have the following features:
    	○ All tasks of current user from server
    	○ All tasks from server if the user is an administrator
    	○ Add task
    	○ Delete task
    	○ Edit task title
    	○ Mark task as completed
    	○ Login
    	○ Register
    - API Endpoints:
    	○ POST /api/users
    		§ name - string, required
    		§ username - string, required
    		§ password - string, required
    	○ POST /api/auth
    		§ username - string, required
    		§ password - string, required
    	○ PUT /api/users/:id
    		§ isAdmin - boolean, required
    	○ POST /api/tasks
    		§ title - string, minlength=3, required
    	○ PUT /api/tasks/:id
    		§ title - string, minlength=3, optional
    		§ completed - boolean, optional
    	○ DELETE /api/tasks/:id
    	○ GET /api/tasks (get tasks of current user)
    	○ GET /api/tasks/all (get all tasks in db, can only be accessed by admin user)

Other features not listed above gets additional points.
