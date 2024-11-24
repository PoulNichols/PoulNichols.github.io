# Project Workflow Document for Team4 Branch

## All Users

1. **Add Features and Subtasks**  
   Add your features and subtasks to the Project Kanban for this Sprint cycle and update them as you progress.

2. **Create a Working Branch**  
   Create a new branch to work on your contributions for the Team4 branch e.g- **SprintCycle2-JF** 
   - while you could use the branch from last Sprint Cycle. Creating a separate branch specifically named for this Sprint cycle would clearly separate work between cycles and make it easier to track specific changes per Sprint.

3. **Fetch and Review Updates**  
   - **Fetch** changes from the Team4 branch regularly to stay up-to-date.
   - **Review** any conflicts separately to ensure you can merge smoothly without overwriting others' work.

4. **Follow Git Commands for Updates**  
   Use the Git commands and sequences learned in class to work on, update, and push your branch. Then, create a pull request for review.

---

## Main Page Styling Improvements (My Responsibility)

1. **Create a Workflow Document**  
   This document serves as an easy reference for everyone to avoid confusion.

2. **Improve Main Page Styling**  
   - Add a header.
   - Add a logo.
   - Expand upon the site introduction.

3. **Additional Styling for User Interaction**  
   Additional styling improvements will be added if time permits.

4. **Ensure Site Functionality**  
   - Update buttons, links, and scripts on the main page as necessary, especially if affected by other team members' contributions.
   - Ensure all main page elements function correctly.

---

## Team Members: Adding Additional Article Files

1. **Add New Article `.html` Files**  
   - Copy the existing `.html` article content from the last Sprint cycle (e.g., `forest.html`).
   - Paste the content into a new `.html` file.
   - Rename the new `.html` file with the following format: `originalfilename-locations.html`.

   **Example:**  
   If your article is being linked from the existing Forest article, name the new file: `forest-locations.html`.

2. **Review HTML Syntax**  
   After pasting, review the content for any HTML syntax issues to ensure each article is functional and styled correctly before saving.

3. **Include the Table of Contents Link**  
   Leave the existing table of contents link in your new articles (carried over from step #1) for user navigation.

4. **Replace Paragraph Content**  
   - Delete the paragraph (content) you added in the last Sprint cycle.
   - Replace it with your new content, for this article. Feel free to include links and images if relevant.

5. **Save the New `.html` File**  
   Save the new file into the `content` folder.

6. **Create a Link from the Original Article**  
   - Go back to the main article (e.g., `forest.html`) and add a link to access the newly created file, changing the article name as needed, following the naming convention listed above, #1

   - Here is an example of the link format that would be used in the forest.html article page that would lead to the newly created forest-location.html: :

      ```html
      <div class="menu">
         <button onclick="loadContent('forest-locations')">Popular Locations</button>
      </div>
      ```

   **Example Path:**  
   `content/forest-locations.html`

---

By following these steps, we ensure a smooth and organized workflow while staying aligned with our project requirements and Sprint cycle goals.