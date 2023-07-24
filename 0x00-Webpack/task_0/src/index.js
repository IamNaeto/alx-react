// Import jQuery
import $ from 'jquery';

// Function to add three paragraphs to the body
function addThreeParagraphs() {
    // Paragraph 1
    const paragraph1 = $('<p>Holberton Dashboard</p>');
    $('body').append(paragraph1);

    // Paragraph 2
    const paragraph2 = $('<p>Dashboard data for the students</p>');
    $('body').append(paragraph2);

    // Paragraph 3
    const paragraph3 = $('<p>Copyright - Holberton School</p>');
    $('body').append(paragraph3);
}

// Call the function to add paragraphs when the DOM is ready
$(function() {
    addThreeParagraphs();
});
