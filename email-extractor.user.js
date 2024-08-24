// ==UserScript==
// @name         Email Extractor
// @namespace    https://github.com/oap/email-extractor-userscript
// @version      1.1
// @description  Extract emails from class list table in a D2L learning shell
// @author       Nico Cai
// @license      CC0-1.0
// @match        https://*/d2l/lms/classlist/*
// @grant        none
// @run-at       document-end
// @updateURL    https://github.com/oap/email-extractor-userscript/raw/main/email-extractor.user.js
// @downloadURL  https://github.com/oap/email-extractor-userscript/raw/main/email-extractor.user.js
// @supportURL   https://github.com/oap/email-extractor-userscript/issues
// @homepageURL  https://github.com/oap/email-extractor-userscript
// @icon         https://github.com/oap/email-extractor-userscript/raw/main/icon.png
// @noframes
// ==/UserScript==


(function() {
    'use strict';

    /**
     * Initializes the script by inserting the button into the target location.
     */
    function initializeScript() {
        // Find the target ul inside div#d_content_r div
        const targetUL = document.querySelector('#d_content_r > div > ul');

        if (targetUL) {
            // Create a new li element to hold the button
            const li = document.createElement('li');
            li.className = 'd2l-action-buttons-item'; // Apply the appropriate class for styling

            // Create the button for extracting emails
            const button = document.createElement('button');
            button.innerText = 'Extract Emails';
            button.className = 'd2l-button'; // Apply the appropriate class for styling

            // Append the button to the new li element
            li.appendChild(button);

            // Append the li to the target ul
            targetUL.appendChild(li);

            // Add a click event listener to the button to trigger email extraction
            button.addEventListener('click', extractEmails);
        } else {
            console.error('Target UL not found.'); // Log an error if the target element is not found
        }
    }

    /**
     * Extracts emails from the class list table and copies them to the clipboard.
     */
    function extractEmails() {
        // Select the table rows that contain the emails
        const rows = document.querySelectorAll('table.d2l-table tr'); // Adjust the selector based on your table structure

        const emails = [];

        rows.forEach(row => {
            // Assuming emails are in the fifth column (index 4)
            const emailCell = row.cells[4]; // Change index based on where emails are located

            if (emailCell) {
                const email = emailCell.textContent.trim();

                // Simple email validation regex
                if (email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/)) {
                    emails.push(email); // Add valid emails to the array
                }
            }
        });

        console.log('Extracted Emails:', emails); // Log the extracted emails for debugging

        // Copy emails to clipboard and show a notification
        if (emails.length > 0) {
            const emailText = emails.join('\n');
            navigator.clipboard.writeText(emailText).then(() => {
                showNotification("Emails copied to clipboard!");
            }).catch(err => {
                console.error('Failed to copy emails to clipboard:', err);
                showNotification('Failed to copy emails to clipboard.');
            });
        } else {
            showNotification('No emails found!'); // Notify user if no emails are found
        }
    }

    /**
     * Displays a notification to the user.
     * @param {string} message - The message to display in the notification.
     */
    function showNotification(message) {
        // Check if browser supports notifications
        if (Notification.permission === "granted") {
            new Notification(message); // Show notification if permission is granted
        } else if (Notification.permission !== "denied") {
            // Request permission to show notifications
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(message); // Show notification if permission is granted
                }
            });
        } else {
            console.warn('Notifications are denied by the user.');
        }
    }

    // Initialize the script
    initializeScript();

})();
