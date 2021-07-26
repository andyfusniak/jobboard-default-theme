# jobboard-default-theme

Theme for the customer facing website for the jobboard.


## File Structure

Both HTML and email templates are held in the `templates` directory in the root of this project in the `html` and `email` directories respectively.


### html directory

The `templates/html` directory contains a set of templates used for various pages.

### layout.html

`templates/html/layout.html` is used to structure the main frame of the site.

### employer directory
The `templates/html/employer` directory has several templates for creating a job (`create-job.html`), signing up an employer (`signup.html`) and indicating the signup link has been sent (`signup-link-sent.html`).

### jobs directory

The `templates/html/jobs` directory contains pages to list a summary of jobs (`list-jobs.html`) and display a single view of a job (`singe-page-job.html`).

### stripe directory

The `templates/html/stripe` directory contains two template pages used to when a payment succeeds (`payment-succss.html`) or is cancelled (`payment-cancel.html`).
