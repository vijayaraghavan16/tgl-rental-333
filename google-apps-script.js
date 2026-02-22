/**
 * TGL Suppliers - Google Sheets Integration
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Create a new Google Sheet with the following columns:
 *    Timestamp | Name | Phone | Email | Event Date | Event Type | Location | Guest Count | Services | Message
 * 
 * 2. Go to Extensions > Apps Script
 * 
 * 3. Delete any existing code and paste this entire script
 * 
 * 4. Click on "Deploy" > "New deployment"
 *    - Click on "Select type" > "Web app"
 *    - Description: "TGL Suppliers Booking Form"
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click "Deploy"
 * 
 * 5. Copy the "Web app URL" that appears
 * 
 * 6. Paste that URL in the script.js file where it says:
 *    const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
 * 
 * 7. Click "Authorize access" and grant permissions
 * 
 * IMPORTANT: Replace 'YOUR_SHEET_NAME' below with your actual sheet name
 */

// Configuration
const SHEET_NAME = 'Bookings'; // Change this to your sheet name

// Handle POST requests from the website
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      const newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
      newSheet.appendRow([
        'Timestamp',
        'Name',
        'Phone',
        'Email',
        'Event Date',
        'Event Type',
        'Location',
        'Guest Count',
        'Services',
        'Message'
      ]);
      
      // Format header row
      const headerRange = newSheet.getRange(1, 1, 1, 10);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#d97706');
      headerRange.setFontColor('#ffffff');
      
      // Set column widths
      newSheet.setColumnWidth(1, 180); // Timestamp
      newSheet.setColumnWidth(2, 150); // Name
      newSheet.setColumnWidth(3, 120); // Phone
      newSheet.setColumnWidth(4, 180); // Email
      newSheet.setColumnWidth(5, 120); // Event Date
      newSheet.setColumnWidth(6, 140); // Event Type
      newSheet.setColumnWidth(7, 200); // Location
      newSheet.setColumnWidth(8, 100); // Guest Count
      newSheet.setColumnWidth(9, 250); // Services
      newSheet.setColumnWidth(10, 300); // Message
    }
    
    const activeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // Append the data to the sheet
    activeSheet.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.email,
      data.eventDate,
      data.eventType,
      data.location,
      data.guestCount,
      data.services,
      data.message
    ]);
    
    // Optional: Send email notification to owner
    sendEmailNotification(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'success', 
        message: 'Booking received successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error('Error processing booking:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput('TGL Suppliers Booking System is active. Use POST requests to submit bookings.')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Send email notification to owner
function sendEmailNotification(data) {
  try {
    // Change this to your email address
    const ownerEmail = 'your-email@example.com'; // CHANGE THIS
    
    const subject = `🎉 New Booking Request - ${data.eventType} on ${data.eventDate}`;
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #d97706 0%, #b45309 100%); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0;">TGL Suppliers</h1>
          <p style="margin: 10px 0 0 0;">New Booking Request Received</p>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #1f2937; margin-top: 0;">Customer Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold; width: 40%;">Name</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Phone</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">
                <a href="tel:${data.phone}" style="color: #d97706;">${data.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">
                <a href="mailto:${data.email}" style="color: #d97706;">${data.email}</a>
              </td>
            </tr>
          </table>
          
          <h2 style="color: #1f2937; margin-top: 30px;">Event Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold; width: 40%;">Event Date</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${data.eventDate}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Event Type</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${data.eventType}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Location</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${data.location}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Guest Count</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${data.guestCount}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Services Required</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${data.services}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb; font-weight: bold;">Additional Requirements</td>
              <td style="padding: 12px; background: white; border: 1px solid #e5e7eb;">${data.message}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-left: 4px solid #d97706; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #1f2937;">⏰ Action Required</p>
            <p style="margin: 10px 0 0 0; color: #6b7280;">Please contact the customer within 1 hour to confirm the booking.</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center;">
            <a href="tel:${data.phone}" style="display: inline-block; background: linear-gradient(135deg, #d97706 0%, #b45309 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 50px; font-weight: bold;">
              📞 Call Customer: ${data.phone}
            </a>
          </div>
        </div>
        
        <div style="padding: 20px; background: #1f2937; color: white; text-align: center;">
          <p style="margin: 0; font-size: 14px;">TGL Suppliers - Kanchipuram</p>
          <p style="margin: 5px 0 0 0; font-size: 12px; color: #9ca3af;">Booking received on ${data.timestamp}</p>
        </div>
      </div>
    `;
    
    // Send the email
    MailApp.sendEmail({
      to: ownerEmail,
      subject: subject,
      htmlBody: htmlBody
    });
    
  } catch (error) {
    console.error('Error sending email notification:', error);
    // Don't throw error - we still want to save the booking even if email fails
  }
}

// Function to get all bookings (for testing/viewing)
function getAllBookings() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  return data;
}

// Function to clear all bookings (use with caution!)
function clearAllBookings() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  sheet.clear();
  // Re-add headers
  sheet.appendRow([
    'Timestamp',
    'Name',
    'Phone',
    'Email',
    'Event Date',
    'Event Type',
    'Location',
    'Guest Count',
    'Services',
    'Message'
  ]);
}
