// Simple test script to verify Gradio client integration
// This can be run in the browser console to test the connection

async function testGradioConnection() {
  try {
    console.log("Testing Gradio client connection...");

    // Import the Gradio client dynamically
    const { Client } = await import("@gradio/client");

    console.log("Connecting to ayush81029/virtu-you-chatbot...");
    const client = await Client.connect("ayush81029/virtu-you-chatbot");
    console.log("✅ Successfully connected to Gradio Space");

    // Test a simple message
    console.log("Sending test message...");
    const result = await client.predict("/chat", {
      message: "Hello, how are you?",
      // Removed history parameter as it's not accepted by this Space
    });

    console.log("✅ Received response:", result.data);
    return { success: true, response: result.data };
  } catch (error) {
    console.error("❌ Connection failed:", error);
    return { success: false, error: error.message };
  }
}

// Instructions for testing:
console.log(`
To test the Gradio integration:

1. Open your browser's developer console (F12)
2. Copy and paste the testGradioConnection() function above
3. Run: testGradioConnection().then(console.log)

Or test directly in the chat interface by sending a message.
`);
